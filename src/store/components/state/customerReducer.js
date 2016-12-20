var actionTypes = require('./actionTypes.js');
var initialState = require('./data/initialState.js');


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

const doneSavingCustomer = (state) => {
  return Object.assign({}, state, {
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

module.exports = function (state = initialState.customer, action) {
  switch (action.type) {

    case actionTypes.CHANGE_CUSTOMER:
      return customerChanged(state, action);

    case actionTypes.START_SAVING_CUSTOMER:
      return startSavingCustomer(state, action);

    case actionTypes.DONE_SAVING_CUSTOMER:
      return doneSavingCustomer(state, action);

    case actionTypes.CANNOT_SAVE_CUSTOMER:
      return cannotSaveCustomer(state, action);

    case actionTypes.START_LOGGING_IN:
      return startLoggingIn(state, action);

    case actionTypes.DONE_LOGGING_IN:
      return doneLoggingIn(state, action);

    case actionTypes.CANNOT_LOG_IN:
      return cannotLogIn(state, action);

    case actionTypes.START_LOGGING_OUT:
      return startLoggingOut(state, action);

    case actionTypes.DONE_LOGGING_OUT:
      return doneLoggingOut(state, action);

    case actionTypes.CANNOT_LOG_OUT:
      return cannotLogOut(state, action);

    case actionTypes.DONE_FETCHING_CURRENT_CUSTOMER:
      return doneFetchingCurrentCustomer(state, action);

    default:
      return state;
  }
};
