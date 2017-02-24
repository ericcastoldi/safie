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

let main = {
  // shape: null,
  // initialState: null,
  // connect: null,
  // reducer: null
};

// State
main.initialState = {
  loading: false,
  infoExpanded: false
};

main.shape = {
  loading: React.PropTypes.bool,
  infoExpanded: React.PropTypes.bool,
  toggleInfo: React.PropTypes.func
};

main.toggleInfo = actionFactory.simpleActionCreator(actionTypes.TOGGLE_INFO);
main.toggleLoading = actionFactory.simpleActionCreator(actionTypes.TOGGLE_LOADING);


// React Redux
const mapStateToProps = (state) => {
  return {
    loading: state.main.loading,
    infoExpanded: state.main.infoExpanded
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    toggleLoading: main.toggleLoading,
    toggleInfo: main.toggleInfo
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


const toggleInfo = (state) => {
  return Object.assign({}, state, {
    infoExpanded: !state.infoExpanded
  });
};

main.actionTypeMapping = [];
main.actionTypeMapping[actionTypes.TOGGLE_INFO] = toggleInfo;
main.actionTypeMapping[actionTypes.TOGGLE_LOADING] = toggleLoading;

main.reducer = (state = main.initialState, action) => {
  return modelReducer(main, state, action);
};

module.exports = main;
