const React = require('react');
const ReactDOM = require('react-dom');
const ReactRedux = require('react-redux');
// const ReactRouter = require('react-router');
// const ReactRouterRedux = require('react-router-redux');
// const Redirect = ReactRouter.Redirect;
// const Router = ReactRouter.Router;
// const Route = ReactRouter.Route;
const Provider = ReactRedux.Provider;
const store = require('./state/store.js');
const Safie = require('./Safie.jsx');
// const Landing = require('./Landing.jsx');
// const Layout = require('./Layout.jsx');
// const Product = require('./Product.jsx');
// const ProductsMasonry = require('./ProductsMasonry.jsx');
// const ShoppingBag = require('./ShoppingBag.jsx');
// const CustomerForm = require('./CustomerForm.jsx');
// const LoginForm = require('./LoginForm.jsx');

//const history = ReactRouterRedux.syncHistoryWithStore(ReactRouter.browserHistory, store);


ReactDOM.render(
  <Provider store={store}>
    <Safie />
  </Provider>,
  document.getElementById('app'));
