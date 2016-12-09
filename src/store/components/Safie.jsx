const React = require('react');
const ReactRouter = require('react-router');
const ReactRouterRedux = require('react-router-redux');
const Redirect = ReactRouter.Redirect;
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const store = require('./state/store.js');
const Landing = require('./Landing.jsx');
const Layout = require('./Layout.jsx');
const Product = require('./Product.jsx');
const ProductsMasonry = require('./ProductsMasonry.jsx');
const ShoppingBag = require('./ShoppingBag.jsx');
const CustomerForm = require('./CustomerForm.jsx');
const LoginForm = require('./LoginForm.jsx');

const history = ReactRouterRedux.syncHistoryWithStore(ReactRouter.browserHistory, store);

class Safie extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <Router history={history}>
          <Route path="/" component={Landing} />
          <Route component={Layout}>
            <Route path="/colecoes/:collection" component={ProductsMasonry} />
            <Route path="/colecoes/:collection/:product" component={Product} />
            <Route path="/bag" component={ShoppingBag} />
            <Route path="/customer" component={CustomerForm} />
            <Route path="/login" component={LoginForm} />
          </Route>
          <Redirect from="*" to="/" />
        </Router>
    );
  }

}

module.exports = Safie;
