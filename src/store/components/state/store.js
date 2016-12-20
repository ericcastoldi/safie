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
var customerReducer = require('./customerReducer.js');
var mysafieReducer = require('./mysafieReducer.js');

//const initialState = window.SAFIE_PRELOADED_STATE;

const rootReducer = Redux.combineReducers({
  menu: menuReducer,
  home: homeReducer,
  bag: bagReducer,
  products: productsReducer,
  product: productReducer,
  customer: customerReducer,
  mysafie: mysafieReducer,
  routing: ReactRouterRedux.routerReducer
});


// window && window.devToolsExtension ? window.devToolsExtension() : function (f) {
//   return f;
// }

var store = Redux.createStore(

  rootReducer,

  initialState,

  Redux.compose(
    Redux.applyMiddleware(
      thunkMiddleware.default,
      loggerMiddleware
    )
  )
);

// if (module.onReload) {
//   module.onReload(() => {
//
//     store.replaceReducer(rootReducer.default || rootReducer);
//
//     // return true to indicate that this module is accepted and
//     // there is no need to reload its parent modules
//     return true;
//   });
// }

module.exports = store;
