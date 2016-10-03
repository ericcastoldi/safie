var Redux = require('redux');
var ReactRouterRedux = require('react-router-redux');
var thunkMiddleware = require('redux-thunk');
var createLogger = require('redux-logger');
var loggerMiddleware = createLogger();
var initialState = require('./data/initialState.js');
var menuReducer = require('./menuReducer.js');
var homeReducer = require('./homeReducer.js');
var bagReducer = require('./bagReducer.js');
var productsReducer = require('./productsReducer.js');
var productReducer = require('./productReducer.js');

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
      thunkMiddleware.default,
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
