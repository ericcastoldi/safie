var Redux = require('redux');
var ReactRouterRedux = require('react-router-redux');
var thunkMiddleware = require('redux-thunk')
  .default;
var createLogger = require('redux-logger');
var loggerMiddleware = createLogger();


// const actionTypes = {
//   DISMISS_SUBSCRIBE_POPUP: 'DISMISS_SUBSCRIBE_POPUP',
//   RECEIVE_PRODUCTS: 'RECEIVE_PRODUCTS',
//   CANNOT_RECEIVE_PRODUCTS: 'CANNOT_RECEIVE_PRODUCTS',
//   REQUEST_CATEGORIES: 'REQUEST_CATEGORIES',
//   RECEIVE_CATEGORIES: 'RECEIVE_CATEGORIES',
//   CANNOT_RECEIVE_CATEGORIES: 'CANNOT_RECEIVE_CATEGORIES',
//   REQUEST_FEATURED_ITEMS: 'REQUEST_FEATURED_ITEMS',
//   RECEIVE_FEATURED_ITEMS: 'RECEIVE_FEATURED_ITEMS',
//   CANNOT_RECEIVE_FEATURED_ITEMS: 'CANNOT_RECEIVE_FEATURED_ITEMS'
// };


var initialState = {
  home: {
    subscribePopupOn: true,
    footer: {
      policies: [
        {
          name: 'Central de Atendimento',
          items: [
            {
              title: 'Fale Conosco',
              route: '/fale-conosco'
            }, {
              title: 'atendimento@safie.com.br'
            }, {
              title: 'Telefone: (47) 3321-6698'
            }, {
              title: 'De segunda a sexta das 10 às 17'
            }
          ]
        }, {
          name: 'Informações',
          items: [
            {
              title: 'Meus pedidos',
              route: '/meus-pedidos'
            }, {
              title: 'Trocas e Devoluções',
              route: '/politicas/trocas'
            }, {
              title: 'Prazos de Entrega',
              route: '/politicas/entregas'
            }, {
              title: 'Pagamentos',
              route: '/politicas/pagamentos'
            }
          ]
        }, {
          name: 'Pagamentos e Segurança',
          items: [
            {
              title: 'Cartão de Crédito'
            }, {
              title: 'Parcelamento em até 5x sem juros'
            }, {
              title: 'Parcela mínima de R$ 300,00.'
            }
          ]
        }
      ]
    }
  },
  bag: {
    quickBagOpened: false
  },
  menu: {
    mobileMenuOpened: false,
    items: [
      {
        title: 'Home',
        route: '/'
      },
      {
        id: 'colecoes',
        expanded: false,
        title: 'Coleções',
        items: [
          {
            title: 'Safie Conceito',
            route: '/colecoes/safie-conceito'
          },
          {
            title: 'Barcelona',
            route: '/colecoes/barcelona'
          },
          {
            title: 'Coleções Cápsula',
            route: '/colecoes/capsula'
          }
        ]
      },
      {
        id: 'mysafie',
        expanded: false,
        title: 'My Safie',
        items: [
          {
            title: 'Medidas',
            route: '/medidas'
          },
          {
            title: 'Login',
            route: '/login'
          }
        ]
      },
      {
        title: 'Sobre Nós',
        route: '/sobre'
      },
      {
        title: 'Contato',
        route: '/contato'
      }
    ]
  },
  product: {
    measuresPopupOpen: false
  },
  products: {
    'barcelona': [
      {
        id: 'saia-lapis',
        name: 'SAIA LÁPIS URBAN',
        description: 'A SAIA LÁPIS URBAN é confeccionada em tecido encorpado e flexível com toque de viscose. O modelo saia lápis se adapta facilmente em diferentes silhuetas, valorizando e modelando as curvas do corpo. Seu comprimento é até os joelhos, caimento ajustado e elegância, sem igual. A peça é detalhada por víes e fenda discreta da parte frontal. Ideal para look no trabalho e jantares à noite.',
        price: '230,90',
        measures: {
          Cintura: null,
          Pernas: null
        },
        pictures: {
          main: 1,
          product: 2,
          paths: {
            1: '/img/demo/saia-lapis-look-01.jpg',
            2: '/img/demo/saia-lapis-detalhe.jpg',
            3: '/img/demo/saia-lapis-look-02.jpg',
            4: '/img/demo/saia-lapis-look-03.jpg'
          }
        }
      },
      {
        id: 'blazer-soho',
        name: 'Blazer soho',
        description: 'Blazer oversized, manga longa, 3 bolsos falsos e 1 fenda posterior. Abotoamento frontal em botões de pressão.',
        price: '1130,80',
        measures: {
          ombros: null,
          bracos: null,
          comprimento: null
        },
        pictures: {
          main: 1,
          product: 2,
          paths: {
            1: '/img/demo/blazer-look-01.jpg',
            2: '/img/demo/blazer-detalhe.jpg',
            3: '/img/demo/blazer-look-02.jpg'
          }
        }
      },
      {
        id: 'calca-noelle',
        name: 'calca noelle',
        description: 'Calça reta com cós com passantes. Possui 4 bolsos sendo os dois posteriores falsos. Fechamento frontal em zíper e botões.',
        price: '522,00',
        measures: {
          cintura: null,
          quadril: null,
          pernas: null
        },
        pictures: {
          main: 1,
          product: 2,
          paths: {
            1: '/img/demo/calca-look-01.jpg',
            2: '/img/demo/calca-detalhe.jpg',
            3: '/img/demo/calca-look-02.jpg'
          }
        }
      },
      {
        id: 'camisa-alabama',
        name: 'CAMISA ALABAMA',
        description: 'Camisa cropped, gola de ponta, manga longa, punho fechado em botão, 2 bolsos e barra com faixa para amarração. Abotoamento frontal.',
        price: '397,00',
        measures: {
          ombros: null,
          bracos: null
        },
        pictures: {
          main: 1,
          product: 2,
          paths: {
            1: '/img/demo/camisa-look-01.jpg',
            2: '/img/demo/camisa-detalhe.jpg',
            3: '/img/demo/camisa-look-02.jpg'
          }
        }
      },
      {
        id: 'camiseta-pop',
        name: 'TOP POP NO STYLE',
        description: 'Top reto em malha, decote arredondado, manga curta e 2 fendas laterais. Estampa frontal: "NAH POP NO STYLE AS STRICTLY ROOTS".',
        price: '144,00',
        measures: {
          ombros: null
        },
        pictures: {
          main: 1,
          product: 2,
          paths: {
            1: '/img/demo/camiseta-look-01.jpg',
            2: '/img/demo/camiseta-detalhe.jpg',
            3: '/img/demo/camiseta-look-02.jpg',
            4: '/img/demo/camiseta-look-03.jpg'
          }
        }
      },
      {
        id: 'casaco-mirage',
        name: 'CASAQUETO MIRAGE',
        description: 'Casaqueto oversized em tricot, manga longa. Possui bordado posterior. Fechamento frontal por abotoamento.',
        price: '1244,00',
        measures: {
          ombros: null,
          bracos: null,
          comprimento: null
        },
        pictures: {
          main: 1,
          product: 2,
          paths: {
            1: '/img/demo/casaco-look-01.jpg',
            2: '/img/demo/casaco-detalhe.jpg',
            3: '/img/demo/casaco-look-02.jpg',
            4: '/img/demo/casaco-look-03.jpg'
          }
        }
      },
      {
        id: 'macacao-xai-xai',
        name: 'macacao xai xai',
        description: 'Top reto em seda, gola alta fechada em colchete e manga longa. Levemente transparente.',
        price: '822,00',
        measures: {
          ombros: null,
          bracos: null,
          pernas: null,
          quadril: null
        },
        pictures: {
          main: 1,
          product: 2,
          paths: {
            1: '/img/demo/macacao-look-01.jpg',
            2: '/img/demo/macacao-detalhe.jpg',
            3: '/img/demo/macacao-look-02.jpg'
          }
        }
      },
      {
        id: 'vestido-elliot',
        name: 'vestido elliot',
        description: 'Vestido curto estilo kimono e decote V. Sem fechamento. Acompanha faixa no mesmo tecido para amarração.',
        price: '689,60',
        measures: {
          ombros: null,
          bracos: null,
          pernas: null,
          quadril: null
        },
        pictures: {
          main: 3,
          product: 2,
          paths: {
            1: '/img/demo/vestido-look-01.jpg',
            2: '/img/demo/vestido-detalhe.jpg',
            3: '/img/demo/vestido-look-02.jpg'
          }
        }
      }
    ]
  }
};

var menuReducer = function (state = initialState.menu, action) {
  switch (action.type) {

  case 'TOGGLE_MOBILE_MENU':
    return Object.assign({}, state, {
      mobileMenuOpened: !state.mobileMenuOpened
    });

  case 'TOGGLE_MENU_SUBITEMS':
    var item = state.items.find(function (it) {
      return it.id === action.menuId;
    });

    if (!item) {
      return state;
    }

    var index = state.items.indexOf(item);
    var changedItem = Object.assign({}, item, {
      expanded: !item.expanded
    });

    var newItems = [
            ...state.items.slice(0, index),
            changedItem,
            ...state.items.slice(index + 1)
      ];

    return Object.assign({}, state, {
      items: newItems
    });

  default:
    return state;

  }
};

var homeReducer = function (state = initialState.home, action) {
  switch (action.type) {
  case 'DISMISS_SUBSCRIBE_POPUP':
    return Object.assign({}, state, {
      subscribePopupOn: false
    });
  default:
    return state;
  }
};

var bagReducer = function (state = initialState.bag, action) {
  switch (action.type) {
  case 'TOGGLE_QUICK_BAG':
    return Object.assign({}, state, {
      quickBagOpened: !state.quickBagOpened
    });
  default:
    return state;
  }
};

var productsReducer = function (state = initialState.products, action) {
  switch (action.type) {
    default: return state;
  }
};


var productReducer = function (state = initialState.product, action) {
  switch (action.type) {
    default: return state;
  }
};


// Combine Reducers
const rootReducer = Redux.combineReducers({
  menu: menuReducer,
  home: homeReducer,
  bag: bagReducer,
  products: productsReducer,
  product: productReducer,
  routing: ReactRouterRedux.routerReducer
});

var store = Redux.createStore(

  rootReducer,

  initialState,

  Redux.compose(
    Redux.applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    ),
    window.devToolsExtension ? window.devToolsExtension() : function (f) {
      return f;
    }
  )
);

if (module.onReload) {
  module.onReload(() => {

    store.replaceReducer(rootReducer.default || rootReducer);

    // return true to indicate that this module is accepted and
    // there is no need to reload its parent modules
    return true;
  });
}

module.exports = store;
