/*eslint consistent-return: 1*/
const Customer = require('../model/customer.js');
const LocalStrategy = require('passport-local').Strategy;
//const FacebookStrategy = require('passport-facebook').Strategy;

const apiResultModel = {
  success: false,
  error: null,
  data: null
};

const customerModel = {
  name: null,
  email: null,
  password: null,
  birthday: null,
  phone: null,
  measurements: []
};

const validEmail = (email) => {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const customerFactory = (customerCandidate) => {
  if(!customerCandidate){
    throw 'Instancia vazia de cliente.';
  }

  if(!customerCandidate.name){
    throw 'Informe seu nome.';
  }

  if(!customerCandidate.birthday){
    throw 'Informe sua data de nascimento.';
  }

  if(!Date.parse(customerCandidate.birthday)) {
    throw 'A data de nascimento deve ser uma data válida.';
  }

  if(!customerCandidate.phone){
    throw 'Informe seu telefone.';
  }

  if(!customerCandidate.email){
    throw 'Informe seu e-mail.';
  }

  if(!validEmail(customerCandidate.email)){
    throw 'Informe um e-mail valido.';
  }

  if(!customerCandidate.password){
    throw 'Informe sua senha.';
  }

  if(!customerCandidate.passwordConfirmation){
    throw 'Repita sua senha.';
  }

  if(!(customerCandidate.password === customerCandidate.passwordConfirmation)){
    throw 'A senha e a confirmação da senha devem ser iguais.';
  }

  return Object.assign({}, customerModel, {
    name: customerCandidate.name.trim(),
    email: customerCandidate.email.trim(),
    birthday: new Date(customerCandidate.birthday),
    phone: customerCandidate.phone.trim()
  });

};

module.exports = (passport) => {

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    Customer.findById(id, function(err, user) {
        done(err, user);
    });
  });

  passport.use('local-login', new LocalStrategy(
    function(username, password, done) {
      Customer.findOne({ 'email': username }, function(err, user) {
        if (err) { return done(err); }

        if (!user) {
          return done(null, false, { message: 'Não foi encontrado um usuario com o email' + username + '.' });
        }

        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Senha incorreta.' });
        }

        return done(null, user);
      });
    }
  ));

  passport.use('local-signup', new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
    function(req, email, password, done) {

      process.nextTick(function() {

        Customer.findOne({ 'email': email }, function(err, user) {

          if (err){
            return done(err);
          }

          if (user) {
            return done(null, false, { message: 'Esse email já está em uso.' });
          }

          var customer = customerFactory(req.body);

          var newCustomer = new Customer();
          newCustomer.name = customer.name;
          newCustomer.email = customer.email;
          newCustomer.phone = customer.phone;
          newCustomer.birthday = customer.birthday;
          newCustomer.password = newCustomer.encryptPassword(password);

          // save the user
          newCustomer.save(function(saveError, savedCustomer) {
            if (saveError){
              return done(saveError);
            }

            let response = {
              id: savedCustomer.id,
              success: true,
              error: null,
              data: Object.assign({}, customerModel, {
                id: savedCustomer.id,
                name: savedCustomer.name,
                email: savedCustomer.email,
                birthday: savedCustomer.birthday,
                phone: savedCustomer.phone
              })
            };

            return done(null, response);
          });
        });
      });
    })
  );
};
