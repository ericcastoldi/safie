import axios from 'axios';
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

const isUserAuthenticated = (cb) => {
  axios.get('/api/customer').then((apiResult) => {
    var result = apiResult.data;
    if(result.success) {
      cb((result.data && result.data.id));
    }
  }).catch(() => {
    cb(false);
  });
};

const authCheck = (nextState, replaceState) => {
  isUserAuthenticated((userIsAuthenticated) => {
    if(userIsAuthenticated) {
      replaceState('/my-safie');
      return;
    }

    replaceState('/login');
  });
};




const history = ReactRouterRedux.syncHistoryWithStore(browserHistory, store);

class Safie extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <Router history={history}>
          <Route path="/" component={Landing} />
          <Route component={Layout}>
            <Route path="/bag" component={ShoppingBag} />
            <Route path="/sobre" component={AboutUs} />
            <Route path="/login" component={LoginForm} onEnter={authCheck} />
            <Route path="/cadastro" component={CustomerForm} onEnter={authCheck} />
            <Route path="/my-safie" component={MySafie} onEnter={authCheck} />
            <Route path="/colecoes/:collection" component={ProductsMasonry} />
            <Route path="/colecoes/:collection/:product" component={Product} />
          </Route>
          <Redirect from="*" to="/" />
        </Router>
    );
  }

}

module.exports = Safie;
