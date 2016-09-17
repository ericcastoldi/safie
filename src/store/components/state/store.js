var Redux = require('redux');
var ReactRouterRedux = require('react-router-redux');
var thunkMiddleware = require('redux-thunk')
  .default;
var createLogger = require('redux-logger');
var loggerMiddleware = createLogger();


var initialState = {
  main: {
    subscribePopupOn: true,
    quickBagOpened: false,
    mobileMenuOpened: false
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
  case 'TOGGLE_MOBILE_MENU':
    return Object.assign({}, state, {
      mobileMenuOpened: !state.mobileMenuOpened
    });
  default:
    return state;
  }
};

// Combine Reducers
const rootReducer = Redux.combineReducers({
  main: mainReducer,
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
