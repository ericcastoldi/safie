/*eslint consistent-return: 1*/
const apiResultFactory = require('./apiResultFactory.js');
const customerFactory = require('../model/customerFactory.js');
const Order = require('../model/order.js');
const ObjectId = require('mongoose').Types.ObjectId;


module.exports = {

  get: (req, res) => {
    const customer = customerFactory.whithoutSensitiveInfo(req.user);

    if(!customer){
      res.json(apiResultFactory.successResult());
      return;
    }

    const userId = new ObjectId(req.user.id);

    Order
      .find({
        customer: userId
    })
      .sort({'date': -1})
      .limit(5)
      .exec((err, orders) => {
        if (err) {
          res.json(apiResultFactory.errorResult(err));
        }

        if(!orders){
          res.json(apiResultFactory.successResult(customer));
          return;
        }





        const customerOrders = orders.map(order => {

          const items = {};
          order.items.map((item) => {
            items[item.bagItemId] = Object.assign({}, {
              product: item.product,
              options: item.options
            });
          });

          const shipping = {
            address: order.address,
            price: order.price
          };

          return Object.assign({}, {
            items: items,
            shipping: shipping,
            totalPrice: order.totalPrice,
            status: order.status,
            transactionCode: order.transactionCode,
            date: order.date
          });

        });

        const response = Object.assign({}, customer, {
          orders: customerOrders
        });

        res.json(apiResultFactory.successResult(response));
      });

  },

  login: (req, res) => {
    res.json(customerFactory.whithoutSensitiveInfo(req.user));
  },

  logout: (req, res) => {
    req.logout();
    res.json(apiResultFactory.successResult());
  },

  orders: (req, res) => {

  }


};
