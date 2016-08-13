var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Redirect = ReactRouter.Redirect;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;


var SafieStore = require('./SafieStore.jsx');



ReactDOM.render(
  <Router history={ReactRouter.browserHistory}>
      <Route path="/" component={SafieStore} />
      <Redirect from="*" to="/" />
  </Router>,
  document.getElementById('app'));
