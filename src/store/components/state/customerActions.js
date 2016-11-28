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

const startLoggingIn = () => {
  return {
    type: actionTypes.START_LOGGING_IN
  };
};

const doneLoggingIn = (customer) => {
  return {
    type: actionTypes.DONE_LOGGING_IN,
    payload: {
      customer: customer
    }
  };
};

const cannotLogIn = (err) => {
  return {
    type: actionTypes.CANNOT_LOG_IN,
    payload: {
      error: err
    }
  };
};

const startLoggingOut = () => {
  return {
    type: actionTypes.START_LOGGING_OUT
  };
};

const doneLoggingOut = () => {
  return {
    type: actionTypes.DONE_LOGGING_OUT
  };
};

const cannotLogOut = (err) => {
  return {
    type: actionTypes.CANNOT_LOG_OUT,
    payload: {
      error: err
    }
  };
};

const logIn = (customer) => {
  return (dispatch) => {
    dispatch(startLoggingIn());

    return axios.post('/api/login', customer)
        .then(function (apiResult) {
          var result = apiResult.data;
          if(result.success){
            dispatch(doneLoggingIn(result.data));
          }
          else{
            dispatch(cannotLogIn(result.error));
          }
        })
        .catch(function (response) {
          dispatch(cannotLogIn(response));
        });

  };
};


const logOut = () => {
  return (dispatch) => {
    dispatch(startLoggingOut());

    return axios.post('/api/logout')
        .then(function (apiResult) {
          var result = apiResult.data;
          if(result.success){
            dispatch(doneLoggingOut());
          }
          else{
            dispatch(cannotLogOut('Ocorreu um erro inesperado ao tentar sair da Safie. Por favor, tente novamente.'));
          }
        })
        .catch(function (response) {
          dispatch(cannotLogOut(response));
        });

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
  saveCustomer: saveCustomer,
  logIn: logIn,
  logOut: logOut
};
