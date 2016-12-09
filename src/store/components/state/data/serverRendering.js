const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Redux = require('redux');
const ReactRouterRedux = require('react-router-redux');
const ReactRedux = require('react-redux');
const Provider = ReactRedux.Provider;
const thunkMiddleware = require('redux-thunk');
const createLogger = require('redux-logger');
const loggerMiddleware = createLogger();
const initialState = require('./initialState.js');
const menuReducer = require('../menuReducer.js');
const homeReducer = require('../homeReducer.js');
const bagReducer = require('../bagReducer.js');
const productsReducer = require('../productsReducer.js');
const productReducer = require('../productReducer.js');
const customerReducer = require('../customerReducer.js');
const Safie = require('../../Safie.jsx');

const rootReducer = Redux.combineReducers({
  menu: menuReducer,
  home: homeReducer,
  bag: bagReducer,
  products: productsReducer,
  product: productReducer,
  customer: customerReducer,
  routing: ReactRouterRedux.routerReducer
});

function renderFullPage(html, preloadedState) {

  return `<!DOCTYPE html>
  <html>
    <head>

      <meta charset="utf-8">
      <meta name="description" content="Safie">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Safie</title>

      <link href="https://fonts.googleapis.com/css?family=Bree+Serif|Open+Sans|Raleway" rel="stylesheet">
      <link rel="stylesheet" href="/font-awesome/css/font-awesome.min.css">
      <link rel="stylesheet" href="/skeleton-css/css/normalize.css">
      <link rel="stylesheet" href="/skeleton-css/css/skeleton.css">
      <link rel="stylesheet" href="/store.css">
      <link rel="stylesheet" href="/tables.css">
      <link rel="stylesheet" href="/masonry.css">

      <link rel="icon" type="image/png" href="/img/favicon.png">

    </head>

    <body>
      <div id="app">${html}</div>
      <script>
        window.SAFIE_PRELOADED_STATE = ${JSON.stringify(preloadedState)}
      </script>
      <script src="/application.js"></script>
    </body>

  </html>`;

}


function handleRender(req, res) {
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


  // Render the component to a string
  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <Safie />
    </Provider>
  );

  // Grab the initial state from our Redux store
  const preloadedState = store.getState();

  // Send the rendered page back to the client
  res.send(renderFullPage(html, preloadedState));
}

module.exports = handleRender;
