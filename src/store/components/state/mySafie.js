import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionTypes from './actionTypes.js';
import actionFactory from './actionFactory.js';
import modelReducer from './modelReducer.js';
import customer from './customer.js';

let mySafie = {
  // shape: null,
  // initialState: null,
  // connect: null,
  // reducer: null
};

mySafie.shape = {
  customer: customer.shape.customer,
  measurementsOpened: React.PropTypes.bool,
  ordersOpened: React.PropTypes.bool,
  addressesOpened: React.PropTypes.bool,
  bagOpened: React.PropTypes.bool,
  toggleMeasurementsBox: React.PropTypes.func,
  toggleOrdersBox: React.PropTypes.func,
  toggleAddressesBox: React.PropTypes.func,
  toggleBagBox: React.PropTypes.func,
  fetchCurrentCustomer: React.PropTypes.func.isRequired
};

mySafie.initialState = {
  measurementsOpened: true,
  ordersOpened: true,
  addressesOpened: true,
  bagOpened: true
};

// Actions
mySafie.toggleMeasurementsBox = actionFactory.simpleActionCreator(actionTypes.TOGGLE_MEASUREMENTS_BOX);
mySafie.toggleOrdersBox = actionFactory.simpleActionCreator(actionTypes.TOGGLE_ORDERS_BOX);
mySafie.toggleAddressesBox = actionFactory.simpleActionCreator(actionTypes.TOGGLE_ADDRESSES_BOX);
mySafie.toggleBagBox = actionFactory.simpleActionCreator(actionTypes.TOGGLE_BAG_BOX);

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    toggleMeasurementsBox: mySafie.toggleMeasurementsBox,
    toggleOrdersBox: mySafie.toggleOrdersBox,
    toggleAddressesBox: mySafie.toggleAddressesBox,
    toggleBagBox: mySafie.toggleBagBox,
    fetchCurrentCustomer: customer.fetchCurrentCustomer
  }, dispatch);
};

const mapStateToProps = (state) => {
  return {
    customer: state.customer.current,
    measurementsOpened: state.mySafie.measurementsOpened,
    ordersOpened: state.mySafie.ordersOpened,
    addressesOpened: state.mySafie.addressesOpened,
    bagOpened: state.mySafie.bagOpened
  };
};

mySafie.connect = (Component) => {
  return connect(mapStateToProps, mapDispatchToProps)(Component);
};

// Reducers
const toggleMeasurementsBox = (state) => {
  return Object.assign({}, state, {
    measurementsOpened: !state.measurementsOpened
  });
};

const toggleOrdersBox = (state) => {
  return Object.assign({}, state, {
    ordersOpened: !state.ordersOpened
  });
};


const toggleAddressesBox = (state) => {
  return Object.assign({}, state, {
    addressesOpened: !state.addressesOpened
  });
};


const toggleBagBox = (state) => {
  return Object.assign({}, state, {
    bagOpened: !state.bagOpened
  });
};


mySafie.actionTypeMapping = [];
mySafie.actionTypeMapping[actionTypes.TOGGLE_MEASUREMENTS_BOX] = toggleMeasurementsBox;
mySafie.actionTypeMapping[actionTypes.TOGGLE_ORDERS_BOX] = toggleOrdersBox;
mySafie.actionTypeMapping[actionTypes.TOGGLE_ADDRESSES_BOX] = toggleAddressesBox;
mySafie.actionTypeMapping[actionTypes.TOGGLE_BAG_BOX] = toggleBagBox;

mySafie.reducer = (state = mySafie.initialState, action) => {
  return modelReducer(mySafie, state, action);
};

module.exports = mySafie;
