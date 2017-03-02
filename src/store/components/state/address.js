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

let address = {
  // shape: null,
  // initialState: null,
  // connect: null,
  // reducer: null
};


// State
address.initialState = {
  current: null,
  foundAddress: null,
  addresses: [],
  savingAddress: false,
  doneSavingAddress: false,
  fetchingAddresses: false,
  doneFetchingAddresses: false,
  addressPopupOpen: false,
  removingAddress: false,
  doneRemovingAddress: false,
  error: null
};

const addressShape = React.PropTypes.shape({
  addressId: React.PropTypes.string,
  street: React.PropTypes.string,
  number: React.PropTypes.string,
  obs: React.PropTypes.string,
  district: React.PropTypes.string,
  state: React.PropTypes.string,
  city: React.PropTypes.string,
  code: React.PropTypes.string
});

address.shape = {
  current: addressShape,
  foundAddress: React.PropTypes.object,
  addresses: React.PropTypes.arrayOf(addressShape),
  saveAddress: React.PropTypes.func,
  savingAddress: React.PropTypes.bool,
  doneSavingAddress: React.PropTypes.bool,
  fetchAddresses: React.PropTypes.func,
  fetchingAddresses: React.PropTypes.bool,
  doneFetchingAddresses: React.PropTypes.bool,
  removeAddress: React.PropTypes.func,
  removingAddress: React.PropTypes.bool,
  doneRemovingAddress: React.PropTypes.bool,
  addressPopupOpen: React.PropTypes.bool,
  openAddressPopup: React.PropTypes.func,
  closeAddressPopup: React.PropTypes.func,
  changeCurrentAddress: React.PropTypes.func,
  searchAddress: React.PropTypes.func
};

// Actions
address.openAddressPopup = actionFactory.simpleActionCreator(actionTypes.OPEN_ADDRESS_POPUP);
address.closeAddressPopup = actionFactory.simpleActionCreator(actionTypes.CLOSE_ADDRESS_POPUP);

const currentAddressPayloadFactory = (addr) => {
  return {
    current: addr
  };
};

address.changeCurrentAddress = actionFactory.payloadActionCreator(actionTypes.CHANGE_CURRENT_ADDRESS, currentAddressPayloadFactory);

const payloadFactory = (result) => {
  return {
    addresses: result
  };
};

address.fetchAddresses = actionFactory.smartAsyncFetchActionCreator('address',
  actionTypes.START_FETCHING_ADDRESSES,
  actionTypes.DONE_FETCHING_ADDRESSES,
  actionTypes.CANNOT_FETCH_ADDRESSES,
  payloadFactory
);

const foundAddressPayloadFactory = (addr) => {
  return {
    foundAddress: addr
  };
};

address.startSearchingAddress = actionFactory.simpleActionCreator(actionTypes.START_SEARCHING_ADDRESS);
address.doneSearchingAddress = actionFactory.payloadActionCreator(actionTypes.DONE_SEARCHING_ADDRESS, foundAddressPayloadFactory);
address.cannotSearchAddress = actionFactory.errorActionCreator(actionTypes.CANNOT_SEARCH_ADDRESS);

address.searchAddress = (cep) => {

  return (dispatch) => {

    dispatch(address.startSearchingAddress());

    return axios.get('/api/address/search', {
        params: {
          cep: cep
        }
      })
      .then(function (apiResult) {
        var result = apiResult.data;
        if (result.success) {
          dispatch(address.doneSearchingAddress(result.data));
        } else {
          dispatch(address.cannotSearchAddress(result.error));
        }
      })
      .catch(function (response) {
        dispatch(address.cannotSearchAddress(response));
      });

  };
};

address.startSavingAddress = actionFactory.simpleActionCreator(actionTypes.START_SAVING_ADDRESS);
address.doneSavingAddress = actionFactory.payloadActionCreator(actionTypes.DONE_SAVING_ADDRESS, payloadFactory);
address.cannotSaveAddress = actionFactory.errorActionCreator(actionTypes.CANNOT_SAVE_ADDRESS);

address.saveAddress = (addr) => {

  return (dispatch) => {
    dispatch(address.startSavingAddress());

    return axios.post('/api/address', addr)
      .then(function (apiResult) {
        var result = apiResult.data;
        if (result.success) {
          dispatch(address.doneSavingAddress(result.data));
          dispatch(address.changeCurrentAddress(addr));
          dispatch(address.closeAddressPopup());
          dispatch(address.fetchAddresses());
        } else {
          dispatch(address.cannotSaveAddress(result.error));
        }
      })
      .catch(function (response) {
        dispatch(address.cannotSaveAddress(response));
      });

  };
};


address.startRemovingAddress = actionFactory.simpleActionCreator(actionTypes.START_REMOVING_ADDRESS);
address.doneRemovingAddress = actionFactory.payloadActionCreator(actionTypes.DONE_REMOVING_ADDRESS, payloadFactory);
address.cannotRemoveAddress = actionFactory.errorActionCreator(actionTypes.CANNOT_REMOVE_ADDRESS);


address.removeAddress = (addressId) => {

  return (dispatch) => {
    dispatch(address.startRemovingAddress());

    return axios.delete('/api/address/' + addressId)
      .then(function (apiResult) {
        var result = apiResult.data;
        if (result.success) {
          dispatch(address.doneRemovingAddress());
          dispatch(address.fetchAddresses());
        } else {
          dispatch(address.cannotRemoveAddress(result.error));
        }
      })
      .catch(function (response) {
        dispatch(address.cannotRemoveAddress(response));
      });

  };
};


// actionFactory.smartAsyncDeleteActionCreator('address',
//   actionTypes.START_REMOVING_ADDRESS,
//   actionTypes.DONE_REMOVING_ADDRESS,
//   actionTypes.CANNOT_REMOVE_ADDRESS,
//   payloadFactory
// );

// React Redux
function mapStateToProps(state) {
  return {
    current: state.address.current,
    addresses: state.address.addresses,
    savingAddress: state.address.savingAddress,
    doneSavingAddress: state.address.doneSavingAddress,
    fetchingAddresses: state.address.fetchingAddresses,
    doneFetchingAddresses: state.address.doneFetchingAddresses,
    removingAddress: state.address.removingAddress,
    doneRemovingAddress: state.address.doneRemovingAddress,
    addressPopupOpen: state.address.addressPopupOpen,
    foundAddress: state.address.foundAddress
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    saveAddress: address.saveAddress,
    removeAddress: address.removeAddress,
    fetchAddresses: address.fetchAddresses,
    closeAddressPopup: address.closeAddressPopup,
    openAddressPopup: address.openAddressPopup,
    changeCurrentAddress: address.changeCurrentAddress,
    searchAddress: address.searchAddress
  }, dispatch);
}

address.connect = (Component) => {
  return connect(mapStateToProps, mapDispatchToProps)(Component);
};

// Reducers
const changeCurrentAddress = (state, action) => {
  return Object.assign({}, state, {
    current: action.payload.address
  });
};


const openAddressPopup = (state) => {
  return Object.assign({}, state, {
    addressPopupOpen: true,
    foundAddress: {
      street: '',
      city: '',
      state: '',
      district: '',
      code: '',
      obs: '',
      number: ''
    }
  });
};

const closeAddressPopup = (state) => {
  return Object.assign({}, state, {
    addressPopupOpen: false
  });
};

const startSavingAddress = (state) => {
  return Object.assign({}, state, {
    savingAddress: true,
    doneSavingAddress: false,
    error: null
  });
};

const doneSavingAddress = (state, action) => {
  return Object.assign({}, state, {
    current: action.payload.address,
    doneSavingAddress: true,
    savingAddress: false,
    error: null
  });
};

const cannotSaveAddress = (state, action) => {
  return Object.assign({}, state, {
    savingAddress: false,
    doneSavingAddress: true,
    error: action.payload.error
  });
};

const startFetchingAddresses = (state) => {
  return Object.assign({}, state, {
    fetchingAddresses: true,
    doneFetchingAddresses: false,
    error: null
  });
};

const doneFetchingAddresses = (state, action) => {
  return Object.assign({}, state, {
    fetchingAddresses: false,
    doneFetchingAddresses: true,
    addresses: action.payload.addresses
  });
};

const cannotFetchAddresses = (state, action) => {
  return Object.assign({}, state, {
    fetchingAddresses: false,
    doneFetchingAddresses: true,
    error: action.payload.error
  });
};


const startSearchingAddress = (state) => {
  return Object.assign({}, state, {
    fetchingAddresses: true,
    doneFetchingAddresses: false,
    error: null,
    foundAddress: null
  });
};

const doneSearchingAddress = (state, action) => {
  return Object.assign({}, state, {
    fetchingAddresses: false,
    doneFetchingAddresses: true,
    foundAddress: action.payload.foundAddress
  });
};

const cannotSearchAddress = (state, action) => {
  return Object.assign({}, state, {
    fetchingAddresses: false,
    doneFetchingAddresses: true,
    error: action.payload.error
  });
};


const startRemovingAddress = (state) => {
  return Object.assign({}, state, {
    removingAddress: true,
    doneRemovingAddress: false,
    error: null
  });
};

const doneRemovingAddress = (state) => {
  return Object.assign({}, state, {
    removingAddress: false,
    doneRemovingAddress: true,
    error: null
  });
};

const cannotRemoveAddress = (state, action) => {
  return Object.assign({}, state, {
    removingAddress: false,
    doneRemovingAddress: true,
    error: action.payload.error
  });
};


address.actionTypeMapping = [];
address.actionTypeMapping[actionTypes.CHANGE_CURRENT_ADDRESS] = changeCurrentAddress;

address.actionTypeMapping[actionTypes.OPEN_ADDRESS_POPUP] = openAddressPopup;
address.actionTypeMapping[actionTypes.CLOSE_ADDRESS_POPUP] = closeAddressPopup;

address.actionTypeMapping[actionTypes.START_SAVING_ADDRESS] = startSavingAddress;
address.actionTypeMapping[actionTypes.DONE_SAVING_ADDRESS] = doneSavingAddress;
address.actionTypeMapping[actionTypes.CANNOT_SAVE_ADDRESS] = cannotSaveAddress;

address.actionTypeMapping[actionTypes.START_FETCHING_ADDRESSES] = startFetchingAddresses;
address.actionTypeMapping[actionTypes.DONE_FETCHING_ADDRESSES] = doneFetchingAddresses;
address.actionTypeMapping[actionTypes.CANNOT_FETCH_ADDRESSES] = cannotFetchAddresses;

address.actionTypeMapping[actionTypes.START_SEARCHING_ADDRESS] = startSearchingAddress;
address.actionTypeMapping[actionTypes.DONE_SEARCHING_ADDRESS] = doneSearchingAddress;
address.actionTypeMapping[actionTypes.CANNOT_SEARCH_ADDRESS] = cannotSearchAddress;

address.actionTypeMapping[actionTypes.START_REMOVING_ADDRESS] = startRemovingAddress;
address.actionTypeMapping[actionTypes.DONE_REMOVING_ADDRESS] = doneRemovingAddress;
address.actionTypeMapping[actionTypes.CANNOT_REMOVE_ADDRESS] = cannotRemoveAddress;


address.reducer = (state = address.initialState, action) => {
  return modelReducer(address, state, action);
};

module.exports = address;
