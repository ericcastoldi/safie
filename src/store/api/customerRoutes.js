/*eslint consistent-return: 1*/
const apiResultFactory = require('./apiResultFactory.js');
const customerFactory = require('../model/customerFactory.js');

module.exports = {

  get: (req, res) => {
    let response = apiResultFactory.successResult(customerFactory.whithoutSensitiveInfo(req.user));
    res.json(response);
  },

  login: (req, res) => {
    res.json(customerFactory.whithoutSensitiveInfo(req.user));
  },

  logout: (req, res) => {
    req.logout();
    res.json(apiResultFactory.successResult());
  }
};
