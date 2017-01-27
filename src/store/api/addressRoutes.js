/*eslint no-underscore-dangle: 0*/
const apiResultFactory = require('./apiResultFactory.js');
const Address = require('../model/address.js');
const ObjectId = require('mongoose').Types.ObjectId;

const cleanAddress = (address) => {
  return Object.assign({}, {
    addressId: address.id,
    street: address.street,
    number: address.number,
    obs: address.obs,
    district: address.district,
    state: address.state,
    city: address.city,
    code: address.code
  });
};

module.exports = {

  get: (req, res) => {

    const userId = new ObjectId(req.user.id);

    Address.find({customer: userId}, (err, addresses) => {
      if (!err) {
        const addrs = addresses.map(cleanAddress);
        let response = apiResultFactory.successResult(addrs);
        res.json(response);
      }
      else {
        res.json(apiResultFactory.errorResult(err));
      }
    });
  },

  post: (req, res) => {
    const address = req.body;
    const addressId = address.addressId ? new ObjectId(address.addressId) : new ObjectId();

    address.customer = new ObjectId(req.user.id);

    Address.findByIdAndUpdate(addressId, address, { upsert: true, new: true }, (err, doc) => {

        if (err) {
          res.json(apiResultFactory.errorResult(err));
        }

        let response = apiResultFactory.successResult(doc);
        res.json(response);
    });
  },


  delete: (req, res) => {

    if(!req.params.addressId) {
      res.json(apiResultFactory.errorResult('Impossível excluir um endereço sem identificador.'));
    }

    const addressId = new ObjectId(req.params.addressId);

    Address.findByIdAndRemove(addressId, (err) => {

        if (err) {
          res.json(apiResultFactory.errorResult(err));
        }

        res.json(apiResultFactory.successResult());
    });
  }
};
