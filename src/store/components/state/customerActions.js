const axios = require('axios');
const actionTypes = require('./actionTypes.js');
/*
customer: {
  current: {},
  saving: false,
  errorSavingSong: false
}

apiResult: {
  "success":true,
  "error":null,
  "data":{
    "name":"Abc Da Silva",
    "email":"abc@silva.com",
    "password":"$2a$10$xO3gtq.qU9Egb1SuFiN0ZeGm0YiEZaKdoVBDbfOUPGgVWpxGapyAK",
    "birthday":"1998-12-12T00:00:00.000Z",
    "phone":"47 99149 9985",
    "measurements":[],
    "_id":"5833110eae1ca9590492771e"
  }
}*/

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
        .then(function (apiResult) {
          var result = apiResult.data;
          if(result.success){
            dispatch(customerChanged(result.data));
            dispatch(doneSavingCustomer());
          }
          else{
            dispatch(cannotSaveCustomer(result.error));
          }
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
