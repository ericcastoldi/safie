const apiResultFactory = require('./apiResultFactory.js');
const correios = require('correios');
const PagSeguro = require('pagseguro');
const parseXml = require('xml2js').parseString;

const shoppingBagModel = {
  shipping: null,
  items: null,
  total: 0,
  count: 0,
  validMeasurements: false
};


const allTrue = (prev, curr) => {
  return prev && curr;
};

const sum = (prev, curr) => {
  return parseFloat(prev) + parseFloat(curr);
};

const calcTotalPrice = (bag) => {
  const itemsPrice = Object.keys(bag.items)
    .map(itemId => {
      return bag.items[itemId].product.price;
    })
    .reduce(sum);

  const shippingPrice = bag.shipping && bag.shipping.price ?
    bag.shipping.price :
    0;

  return itemsPrice + shippingPrice;
};

const addToBag = (item, bag) => {
  if (!item) {
    throw 'Item inválido.';
  }

  var newItemId = new Date().getTime();
  var actualBag = bag || Object.assign({}, shoppingBagModel);

  actualBag.items = actualBag.items || {};
  actualBag.items[newItemId] = item;
  actualBag.total = calcTotalPrice(actualBag);
  actualBag.count = Object.keys(actualBag.items).length;

  return actualBag;
};

const removeFromBag = (itemId, bag) => {
  if (!itemId) {
    throw 'Item inválido.';
  }

  if (!bag.items || !(itemId in bag.items)) {
    return bag;
  }

  delete bag.items[itemId];
  bag.total = calcTotalPrice(bag);
  bag.count = Object.keys(bag.items).length;

  return bag;
};


const checkShippingPrice = (bag, address, cb) => {

  if (!bag || !bag.items) {
    cb('Escolha as peças que você mais gostou e nos conte suas medidas para fazer seu pedido e receber em sua casa peças incríveis feitas exclusivamente para você!');
    return;
  }

  if (!address || !address.code) {
    cb('Impossível calcular frete. CEP Inválido!');
  }

  const totalWeight = Object.keys(bag.items)
    .map(itemId => {
      return bag.items[itemId].product.weight;
    })
    .reduce(sum) * 0.001;


  correios.getPrice({
    serviceType: 'pac',
    from: '89040-320',
    to: address.code,
    weight: totalWeight.toString(),
    width: 15,
    height: 50,
    length: 30
  }, (err, result) => {

    if (err) {
      cb(err);
    } else {

      bag.shipping = {
        address: address,
        price: result.GrandTotal
      };

      bag.total = calcTotalPrice(bag);

      cb(null, bag);
    }

  });
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

  payment: (req, res) => {

    const bag = req.session.shoppingBag;

    if (!bag || !bag.items) {
      res.json(apiResultFactory.errorResult('Escolha as peças que você mais gostou e nos conte suas medidas para fazer seu pedido e receber em sua casa peças incríveis feitas exclusivamente para você!'));
      return;
    }

    if (!bag.shipping.address) {
      res.json(apiResultFactory.errorResult('Diga pra gente um endereço onde possamos te entregar suas peças exclusivas feitas especialmente para você!'));
      return;
    }

    const pag = new PagSeguro({
      email: 'sabrinefernandess@gmail.com',
      token: '6F26796364124974844649FEAD6B1A71',
      mode: 'sandbox'
    });

    pag.currency('BRL');

    Object.keys(bag.items)
      .map(itemId => {
        var item = bag.items[itemId];
        pag.addItem({
          id: itemId,
          description: item.product.name,
          amount: parseFloat(item.product.price).toFixed(2),
          quantity: 1,
          weight: item.product.weight
        });
      });

    //Configurando as informações do comprador
    pag.buyer({
      name: req.user.name,
      email: req.user.email
    });

    const addr = bag.shipping.address;

    pag.shipping({
      type: 1,
      street: addr.street,
      number: addr.number,
      complement: addr.obs,
      district: addr.district,
      postalCode: addr.code,
      city: addr.city,
      state: addr.state,
      country: 'BRA'
    });

    //pag.setNotificationURL('http://www.lojamodelo.com.br/notificacao');

    //Enviando o xml ao pagseguro
    pag.send(function (err, pagSeguroResponse) {
      if (err) {
        res.json(apiResultFactory.errorResult(err));
        return;
      }

      parseXml(pagSeguroResponse, function (xmlErr, result) {
        if (xmlErr) {
          res.json(apiResultFactory.errorResult(err));
          return;
        }

        if (result.errors) {
          res.json(apiResultFactory.errorResult(result.errors.error[0].message));
          return;
        }

        res.json(apiResultFactory.successResult({
          token: result.checkout.code[0]
        }));

      });

    });

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

  setShippingAddress: (req, res) => {

    let bag = req.session.shoppingBag;
    const address = req.body;

    checkShippingPrice(bag, address, (err, updatedBag) => {
      if (err) {
        res.json(apiResultFactory.errorResult(err));
      } else {
        res.json(apiResultFactory.successResult(updatedBag));
      }
    });
  },

  shipping: (req, res) => {

    let bag = req.session.shoppingBag;

    const address = {
      code: req.query.cep
    };

    checkShippingPrice(bag, address, (err, updatedBag) => {
      if (err) {
        res.json(apiResultFactory.errorResult(err));
      } else {
        res.json(apiResultFactory.successResult(updatedBag));
      }
    });
  }
};
