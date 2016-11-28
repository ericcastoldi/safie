/*eslint consistent-return: 1*/

module.exports = function(app, passport) {

  app.post('/api/customers',
    passport.authenticate('local-signup'),
    function(req, res) {
      res.json(req.user);
    }
  );

  app.post('/api/login',
    passport.authenticate('local-login'),
    function(req, res) {
      res.json(req.user);
    }
  );

  app.post('/api/logout', function(req, res) {
    let response = {
      success: true
    };

      req.logout();
      res.json(response);
  });
};
