/*eslint consistent-return: 1*/
const Customer = require('../model/customer.js');
const customerFactory = require('../model/customerFactory.js');
const apiResultFactory = require('../model/apiResultFactory.js');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

const strategyOptions = {
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
};

// const localAuth = (req, email, password, done, customDone) => {
//   process.nextTick(() => {
//
//     Customer.findOne({ 'email': email }, (err, customer) => {
//
//       if (err){
//         return done(err);
//       }
//
//       return customDone(customer);
//     });
//   });
// };

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

          let response = apiResultFactory.successResult(customerFactory.whithoutSensitiveInfo(customer), {id: customer.id});
          return done(null, response);
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

            let response = apiResultFactory.successResult(customerFactory.whithoutSensitiveInfo(newCustomer), {id: savedCustomer.id});
            return done(null, response);
          });
        });
      });
    })
  );

  passport.use(new FacebookStrategy({

        clientID: 'configAuth.facebookAuth.clientID',
        clientSecret: 'configAuth.facebookAuth.clientSecret',
        callbackURL: 'configAuth.facebookAuth.callbackURL'
    },

    // facebook will send back the token and profile
    function(token, refreshToken, profile, done) {

        // asynchronous
        process.nextTick(function() {

            // find the user in the database based on their facebook id
            Customer.findOne({ 'facebook.id': profile.id }, function(err, user) {

                // if there is an error, stop everything and return that
                // ie an error connecting to the database
                if (err) {
                    return done(err);
                  }

                // if the user is found, then log them in
                if (user) {
                    return done(null, user); // user found, return that user
                } else {
                    // if there is no user found with that facebook id, create them
                    var customer = new Customer();

                    // set all of the facebook information in our user model
                    // newUser.facebook.id    = profile.id; // set the users facebook id
                    // newUser.facebook.token = token; // we will save the token that facebook provides to the user
                    // newUser.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
                    // newUser.facebook.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first

                    // save our user to the database
                    customer.save(function(saveError) {
                        if (saveError) {
                            throw saveError;
                        }

                        return done(null, customer);
                    });
                }

            });
        });

    }));
};
