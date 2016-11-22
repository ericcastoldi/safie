const React = require('react');
const ReactDOM = require('react-dom');
const ReactRedux = require('react-redux');
const ReactRouter = require('react-router');
const ReactRouterRedux = require('react-router-redux');
const Redirect = ReactRouter.Redirect;
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const Provider = ReactRedux.Provider;
const store = require('./state/store.js');
const SafieStore = require('./SafieStore.jsx');
const Landing = require('./Landing.jsx');
const Layout = require('./Layout.jsx');
const Product = require('./Product.jsx');
const ProductsMasonry = require('./ProductsMasonry.jsx');
const ShoppingBag = require('./ShoppingBag.jsx');
const CustomerForm = require('./CustomerForm.jsx');
const LoginForm = require('./LoginForm.jsx');

const history = ReactRouterRedux.syncHistoryWithStore(ReactRouter.browserHistory, store);


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>

      <Route component={SafieStore}>
        <Route path="/" component={Landing} />
      </Route>

      <Route component={Layout}>
        <Route path="/colecoes/:collection" component={ProductsMasonry} />
        <Route path="/colecoes/:collection/:product" component={Product} />
        <Route path="/bag" component={ShoppingBag} />
        <Route path="/customer" component={CustomerForm} />
        <Route path="/login" component={LoginForm} />
      </Route>
      <Redirect from="*" to="/" />
    </Router>
  </Provider>,
  document.getElementById('app'));
