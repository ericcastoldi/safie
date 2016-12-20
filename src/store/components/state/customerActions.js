const axios = require('axios');
const actionTypes = require('./actionTypes.js');

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

const facebookLogin = () => {
  return (dispatch) => {
    dispatch(startLoggingIn());

    return axios.get('/api/auth/facebook')
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
          dispatch(cannotLogIn('Não foi possível realizar o login com o Facebook.'));
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

    return axios.post('/api/customer', customer)
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

const startFetchingCurrentCustomer = () => {
  return {
    type: actionTypes.START_FETCHING_CURRENT_CUSTOMER
  };
};

const doneFetchingCurrentCustomer = (customer) => {
  return {
    type: actionTypes.DONE_FETCHING_CURRENT_CUSTOMER,
    payload: {
      customer: customer
    }
  };
};


const cannotFetchCurrentCustomer = (err) => {
  return {
    type: actionTypes.CANNOT_FETCH_CURRENT_CUSTOMER,
    payload: {
      error: err
    }
  };
};

const fetchCurrentCustomer = () => {
  return (dispatch) => {
    dispatch(startFetchingCurrentCustomer());

    return axios.get('/api/customer')
        .then(function (apiResult) {
          var result = apiResult.data;
          if(result.success){
            dispatch(doneFetchingCurrentCustomer(result.data));
          }
          else{
            dispatch(cannotFetchCurrentCustomer(result.error));
          }
        })
        .catch(function (response) {
          dispatch(cannotFetchCurrentCustomer(response.message));
        });

  };
};

module.exports = {
  customerChanged: customerChanged,
  saveCustomer: saveCustomer,
  logIn: logIn,
  facebookLogin: facebookLogin,
  logOut: logOut,
  fetchCurrentCustomer: fetchCurrentCustomer
};
