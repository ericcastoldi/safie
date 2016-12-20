/*eslint consistent-return: 1*/
const apiResultFactory = require('../model/apiResultFactory.js');


//   1475971773639: {
//     options: {
//       color: {
//         name: 'Cinza',
//         hex: '#666666'
//       },
//       measurements: {
//         ombros: 123,
//         bracos: 456,
//         comprimento: 789
//       }
//     },
//     product: {
//       id: 'blazer-soho',
//       name: 'Blazer soho',
//       description: 'Blazer oversized, manga longa, 3 bolsos falsos e 1 fenda posterior. Abotoamento frontal em botões de pressão.',
//       price: '1130,80',
//       measurements: {
//         ombros: null,
//         bracos: null,
//         comprimento: null
//       },
//       defaultColor: 'preto',
//       colors: {
//         preto: {
//           name: 'Preto',
//           hex: '#000000'
//         },
//         cinza: {
//           name: 'Cinza',
//           hex: '#666666'
//         }
//       },
//       pictures: {
//         main: 1,
//         product: 2,
//         paths: {
//           1: '/img/demo/blazer-look-01.jpg',
//           2: '/img/demo/blazer-detalhe.jpg',
//           3: '/img/demo/blazer-look-02.jpg'
//         }
//       }
//     }
//   }

// const productModel = {
//   id: null,
//   name: null,
//   description: null,
//   price: null,
//   measurements: {},
//   defaultColor: null,
//   colors: null,
//   pictures: {
//     main: null,
//     product: null,
//     paths: null
//   }
// };

// const shoppingBagItemOptionsModel = {
//   color: {
//     name: null,
//     hex: null
//   },
//   measurements: {}
// };

// const shoppingBagItemModel = {
//   options: shoppingBagItemOptionsModel,
//   product: productModel
// };

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

module.exports = function(app, passport) {

  app.get('/api/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook'),
    function(req, res) {
      res.json(req.user);
    }
  );

  app.get('/api/customer', (req, res) => {
    let response = apiResultFactory.successResult(req.user);
    res.json(response);
  });

  app.post('/api/customer',
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
    let response = apiResultFactory.successResult();

    req.logout();
    res.json(response);
  });


  // Shopping bag
  // 1. Alterar ShoppingBag e QuickBag para buscarem da api os itens da sacola
  // no carregamento (ShoppingBag) e ao abrir (QuickBag);
  //
  // 2. Alterar Product para adicionar item na sacola utilizando a api
  //
  // 3. Adicionar exibição dos produtos na QuickBag
  //
  // 4. Implementar calculo de frete na sacola de compras
  app.get('/api/bag', function(req, res) {
    var bag = req.session.shoppingBag;
    var actualBag = bag || Object.assign({}, shoppingBagModel);

    let response = apiResultFactory.successResult(actualBag);
    res.json(response);
  });

  app.post('/api/bag', function(req, res) {
    let bag = addToBag(req.body, req.session.shoppingBag);
    req.session.shoppingBag = bag;

    let response = apiResultFactory.successResult(bag);
    res.json(response);
  });

  app.delete('/api/bag/:itemId', function(req, res) {
    let bag = removeFromBag(req.params.itemId, req.session.shoppingBag);
    req.session.shoppingBag = bag;

    let response = apiResultFactory.successResult(bag);
    res.json(response);
  });

};
