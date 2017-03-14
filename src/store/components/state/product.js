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
import collections from './data/collections.js';

let product = {
  // shape: null,
  // initialState: null,
  // connect: null,
  // reducer: null
};

// State
product.initialState = {
  measurementsPopupOpen: false,
  current: {}
};

product.shape = {
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  collection: React.PropTypes.string,
  description: React.PropTypes.string,
  price: React.PropTypes.number,
  measurements: React.PropTypes.object,
  pictures: React.PropTypes.shape({
    main: React.PropTypes.number,
    product: React.PropTypes.number,
    paths: React.PropTypes.object
  }),
  colors: React.PropTypes.object,
  defaultColor: React.PropTypes.object
};

// Actions
product.openMeasurementsPopup = actionFactory.simpleActionCreator(actionTypes.OPEN_MEASUREMENTS_POPUP);
product.closeMeasurementsPopup = actionFactory.simpleActionCreator(actionTypes.CLOSE_MEASUREMENTS_POPUP);

const fetchPayloadFactory = (fetchArgs) => {
  return {
    id: fetchArgs.id,
    collection: fetchArgs.collection
  };
};
product.fetchProduct = actionFactory.payloadActionCreator(actionTypes.FETCH_PRODUCT, fetchPayloadFactory);

const pickProductColorPayloadFactory = (arg) => {
  return {
    color: arg
  };
};
product.pickProductColor = actionFactory.payloadActionCreator(actionTypes.PICK_PRODUCT_COLOR, pickProductColorPayloadFactory);

const setProductMeasurementsPayloadFactory = (arg) => {
  return {
    measurements: arg
  };
};
product.setProductMeasurements = actionFactory.payloadActionCreator(
  actionTypes.SET_PRODUCT_MEASUREMENTS,
  setProductMeasurementsPayloadFactory);

// React Redux
function mapStateToProps(state) {
  const current = state.product.current;
  const options = current && current.options ? current.options : null;
  const selectedColor = options ? options.color : null;
  return {
    product: current,
    options: options,
    selectedColor: selectedColor,
    measurementsPopupOpen: state.product.measurementsPopupOpen
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchProduct: product.fetchProduct,
    pickProductColor: product.pickProductColor
  }, dispatch);
}

product.connect = (Component) => {
  return connect(mapStateToProps, mapDispatchToProps)(Component);
};

// Reducers
const openMeasurementsPopup = (state) => {
  return Object.assign({}, state, {
    measurementsPopupOpen: true
  });
};

const closeMeasurementsPopup = (state) => {
  return Object.assign({}, state, {
    measurementsPopupOpen: false
  });
};

const updateOptions = (state, change) => {
  const options = state.current.options;
  const updatedOptions = Object.assign({}, options, change);

  const updatedCurrent = Object.assign({}, state.current, {
    options: updatedOptions
  });

  return Object.assign({}, state, {
    current: updatedCurrent
  });
};

const pickProductColor = (state, action) => {
  const change = {
    color: action.payload.color
  };

  return updateOptions(state, change);
};

const setProductMeasurements = (state, action) => {
  const change = {
    measurements: action.payload.measurements
  };

  return updateOptions(state, change);
};

const fetchProduct = (state, action) => {

  const collection = action.payload.collection;

  var prod = collections[collection].find(function (piece) {
    return piece.id === action.payload.id;
  });

  return Object.assign({}, state, {
    current: prod
  });
};

product.actionTypeMapping = [];
product.actionTypeMapping[actionTypes.FETCH_PRODUCT] = fetchProduct;
product.actionTypeMapping[actionTypes.OPEN_MEASUREMENTS_POPUP] = openMeasurementsPopup;
product.actionTypeMapping[actionTypes.CLOSE_MEASUREMENTS_POPUP] = closeMeasurementsPopup;
product.actionTypeMapping[actionTypes.SET_PRODUCT_MEASUREMENTS] = setProductMeasurements;
product.actionTypeMapping[actionTypes.PICK_PRODUCT_COLOR] = pickProductColor;

product.reducer = (state = product.initialState, action) => {
  return modelReducer(product, state, action);
};

module.exports = product;
