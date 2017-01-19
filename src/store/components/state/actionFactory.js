import axios from 'axios';
import actionTypes from './actionTypes.js';
import { push } from 'react-router-redux';

const apiResultHandling = (apiResult, dispatch, success, fail, toggleLoading, redirectRoute) => {
  var result = apiResult.data;
  if(result.success){
    dispatch(success(result.data));

    if(redirectRoute) {
      dispatch(push(redirectRoute));
    }
  }
  else{
    dispatch(fail(result.error));
  }

  dispatch(toggleLoading());
};

const handleRequest = (request, dispatch, success, fail, toggleLoading, redirectRoute) => {
  return request.then((apiResult) => {
    apiResultHandling(apiResult,
      dispatch,
      success,
      fail,
      toggleLoading,
      redirectRoute);
  })
  .catch((response) => {
    dispatch(fail(response));
    dispatch(toggleLoading());
  });
};



let actionFactory = {};

actionFactory.simpleActionCreator = (type) => {

  return () => {
    return {
      type: type
    };
  };

};

actionFactory.errorActionCreator = (type) => {

  return (err) => {
    return {
      type: type,
      payload: {
        error: err
      }
    };
  };

};

actionFactory.payloadActionCreator = (type, payloadFactory) => {

  return (result) => {

    var payload = payloadFactory(result);

    return {
      type: type,
      payload: payload
    };
  };

};

const toggleLoadingAction = actionFactory.simpleActionCreator(actionTypes.TOGGLE_LOADING);


actionFactory.smartAsyncActionCreator = (route, startActionType, successActionType, failActionType, payloadFactory, asyncActionCreator) => {
  const startAction = actionFactory.simpleActionCreator(startActionType);
  const failAction = actionFactory.errorActionCreator(failActionType);
  const doneAction = actionFactory.payloadActionCreator(successActionType, payloadFactory);

  return asyncActionCreator(route, startAction, doneAction, failAction, toggleLoadingAction);
};

actionFactory.asyncFetchActionCreator = (route, start, success, fail, toggleLoading = toggleLoadingAction) => {
  return () => {
    return (dispatch) => {
      dispatch(toggleLoading());
      dispatch(start());

      const request = axios.get('/api/' + route);
      return handleRequest(request, dispatch, success, fail, toggleLoading);
    };
  };
};

actionFactory.smartAsyncFetchActionCreator = (route, startActionType, successActionType, failActionType, payloadFactory) => {
  return actionFactory.smartAsyncActionCreator(route, startActionType, successActionType, failActionType, payloadFactory, actionFactory.asyncFetchActionCreator);
};

actionFactory.asyncPostActionCreator = (route, start, success, fail, redirectRoute, toggleLoading = toggleLoadingAction) => {

  return (body) => {
    return (dispatch) => {
      dispatch(toggleLoading());
      dispatch(start());

      let fullRoute = '/api/' + route;
      let request = body ? axios.post(fullRoute, body) : axios.post(fullRoute);
      handleRequest(request, dispatch, success, fail, toggleLoading, redirectRoute);
    };
  };
};

actionFactory.smartAsyncPostActionCreator = (route, startActionType, successActionType, failActionType, payloadFactory) => {
  return actionFactory.smartAsyncActionCreator(route, startActionType, successActionType, failActionType, payloadFactory, actionFactory.asyncPostActionCreator);
};

actionFactory.asyncDeleteActionCreator = (route, start, success, fail, toggleLoading = toggleLoadingAction) => {

  return (resourceId) => {
    return (dispatch) => {
      dispatch(start());
      dispatch(toggleLoading());

      const request = axios.post('/api/' + route + '/' + resourceId);
      return handleRequest(request, dispatch, success, fail, toggleLoading);
    };
  };
};

actionFactory.smartAsyncDeleteActionCreator = (route, startActionType, successActionType, failActionType, payloadFactory) => {
  return actionFactory.smartAsyncActionCreator(route, startActionType, successActionType, failActionType, payloadFactory, actionFactory.asyncDeleteActionCreator);
};


module.exports = actionFactory;
