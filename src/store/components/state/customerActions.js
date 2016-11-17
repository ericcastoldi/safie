const axios = require('axios');
const actionTypes = require('./actionTypes.js');
/*
customer: {
  current: {},
  saving: false,
  errorSavingSong: false
}
*/

const customerChanged = (customer) => {
  return {
    type: actionTypes.CHANGE_CUSTOMER,
    payload: {
      customer: customer
    }
  };
};

const startSavingCustomer = () => {
  return {
    type: actionTypes.START_SAVING_CUSTOMER
  };
};

const doneSavingCustomer = () => {
  return {
    type: actionTypes.DONE_SAVING_CUSTOMER
  };
};

const cannotSaveCustomer = (err) => {
  return {
    type: actionTypes.CANNOT_SAVE_CUSTOMER,
    payload: {
      error: err
    }
  };
};

const saveCustomer = (customer) => {

  return (dispatch) => {
    dispatch(startSavingCustomer());

    return axios.post('/api/customers', customer)
        .then(function (response) {
          dispatch(doneSavingCustomer());
        })
        .catch(function (response) {
          dispatch(cannotSaveCustomer(response));
        });

  };

};

module.exports = {
  customerChanged: customerChanged,
  startSavingCustomer: startSavingCustomer,
  doneSavingCustomer: doneSavingCustomer,
  cannotSaveCustomer: cannotSaveCustomer,
  saveCustomer: saveCustomer
};
