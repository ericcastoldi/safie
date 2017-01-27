const apiResultFactory = require('./apiResultFactory.js');

const shoppingBagModel = {
  shipping: null,
  items: null,
  total: 0
};

const addToBag = (item, bag) => {
  if(!item){
    throw 'Item inválido.';
  }

  var product = item.product;
  var newItemId = new Date().getTime();
  var actualBag = bag || Object.assign({}, shoppingBagModel);

  actualBag.items = actualBag.items || {};
  actualBag.items[newItemId] = item;
  actualBag.total = parseFloat(actualBag.total) + parseFloat(product.price.replace(',', '.'));

  return actualBag;
};

const removeFromBag = (itemId, bag) => {
  if(!itemId){
    throw 'Item inválido.';
  }

  if(!bag.items || !(itemId in bag.items)) {
    return bag;
  }

  const item = bag.items[itemId];
  bag.total = parseFloat(bag.total) - parseFloat(item.product.price.replace(',', '.'));
  delete bag.items[itemId];

  return bag;
};

module.exports = {
  get: (req, res) => {
    var bag = req.session.shoppingBag;
    var actualBag = bag || Object.assign({}, shoppingBagModel);

    let response = apiResultFactory.successResult(actualBag);
    res.json(response);
  },

  post: (req, res) => {
    let bag = addToBag(req.body, req.session.shoppingBag);
    req.session.shoppingBag = bag;

    let response = apiResultFactory.successResult(bag);
    res.json(response);
  },

  delete: (req, res) => {
    let bag = removeFromBag(req.params.itemId, req.session.shoppingBag);
    req.session.shoppingBag = bag;

    let response = apiResultFactory.successResult(bag);
    res.json(response);
  }
};
