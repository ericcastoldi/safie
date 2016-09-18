var Redux = require('redux');
var ReactRouterRedux = require('react-router-redux');
var thunkMiddleware = require('redux-thunk')
  .default;
var createLogger = require('redux-logger');
var loggerMiddleware = createLogger();


var initialState = {
  main: {
    subscribePopupOn: true,
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
            route: '/produtos'
          },
          {
            title: 'Barcelona',
            route: '/produtos'
          },
          {
            title: 'Coleções Cápsula',
            route: '/produtos'
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
};

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

var footerReducer = function (state = initialState.footer, action) {
  return state;
}


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

var mainReducer = function (state = initialState, action) {
  switch (action.type) {
  case 'DISMISS_SUBSCRIBE_POPUP':
    return Object.assign({}, state, {
      subscribePopupOn: false
    });
  case 'TOGGLE_QUICK_BAG':
    return Object.assign({}, state, {
      quickBagOpened: !state.quickBagOpened
    });
  default:
    return state;
  }
};

// Combine Reducers
const rootReducer = Redux.combineReducers({
  main: mainReducer,
  menu: menuReducer,
  footer: footerReducer,
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
