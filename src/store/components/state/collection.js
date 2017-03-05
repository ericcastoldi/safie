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
import product from './product.js';

let collection = {
  // shape: null,
  // initialState: null,
  // connect: null,
  // reducer: null
};

// State
collection.initialState = []; // TODO: Alterar para objeto, contendo um array de "data" dentro ou algo do genero.
collection.shape = React.PropTypes.arrayOf(React.PropTypes.shape(product.shape));

// Actions
const fetchPayloadFactory = (arg) => {
  return {
    collection: arg
  };
};
collection.fetchProducts = actionFactory.payloadActionCreator(actionTypes.FETCH_PRODUCTS, fetchPayloadFactory);

// React Redux
function mapStateToProps(state) {
  return {
    collection: state.collection
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchProducts: collection.fetchProducts
  }, dispatch);
}

collection.connect = (Component) => {
  return connect(mapStateToProps, mapDispatchToProps)(Component);
};


// Reducers
const fetchProducts = (state, action) => {
  if (action.payload.collection in collections) {
    return [...collections[action.payload.collection]];
  }

  return [];
};

collection.actionTypeMapping = [];
collection.actionTypeMapping[actionTypes.FETCH_PRODUCTS] = fetchProducts;

collection.reducer = (state = collection.initialState, action) => {
  return modelReducer(collection, state, action);
};

module.exports = collection;
