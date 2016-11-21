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

  default:
    return state;
  }
};
