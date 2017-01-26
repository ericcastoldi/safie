/*eslint consistent-return: 1*/
const apiResultFactory = require('./apiResultFactory.js');
const Address = require('../model/address.js');
const ObjectId = require('mongoose').Types.ObjectId;

module.exports = {

  get: (req, res) => {

    const userId = new ObjectId(req.user.id);

    Address.find({customer: userId}, (err, addresses) => {
      if (!err) {
        let response = apiResultFactory.successResult(addresses);
        res.json(response);
      }
      else {
        res.json(apiResultFactory.errorResult(err));
      }
    });
  },

  post: (req, res) => {
    const address = req.body;
    const addressId = address.id ? new ObjectId(address.id) : new ObjectId();

    address.customer = new ObjectId(req.user.id);

    Address.findByIdAndUpdate(addressId, address, { upsert: true }, (err, doc) => {

        if (err) {
          res.json(apiResultFactory.errorResult(err));
        }

        let response = apiResultFactory.successResult(doc);
        res.json(response);
    });
  }
};
