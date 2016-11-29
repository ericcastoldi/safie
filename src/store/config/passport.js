/*eslint consistent-return: 1*/
const Customer = require('../model/customer.js');
const customerFactory = require('../model/customerFactory.js');
const LocalStrategy = require('passport-local').Strategy;
//const FacebookStrategy = require('passport-facebook').Strategy;

const apiResultModel = {
  success: false,
  error: null,
  data: null
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
      Customer.findOne({ 'email': username }, function(err, customer) {

        if (err) { return done(err); }

        if (!customer) {
          return done(null, false, { message: 'Não foi encontrado um usuario com o email' + username + '.' });
        }

        if (!customerFactory.validPassword(password, customer)) {
          return done(null, false, { message: 'Senha incorreta.' });
        }

        let response = {
          id: customer.id,
          success: true,
          error: null,
          data: customerFactory.whithoutSensitiveInfo(customer)
        };

        return done(null, response);
      });
    }
  ));

  passport.use('local-signup', new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
    (req, email, password, done) => {

      process.nextTick(() => {

        Customer.findOne({ 'email': email }, (err, user) => {

          if (err){
            return done(err);
          }

          if (user) {
            return done(null, false, { message: 'Esse email já está em uso.' });
          }

          var newCustomer = new Customer();
          customerFactory.from(req.body, newCustomer);

          newCustomer.save((saveError, savedCustomer) => {
            if (saveError){
              return done(saveError);
            }

            let response = {
              id: savedCustomer.id,
              success: true,
              error: null,
              data: customerFactory.whithoutSensitiveInfo(newCustomer)
            };

            return done(null, response);
          });
        });
      });
    })
  );
};
