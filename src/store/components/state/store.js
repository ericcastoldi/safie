var Redux = require('redux');
const ReactRouter = require('react-router');
var ReactRouterRedux = require('react-router-redux');
var thunkMiddleware = require('redux-thunk');
var createLogger = require('redux-logger');
var loggerMiddleware = createLogger();
var initialState = require('./data/initialState.js');
var home = require('./home.js');
var main = require('./main.js');
var menu = require('./menu.js');
var bag = require('./bag.js');
var customer = require('./customer.js');
var product = require('./product.js');
var collection = require('./collection.js');
var mySafie = require('./mySafie.js');
import { routerMiddleware } from 'react-router-redux';


//const initialState = window.SAFIE_PRELOADED_STATE;

const rootReducer = Redux.combineReducers({
  home: home.reducer,
  main: main.reducer,
  menu: menu.reducer,
  bag: bag.reducer,
  collection: collection.reducer,
  product: product.reducer,
  customer: customer.reducer,
  mySafie: mySafie.reducer,
  routing: ReactRouterRedux.routerReducer
});


// window && window.devToolsExtension ? window.devToolsExtension() : function (f) {
//   return f;
// }

const historyMiddleware = routerMiddleware(ReactRouter.browserHistory);

var store = Redux.createStore(

  rootReducer,

  initialState,

  Redux.compose(
    Redux.applyMiddleware(
      thunkMiddleware.default,
      loggerMiddleware,
      historyMiddleware
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
