import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionTypes from './actionTypes.js';
import actionFactory from './actionFactory.js';
import modelReducer from './modelReducer.js';

let main = {
  // shape: null,
  // initialState: null,
  // connect: null,
  // reducer: null
};

// State
main.initialState = {
  loading: false
};

main.shape = {
  loading: React.PropTypes.bool
};

main.toggleLoading = actionFactory.simpleActionCreator(actionTypes.TOGGLE_LOADING);

// React Redux
const mapStateToProps = (state) => {
  return {
    loading: state.main.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    toggleLoading: main.toggleLoading
  }, dispatch);
};


main.connect = (Component) => {
  return connect(mapStateToProps, mapDispatchToProps)(Component);
};

// Reducers
const toggleLoading = (state) => {
  return Object.assign({}, state, {
    loading: !state.loading
  });
};

main.actionTypeMapping = [];
main.actionTypeMapping[actionTypes.TOGGLE_LOADING] = toggleLoading;

main.reducer = (state = main.initialState, action) => {
  return modelReducer(main, state, action);
};

module.exports = main;
