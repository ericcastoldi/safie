const apiResultFactory = require('./apiResultFactory.js');
const correios = require('correios');

const shoppingBagModel = {
  shipping: null,
  items: null,
  total: 0,
  count: 0,
  validMeasurements: false
};

const addToBag = (item, bag) => {
  if (!item) {
    throw 'Item inválido.';
  }

  var product = item.product;
  var newItemId = new Date().getTime();
  var actualBag = bag || Object.assign({}, shoppingBagModel);

  actualBag.items = actualBag.items || {};
  actualBag.items[newItemId] = item;
  actualBag.total = parseFloat(actualBag.total) + parseFloat(product.price);
  actualBag.count++;

  return actualBag;
};

const removeFromBag = (itemId, bag) => {
  if (!itemId) {
    throw 'Item inválido.';
  }

  if (!bag.items || !(itemId in bag.items)) {
    return bag;
  }

  const item = bag.items[itemId];
  bag.total = parseFloat(bag.total) - parseFloat(item.product.price);
  bag.count--;
  delete bag.items[itemId];

  return bag;
};

const allTrue = (prev, curr) => {
  return prev && curr;
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
  },

  checkout: (req, res) => {

    if (!req.session.shoppingBag ||
      !req.session.shoppingBag.items) {
      res.json(apiResultFactory.errorResult('Escolha as peças que você mais gostou e nos conte suas medidas para fazer seu pedido e receber em sua casa peças incríveis feitas exclusivamente para você!'));
      return;
    }

    var bag = req.session.shoppingBag;
    var actualBag = bag || Object.assign({}, shoppingBagModel);

    let validItemsAndMeasurements = Object.keys(actualBag.items)
      .map(itemId => {
        var item = actualBag.items[itemId];

        const productMeasurements = item.product.measurements;
        const itemMeasurements = item.options.measurements;

        return Object.keys(productMeasurements).map(measurement => {

            if (itemMeasurements && measurement in itemMeasurements) {
              const itemMeasurement = itemMeasurements[measurement];
              return itemMeasurement.value &&
                !isNaN(itemMeasurement.value) &&
                itemMeasurement.value > 0;
            }

            return false;
          })
          .reduce(allTrue);
      })
      .reduce(allTrue);

    let updatedBag = Object.assign({}, actualBag, {
      validMeasurements: Boolean(validItemsAndMeasurements)
    });

    req.session.shoppingBag = updatedBag;

    let response = validItemsAndMeasurements ?
      apiResultFactory.successResult(updatedBag) :
      apiResultFactory.errorResult('Precisamos de todas as suas medidas para podermos criar uma peça incrível para você!');

    res.json(response);
  },

  shipping: (req, res) => {

    let bag = req.session.shoppingBag;

    if (!bag || !bag.items) {
      res.json(apiResultFactory.errorResult('Escolha as peças que você mais gostou e nos conte suas medidas para fazer seu pedido e receber em sua casa peças incríveis feitas exclusivamente para você!'));
      return;
    }

    if (!req.query.cep) {
      res.json(apiResultFactory.errorResult('Impossível calcular frete. CEP Inválido!'));
    }

    const totalWeight = Object.keys(bag.items)
      .map(itemId => {
        return bag.items[itemId].product.weight;
      })
      .reduce((prev, curr) => {
        return prev + curr;
      }) * 0.001;


    correios.getPrice({
      serviceType: 'pac',
      from: '88330-725',
      to: req.query.cep,
      weight: totalWeight.toString(),
      width: 15,
      height: 50,
      length: 30
    }, (err, result) => {

      if (err) {
        res.json(apiResultFactory.errorResult(err));
      } else {
        const shipping = {
          code: req.query.cep,
          price: result.GrandTotal
        };

        const updatedBag = Object.assign({}, bag, {
          shipping: shipping
        });

        res.json(apiResultFactory.successResult(updatedBag));
      }

    });
  }
};
