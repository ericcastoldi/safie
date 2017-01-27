/*eslint consistent-return: 0*/
const Customer = require('../../model/customer.js');
const customerFactory = require('../../model/customerFactory.js');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

const strategyOptions = {
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
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

  passport.use('local-login', new LocalStrategy(strategyOptions,
    function(req, email, password, done) {
      process.nextTick(() => {

        Customer.findOne({ 'email': email }, function(err, customer) {

          if (err) { return done(err); }

          if (!customer) {
            return done(null, false, { message: 'Não foi encontrado um usuário com o email' + email + '.' });
          }

          if (!customerFactory.validPassword(password, customer)) {
            return done(null, false, { message: 'Senha incorreta.' });
          }

          return done(null, customer);
        });
      });
    }
  ));

  passport.use('local-signup', new LocalStrategy(strategyOptions,
    (req, email, password, done) => {

      process.nextTick(() => {

        Customer.findOne({ 'email': email }, (err, customer) => {

          if (err){
            return done(err);
          }

          if (customer) {
            return done(null, false, { message: 'O email ' + email + ' já está em uso.' });
          }

          var newCustomer = new Customer();
          customerFactory.from(req.body, newCustomer);

          newCustomer.save((saveError, savedCustomer) => {

            if (saveError){
              return done(saveError);
            }

            return done(null, savedCustomer);
          });
        });
      });
    })
  );

  passport.use('facebook', new FacebookStrategy({
        clientID: '',
        clientSecret: '',
        callbackURL: 'http://localhost:3000/my-safie',
        profileFields: ['id', 'displayName', 'email', 'birthday'],
        passReqToCallback: true
    },

    // facebook will send back the token and profile
    function(req, token, refreshToken, profile, done) {

        // asynchronous
        process.nextTick(function() {

            // find the user in the database based on their facebook id
            Customer.findOne({ 'facebookId': profile.id }, function(err, user) {

                // if there is an error, stop everything and return that
                // ie an error connecting to the database
                if (err) {
                    return done(err);
                  }

                // if the user is found, then log them in
                if (user) {
                    return done(null, user); // user found, return that user
                } else {

                    var customer = new Customer();
                    customer.name = profile.displayName;
                    customer.email = profile.email;
                    customer.birthday = profile.birthday ? new Date(profile.birthday) : null;
                    customer.facebookId = profile.id;
                    customer.facebookToken = token;

                    customer.save(function(saveError, savedCustomer) {
                        if (saveError) {
                            throw saveError;
                        }

                        return done(null, savedCustomer);
                    });
                }

            });
        });

    }));
};
