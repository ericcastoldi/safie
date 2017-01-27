import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionTypes from './actionTypes.js';
import actionFactory from './actionFactory.js';
import modelReducer from './modelReducer.js';
import collections from './data/collections.js';

// TODO: Alterar para "productView" ou algo do genero e colocar as options dentro do current: {current: {product: {}, options: {}}}
let product = {
  // shape: null,
  // initialState: null,
  // connect: null,
  // reducer: null
};

// State
product.initialState = {
  measurementsPopupOpen: false,
  current: {},
  options: {
    measurements: null,
    color: null // TODO: Quando o initialState estiver vindo do server, essa color deve vir preenchida com a defaultColor do produto
  }
};

product.shape = {
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  description: React.PropTypes.string,
  price: React.PropTypes.string,
  measurements: React.PropTypes.object,
  pictures: React.PropTypes.shape({
    main: React.PropTypes.number,
    product: React.PropTypes.number,
    paths: React.PropTypes.object
  }),
  colors: React.PropTypes.object,
  defaultColor: React.PropTypes.string
};

// Actions
product.openMeasurementsPopup = actionFactory.simpleActionCreator(actionTypes.OPEN_MEASUREMENTS_POPUP);
product.closeMeasurementsPopup = actionFactory.simpleActionCreator(actionTypes.CLOSE_MEASUREMENTS_POPUP);

const fetchPayloadFactory = (arg) => {
  return {
    id: arg
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
product.setProductMeasurements = actionFactory.payloadActionCreator(actionTypes.SET_PRODUCT_MEASUREMENTS, setProductMeasurementsPayloadFactory);

// React Redux
function mapStateToProps(state) {
  return {
    product: state.product.current,
    options: state.product.options,
    selectedColor: state.product.options.color,
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

const pickProductColor = (state, action) => {
  var updatedOptions = Object.assign({}, state.options, {
    color: action.payload.color
  });

  return Object.assign({}, state, {
    options: updatedOptions
  });
};

const setProductMeasurements = (state, action) => {
  var updatedMeasurementsOptions = Object.assign({}, state.options, {
    measurements: action.payload.measurements
  });

  return Object.assign({}, state, {
    options: updatedMeasurementsOptions
  });
};

const fetchProduct = (state, action) => {
  var prod = collections.barcelona.find(function (piece) {
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
