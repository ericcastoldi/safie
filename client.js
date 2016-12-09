import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './src/store/components/AppRoutes.jsx';

window.onload = () => {
  ReactDOM.render(<AppRoutes/>, document.getElementById('app'));
};


// const React = require('react');
// const ReactDOM = require('react-dom');
// const Safie = require('./src/store/components/Safie.jsx');
//
// ReactDOM.render(
//   Safie,
//   document.getElementById('app'));
