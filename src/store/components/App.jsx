var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Redirect = ReactRouter.Redirect;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var SafieStore = require('./SafieStore.jsx');
var Landing = require('./Landing.jsx');
var Product = require('./Product.jsx');
var Products = require('./Products.jsx');
var ShoppingBag = require('./ShoppingBag.jsx');

ReactDOM.render(
  <Router history={ReactRouter.browserHistory}>
    <Route component={SafieStore}>
      <Route path="/" component={Landing} />
      <Route path="/produtos" component={Products} />
      <Route path="/produtos/:id" component={Product} />
      <Route path="/bag" component={ShoppingBag} />
      <Redirect from="*" to="/" />
    </Route>
  </Router>,
  document.getElementById('app'));
