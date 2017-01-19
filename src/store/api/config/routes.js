/*eslint consistent-return: 1*/
const bag = require('../bagRoutes.js');
const customer = require('../customerRoutes.js');

module.exports = function(app, passport) {

  // Customer
  app.get('/api/customer', customer.get);
  app.post('/api/login', passport.authenticate('local-login'), customer.get);
  app.post('/api/customer', passport.authenticate('local-signup'), customer.get);

  app.get('/api/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));
  app.get('/auth/facebook/callback', passport.authenticate('facebook'), customer.get);

  app.post('/api/logout', customer.logout);

  // Shopping Bag
  app.get('/api/bag', bag.get);
  app.post('/api/bag', bag.post);
  app.delete('/api/bag/:itemId', bag.delete);

};
