import axios from 'axios';
import React from 'react';
import {
  connect
} from 'react-redux';
import {
  bindActionCreators
} from 'redux';
import actionTypes from './actionTypes.js';
import actionFactory from './actionFactory.js';
import modelReducer from './modelReducer.js';
import {
  push
} from 'react-router-redux';

let customer = {
  // shape: null,
  // initialState: null,
  // connect: null,
  // reducer: null
};


// State
customer.initialState = {
  current: {},
  addresses: [],
  savingAddress: false,
  doneSavingAddress: false,
  currentAddress: null,
  addressPopupOpen: false,
  saving: false,
  doneSaving: false,
  loggingIn: false,
  loggingOut: false,
  error: null
};

customer.shape = {
  customer: React.PropTypes.shape({
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    email: React.PropTypes.string,
    password: React.PropTypes.string,
    passwordConfirmation: React.PropTypes.string,
    birthday: React.PropTypes.string,
    phone: React.PropTypes.string
  }),
  addresses: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.string,
    street: React.PropTypes.string,
    number: React.PropTypes.string,
    obs: React.PropTypes.string,
    district: React.PropTypes.string,
    state: React.PropTypes.string,
    city: React.PropTypes.string,
    code: React.PropTypes.string
  })),
  saveCustomer: React.PropTypes.func,
  saving: React.PropTypes.bool,
  doneSaving: React.PropTypes.bool,
  loggingIn: React.PropTypes.bool,
  logOut: React.PropTypes.func,
  loggingOut: React.PropTypes.bool,
  error: React.PropTypes.string,
  logIn: React.PropTypes.func,
  facebookLogin: React.PropTypes.func,
  fetchCurrentCustomer: React.PropTypes.func
};

// Actions
const payloadFactory = (result) => {
  return {
    customer: result
  };
};

customer.customerChanged = actionFactory.payloadActionCreator(actionTypes.CHANGE_CUSTOMER, payloadFactory);

customer.startFetchingCurrentCustomer = actionFactory.simpleActionCreator(actionTypes.START_FETCHING_CURRENT_CUSTOMER);
customer.doneFetchingCurrentCustomer = actionFactory.payloadActionCreator(actionTypes.DONE_FETCHING_CURRENT_CUSTOMER, payloadFactory);
customer.cannotFetchCurrentCustomer = actionFactory.errorActionCreator(actionTypes.CANNOT_FETCH_CURRENT_CUSTOMER);

customer.fetchCurrentCustomer = actionFactory.asyncFetchActionCreator(
  'customer',
  customer.startFetchingCurrentCustomer,
  customer.doneFetchingCurrentCustomer,
  customer.cannotFetchCurrentCustomer
);


customer.startLoggingIn = actionFactory.simpleActionCreator(actionTypes.START_LOGGING_IN);
customer.doneLoggingIn = actionFactory.payloadActionCreator(actionTypes.DONE_LOGGING_IN, payloadFactory);
customer.cannotLogIn = actionFactory.errorActionCreator(actionTypes.CANNOT_LOG_IN);

customer.logIn = actionFactory.asyncPostActionCreator(
  'login',
  customer.startLoggingIn,
  customer.doneLoggingIn,
  customer.cannotLogIn,
  '/my-safie'
);

customer.facebookLogin = actionFactory.asyncFetchActionCreator(
  'auth/facebook',
  customer.startLoggingIn,
  customer.doneLoggingIn,
  customer.cannotLogIn
);

customer.startLoggingOut = actionFactory.simpleActionCreator(actionTypes.START_LOGGING_OUT);
customer.doneLoggingOut = actionFactory.simpleActionCreator(actionTypes.DONE_LOGGING_OUT);
customer.cannotLogOut = actionFactory.errorActionCreator(actionTypes.CANNOT_LOG_OUT);

customer.logOut = actionFactory.asyncPostActionCreator(
  'logout',
  customer.startLoggingOut,
  customer.doneLoggingOut,
  customer.cannotLogOut,
  '/colecoes/barcelona'
);

customer.startSavingCustomer = actionFactory.simpleActionCreator(actionTypes.START_SAVING_CUSTOMER);
customer.doneSavingCustomer = actionFactory.payloadActionCreator(actionTypes.DONE_SAVING_CUSTOMER, payloadFactory);
customer.cannotSaveCustomer = actionFactory.errorActionCreator(actionTypes.CANNOT_SAVE_CUSTOMER);

customer.saveCustomer = (cust) => {

  return (dispatch) => {
    dispatch(customer.startSavingCustomer());

    return axios.post('/api/customer', cust)
      .then(function (apiResult) {
        var result = apiResult.data;
        if (result.success) {
          dispatch(customer.doneSavingCustomer(result.data));
          dispatch(push('/my-safie'));
        } else {
          dispatch(customer.cannotSaveCustomer(result.error));
        }
      })
      .catch(function (response) {
        dispatch(customer.cannotSaveCustomer(response));
      });

  };
};

const mapStateToProps = (state) => {
  return {
    loggingIn: state.customer.loggingIn,
    loggingOut: state.customer.loggingOut,
    doneSaving: state.customer.doneSaving,
    customer: state.customer.current,
    saving: state.customer.saving,
    error: state.customer.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    saveCustomer: customer.saveCustomer,
    logIn: customer.logIn,
    logOut: customer.logOut,
    facebookLogin: customer.facebookLogin,
    fetchCurrentCustomer: customer.fetchCurrentCustomer
  }, dispatch);
};

customer.connect = (Component) => {
  return connect(mapStateToProps, mapDispatchToProps)(Component);
};

// Reducers
const customerChanged = (state, action) => {
  return Object.assign({}, state, {
    current: action.payload.customer,
    doneSaving: false
  });
};

const startSavingCustomer = (state) => {
  return Object.assign({}, state, {
    saving: true,
    error: null
  });
};

const doneSavingCustomer = (state, action) => {
  return Object.assign({}, state, {
    current: action.payload.customer,
    doneSaving: true,
    saving: false,
    error: null
  });
};

const cannotSaveCustomer = (state, action) => {
  return Object.assign({}, state, {
    saving: false,
    error: action.payload.error
  });
};

const startLoggingIn = (state) => {
  return Object.assign({}, state, {
    loggingIn: true,
    error: null
  });
};

const doneLoggingIn = (state, action) => {
  return Object.assign({}, state, {
    loggingIn: false,
    current: action.payload.customer
  });
};

const cannotLogIn = (state, action) => {
  return Object.assign({}, state, {
    loggingIn: false,
    error: action.payload.error,
    current: {}
  });
};

const startLoggingOut = (state) => {
  return Object.assign({}, state, {
    loggingOut: true,
    error: null
  });
};

const doneLoggingOut = (state) => {
  return Object.assign({}, state, {
    loggingOut: false,
    current: {}
  });
};

const cannotLogOut = (state, action) => {
  return Object.assign({}, state, {
    loggingOut: false,
    error: action.payload.error
  });
};

const doneFetchingCurrentCustomer = (state, action) => {
  return Object.assign({}, state, {
    current: action.payload.customer
  });
};


customer.actionTypeMapping = [];
customer.actionTypeMapping[actionTypes.CHANGE_CUSTOMER] = customerChanged;
customer.actionTypeMapping[actionTypes.DONE_FETCHING_CURRENT_CUSTOMER] = doneFetchingCurrentCustomer;

customer.actionTypeMapping[actionTypes.START_SAVING_CUSTOMER] = startSavingCustomer;
customer.actionTypeMapping[actionTypes.DONE_SAVING_CUSTOMER] = doneSavingCustomer;
customer.actionTypeMapping[actionTypes.CANNOT_SAVE_CUSTOMER] = cannotSaveCustomer;

customer.actionTypeMapping[actionTypes.START_LOGGING_IN] = startLoggingIn;
customer.actionTypeMapping[actionTypes.DONE_LOGGING_IN] = doneLoggingIn;
customer.actionTypeMapping[actionTypes.CANNOT_LOG_IN] = cannotLogIn;

customer.actionTypeMapping[actionTypes.START_LOGGING_OUT] = startLoggingOut;
customer.actionTypeMapping[actionTypes.DONE_LOGGING_OUT] = doneLoggingOut;
customer.actionTypeMapping[actionTypes.CANNOT_LOG_OUT] = cannotLogOut;


customer.reducer = (state = customer.initialState, action) => {
  return modelReducer(customer, state, action);
};

module.exports = customer;
