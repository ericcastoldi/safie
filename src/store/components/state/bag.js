/*eslint no-undef: 0 new-cap: 0*/
import axios from 'axios';
import React from 'react';
import {
  connect
} from 'react-redux';
import {
  bindActionCreators
} from 'redux';
import product from './product.js';
import actionTypes from './actionTypes.js';
import actionFactory from './actionFactory.js';
import modelReducer from './modelReducer.js';
import {
  push
} from 'react-router-redux';

let bag = {
  // shape: null,
  // initialState: null,
  // connect: null,
  // reducer: null
};

// State
bag.initialState = {
  error: null,
  fetching: false,
  doneFetching: false,
  adding: false,
  doneAdding: false,
  removing: false,
  doneRemoving: false,
  quickBagOpened: false,
  shipping: null,
  total: 0,
  count: 0,
  validMeasurements: false,
  agreementAccepted: false,
  agreementAcceptancePopupOpen: false,
  errorPopupOpen: false,
  items: {}
};

bag.itemShape = {
  product: product.shape,
  options: React.PropTypes.shape({
    color: React.PropTypes.object,
    measurements: React.PropTypes.object
  })
};

bag.shape = {
  fetchBag: React.PropTypes.func.isRequired,
  fetching: React.PropTypes.bool,
  doneFetching: React.PropTypes.bool,
  removeProductFromBag: React.PropTypes.func.isRequired,
  removing: React.PropTypes.bool,
  doneRemoving: React.PropTypes.bool,
  adding: React.PropTypes.bool,
  doneAdding: React.PropTypes.bool,
  error: React.PropTypes.string,
  shipping: React.PropTypes.shape({
    code: React.PropTypes.string,
    price: React.PropTypes.number
  }),
  total: React.PropTypes.number,
  items: React.PropTypes.shape(bag.itemShape),
  quickBagOpened: React.PropTypes.bool,
  toggleQuickBag: React.PropTypes.func.isRequired,
  checkout: React.PropTypes.func,
  count: React.PropTypes.number,
  validMeasurements: React.PropTypes.bool,
  agreementAccepted: React.PropTypes.bool,
  agreementAcceptancePopupOpen: React.PropTypes.bool,
  errorPopupOpen: React.PropTypes.bool
};

// Actions
const payloadFactory = (result) => {
  return {
    bag: result
  };
};

bag.fetchBag = actionFactory.smartAsyncFetchActionCreator('bag',
  actionTypes.START_FETCHING_BAG,
  actionTypes.DONE_FETCHING_BAG,
  actionTypes.CANNOT_FETCH_BAG,
  payloadFactory
);

bag.addProductToBag = actionFactory.asyncPostActionCreator('bag',
  actionFactory.simpleActionCreator(actionTypes.START_ADDING_PRODUCT_TO_BAG),
  actionFactory.payloadActionCreator(actionTypes.DONE_ADDING_PRODUCT_TO_BAG, payloadFactory),
  actionFactory.errorActionCreator(actionTypes.CANNOT_ADD_PRODUCT_TO_BAG),
  '/bag'
);

bag.removeProductFromBag = actionFactory.smartAsyncDeleteActionCreator('bag',
  actionTypes.START_REMOVING_PRODUCT_FROM_BAG,
  actionTypes.DONE_REMOVING_PRODUCT_FROM_BAG,
  actionTypes.CANNOT_REMOVE_PRODUCT_FROM_BAG,
  payloadFactory
);

bag.toggleQuickBag = actionFactory.simpleActionCreator(actionTypes.TOGGLE_QUICK_BAG);
bag.dismissErrorPopup = actionFactory.simpleActionCreator(actionTypes.DISMISS_ERROR_POPUP);
bag.startCheckingOut = actionFactory.simpleActionCreator(actionTypes.START_CHECKING_OUT);
bag.doneCheckingOut = actionFactory.payloadActionCreator(actionTypes.DONE_CHECKING_OUT, payloadFactory);
bag.cannotCheckOut = actionFactory.errorActionCreator(actionTypes.CANNOT_CHECK_OUT);

bag.openAgreementAcceptancePopup = actionFactory.simpleActionCreator(actionTypes.OPEN_AGREEMENT_ACCEPTANCE_POPUP);
bag.dismissAgreementAcceptancePopup = actionFactory.simpleActionCreator(actionTypes.DISMISS_AGREEMENT_ACCEPTANCE_POPUP);
bag.acceptAgreement = actionFactory.simpleActionCreator(actionTypes.ACCEPT_AGREEMENT);

bag.agreementAcceptance = () => {


  return (dispatch) => {
    dispatch(bag.acceptAgreement());
    dispatch(push('/checkout'));
  };
};



bag.checkout = () => {

  return (dispatch) => {
    dispatch(bag.startCheckingOut());

    return axios.post('/api/bag/checkout')
      .then(function (apiResult) {
        var result = apiResult.data;
        if (result.success) {
          dispatch(bag.doneCheckingOut(result.data));
          dispatch(bag.openAgreementAcceptancePopup());
        } else {
          dispatch(bag.cannotCheckOut(result.error));
        }
      })
      .catch(function (response) {
        dispatch(bag.cannotCheckOut(response));
      });

  };
};

bag.pay = () => {

  return axios
    .get('/api/bag/payment')
    .then(function (apiResult) {
      var result = apiResult.data;
      if (result.success) {
        PagSeguroLightbox({
          code: result.data.token
        }, {
          success: function (transactionCode) {
            console.log(transactionCode);
          },
          abort: function () {
            console.log('abort');
          }
        });
      }
    });

};





// React Redux
const mapStateToProps = (state) => {
  return {
    error: state.bag.error,
    fetching: state.bag.fetching,
    doneFetching: state.bag.doneFetching,
    adding: state.bag.adding,
    doneAdding: state.bag.doneAdding,
    removing: state.bag.removing,
    doneRemoving: state.bag.doneRemoving,
    quickBagOpened: state.bag.quickBagOpened,
    shipping: state.bag.shipping,
    total: state.bag.total,
    items: state.bag.items,
    count: state.bag.count,
    validMeasurements: state.bag.validMeasurements,
    agreementAccepted: state.bag.agreementAccepted,
    errorPopupOpen: state.bag.errorPopupOpen
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchBag: bag.fetchBag,
    checkout: bag.checkout,
    removeProductFromBag: bag.removeProductFromBag,
    addProductToBag: bag.addProductToBag,
    toggleQuickBag: bag.toggleQuickBag
  }, dispatch);
};


bag.connect = (Component) => {
  return connect(mapStateToProps, mapDispatchToProps)(Component);
};

// Reducers
const startFetchingBag = (state) => {
  return Object.assign({}, state, {
    error: null,
    fetching: true,
    doneFetching: false
  });
};

const doneFetchingBag = (state, action) => {
  return Object.assign({}, state, {
    doneFetching: true,
    fetching: false,
    error: null,
    items: action.payload.bag.items,
    total: action.payload.bag.total
  });
};

const cannotFetchBag = (state, action) => {
  return Object.assign({}, state, {
    doneFetching: true,
    fetching: false,
    error: action.payload.error
  });
};

const startAddingProductToBag = (state) => {
  return Object.assign({}, state, {
    error: null,
    adding: true,
    doneAdding: false
  });
};

const doneAddingProductToBag = (state, action) => {
  return Object.assign({}, state, {
    adding: false,
    doneAdding: true,
    error: null,
    items: action.payload.bag.items,
    total: action.payload.bag.total
  });
};

const cannotAddProductToBag = (state, action) => {
  return Object.assign({}, state, {
    adding: false,
    doneAdding: true,
    error: action.payload.error
  });
};


const startRemovingProductFromBag = (state) => {
  return Object.assign({}, state, {
    error: null,
    removing: true,
    doneRemoving: false
  });
};

const doneRemovingProductFromBag = (state, action) => {
  return Object.assign({}, state, {
    removing: false,
    doneRemoving: true,
    error: null,
    items: action.payload.bag.items,
    total: action.payload.bag.total
  });
};

const cannotRemoveProductFromBag = (state, action) => {
  return Object.assign({}, state, {
    removing: false,
    doneRemoving: true,
    error: action.payload.error
  });
};

const toggleQuickBag = (state) => {
  return Object.assign({}, state, {
    quickBagOpened: !state.quickBagOpened
  });
};

const startCheckingOut = (state) => {
  return Object.assign({}, state, {
    error: null,
    fetching: true,
    doneFetching: false,
    validMeasurements: false,
    errorPopupOpen: false
  });
};

const doneCheckingOut = (state) => {
  return Object.assign({}, state, {
    error: null,
    fetching: false,
    doneFetching: true,
    validMeasurements: true,
    errorPopupOpen: false
  });
};

const cannotCheckOut = (state, action) => {
  return Object.assign({}, state, {
    fetching: false,
    doneFetching: true,
    errorPopupOpen: true,
    validMeasurements: false,
    error: action.payload.error
  });
};

const dismissErrorPopup = (state) => {
  return Object.assign({}, state, {
    errorPopupOpen: false
  });
};


const acceptAgreement = (state) => {
  return Object.assign({}, state, {
    agreementAcceptancePopupOpen: false,
    agreementAccepted: true
  });
};

const openAgreementAcceptancePopup = (state) => {
  return Object.assign({}, state, {
    agreementAcceptancePopupOpen: true
  });
};

const dismissAgreementAcceptancePopup = (state) => {
  return Object.assign({}, state, {
    agreementAcceptancePopupOpen: false
  });
};

bag.actionTypeMapping = [];

bag.actionTypeMapping[actionTypes.DISMISS_ERROR_POPUP] = dismissErrorPopup;
bag.actionTypeMapping[actionTypes.TOGGLE_QUICK_BAG] = toggleQuickBag;

bag.actionTypeMapping[actionTypes.START_FETCHING_BAG] = startFetchingBag;
bag.actionTypeMapping[actionTypes.DONE_FETCHING_BAG] = doneFetchingBag;
bag.actionTypeMapping[actionTypes.CANNOT_FETCH_BAG] = cannotFetchBag;

bag.actionTypeMapping[actionTypes.START_ADDING_PRODUCT_TO_BAG] = startAddingProductToBag;
bag.actionTypeMapping[actionTypes.DONE_ADDING_PRODUCT_TO_BAG] = doneAddingProductToBag;
bag.actionTypeMapping[actionTypes.CANNOT_ADD_PRODUCT_TO_BAG] = cannotAddProductToBag;

bag.actionTypeMapping[actionTypes.START_REMOVING_PRODUCT_FROM_BAG] = startRemovingProductFromBag;
bag.actionTypeMapping[actionTypes.DONE_REMOVING_PRODUCT_FROM_BAG] = doneRemovingProductFromBag;
bag.actionTypeMapping[actionTypes.CANNOT_REMOVE_PRODUCT_FROM_BAG] = cannotRemoveProductFromBag;

bag.actionTypeMapping[actionTypes.START_CHECKING_OUT] = startCheckingOut;
bag.actionTypeMapping[actionTypes.DONE_CHECKING_OUT] = doneCheckingOut;
bag.actionTypeMapping[actionTypes.CANNOT_CHECK_OUT] = cannotCheckOut;

bag.actionTypeMapping[actionTypes.ACCEPT_AGREEMENT] = acceptAgreement;
bag.actionTypeMapping[actionTypes.OPEN_AGREEMENT_ACCEPTANCE_POPUP] = openAgreementAcceptancePopup;
bag.actionTypeMapping[actionTypes.DISMISS_AGREEMENT_ACCEPTANCE_POPUP] = dismissAgreementAcceptancePopup;


bag.reducer = (state = bag.initialState, action) => {
  return modelReducer(bag, state, action);
};

module.exports = bag;
