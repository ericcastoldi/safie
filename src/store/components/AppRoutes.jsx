import React from 'react';
import { Router, browserHistory } from 'react-router';
import routes from '../config/routes.js';
// import ReactRouterRedux from 'react-router-redux';
// import store from './state/store.js';

//const history = ReactRouterRedux.syncHistoryWithStore(browserHistory, store);


export default class AppRoutes extends React.Component {
  render() {
    return (
      <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>
    );
  }
}
