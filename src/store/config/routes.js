import React from 'react';
import { Route } from 'react-router';
import Landing from '../components/Landing.jsx';

const routes = (
  <Route path="/" component={Landing} />
);

export default routes;

/*
<Router history={history}>
  <Route path="/" component={Landing} />
  <Route component={Layout}>
    <Route path="/colecoes/:collection" component={ProductsMasonry} />
    <Route path="/colecoes/:collection/:product" component={Product} />
    <Route path="/bag" component={ShoppingBag} />
    <Route path="/cadastro" component={CustomerForm} />
    <Route path="/login" component={LoginForm} />
  </Route>
  <Redirect from="*" to="/" />
</Router>
*/
