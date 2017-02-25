import React from 'react';
import { Redirect, Router, Route, browserHistory } from 'react-router';
const ReactRouterRedux = require('react-router-redux');
import store from './state/store.js';
import Landing from './Landing.jsx';
import Layout from './Layout.jsx';
import AboutUs from './AboutUs.jsx';
import Product from './Product.jsx';
import ProductsMasonry from './ProductsMasonry.jsx';
import ShoppingBag from './ShoppingBag.jsx';
import CustomerForm from './CustomerForm.jsx';
import LoginForm from './LoginForm.jsx';
import MySafie from './MySafie.jsx';
import Checkout from './Checkout.jsx';
import Policies from './Policies.jsx';
import MeasureYourself from './MeasureYourself.jsx';
import ThankYou from './ThankYou.jsx';

const userIsAuthenticated = () => {
  const state = store.getState();
  return Boolean(state.customer.current.id);
};

const redirectIfAuthenticated = (nextState, replace) => {
  if (userIsAuthenticated()) {
    replace('/my-safie');
  }
};

const redirectIfAuthenticationIsNeeded = (nextState, replace) => {
  if (!userIsAuthenticated()) {
    replace('/login');
  }
};



const history = ReactRouterRedux.syncHistoryWithStore(browserHistory, store);

class Safie extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={history}>
        <Route path="/" component={Landing} />
        <Route component={Layout}>
          <Route path="/bag" component={ShoppingBag} />
          <Route path="/sobre" component={AboutUs} />
          <Route path="/login" component={LoginForm} onEnter={redirectIfAuthenticated} />
          <Route path="/cadastro" component={CustomerForm} onEnter={redirectIfAuthenticated} />
          <Route path="/my-safie" component={MySafie} onEnter={redirectIfAuthenticationIsNeeded} />
          <Route path="/checkout" component={Checkout} onEnter={redirectIfAuthenticationIsNeeded} />
          <Route path="/medidas" component={MeasureYourself} />
          <Route path="/agradecimento" component={ThankYou} />
          <Route path="/entenda" component={MeasureYourself} />
          <Route path="/politicas" component={Policies} />
          <Route path="/colecoes/:collection" component={ProductsMasonry} />
          <Route path="/colecoes/:collection/:product" component={Product} />
        </Route>
        <Redirect from="*" to="/" />
      </Router>
    );
  }

}

module.exports = Safie;
