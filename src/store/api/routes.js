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

const productModel = {
  id: null,
  name: null,
  description: null,
  price: null,
  measurements: {},
  defaultColor: null,
  colors: null,
  pictures: {
    main: null,
    product: null,
    paths: null
  }
};

const shoppingBagItemOptionsModel = {
  color: {
    name: null,
    hex: null
  },
  measurements: {}
};

const shoppingBagItemModel = {
  options: shoppingBagItemOptionsModel,
  product: productModel
};

const shoppingBagModel = {
  items: {},
  total: 0
};

const addToBag = (product, bag) => {
  if(!product){
    throw 'Item inválido.';
  }

  var actualBag = bag || Object.assign({}, shoppingBagModel);

  actualBag.items[product.id] = product;
  actualBag.total += product.price;

  return actualBag;
};

module.exports = function(app, passport) {

  app.get('/api/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook'),
    function(req, res) {
      res.json(req.user);
    }
  );


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
    let response = apiResultFactory.successResult();

    req.logout();
    res.json(response);
  });

  app.post('/api/add-to-bag', function(req, res) {
    let bag = addToBag(req.body, req.session.shoppingBag);
    req.session.shoppingBag = bag;

    let response = apiResultFactory.successResult(bag);
    res.json(response);
  });
};
