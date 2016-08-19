var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Redirect = ReactRouter.Redirect;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;


var SafieStore = require('./SafieStore.jsx');
var ProductGrid = require('./ProductGrid.jsx');
var ProductDetail = require('./ProductDetail.jsx');

ReactDOM.render(
  <Router history={ReactRouter.browserHistory}>
    <Route component={SafieStore}>
      <Route path="/" component={ProductGrid} />
      <Redirect from="*" to="/" />
    </Route>
  </Router>,
  document.getElementById('app'));
