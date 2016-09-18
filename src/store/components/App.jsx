var React = require('react');
var ReactDOM = require('react-dom');
var ReactRedux = require('react-redux');
var ReactRouter = require('react-router');
var ReactRouterRedux = require('react-router-redux');
var Redirect = ReactRouter.Redirect;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Provider = ReactRedux.Provider;
var store = require('./state/store.js');
var SafieStore = require('./SafieStore.jsx');
var Landing = require('./Landing.jsx');
var Layout = require('./Layout.jsx');
var Product = require('./Product.jsx');
var ProductsMasonry = require('./ProductsMasonry.jsx');
var ShoppingBag = require('./ShoppingBag.jsx');

const history = ReactRouterRedux.syncHistoryWithStore(ReactRouter.browserHistory, store);


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={SafieStore}>
        <Route path="/" component={Landing} />
      </Route>


      <Route component={Layout}>
        <Route path="/produtos" component={ProductsMasonry} />
        <Route path="/produtos/:id" component={Product} />
        <Route path="/bag" component={ShoppingBag} />
      </Route>
      <Redirect from="*" to="/" />
    </Router>
  </Provider>,
  document.getElementById('app'));
