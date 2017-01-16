const axios = require('axios');

const simpleActionCreator = (type) => {

  return () => {
    return {
      type: type
    };
  };

};

const errorActionCreator = (type) => {

  return (err) => {
    return {
      type: type,
      payload: {
        error: err
      }
    };
  };

};

const payloadActionCreator = (type, payloadFactory) => {

  return (result) => {

    var payload = payloadFactory(result);

    return {
      type: type,
      payload: payload
    };
  };

};

const apiResultHandling = (apiResult, dispatch, success, fail) => {
  var result = apiResult.data;
  if(result.success){
    dispatch(success(result.data));
  }
  else{
    dispatch(fail(result.error));
  }
};


const asyncFetchActionCreator = (route, start, success, fail) => {
  return () => {
    return (dispatch) => {
      dispatch(start());

      return axios.get('/api/' + route)
          .then((apiResult) => {
            apiResultHandling(apiResult,
              dispatch,
              success,
              fail);
          })
          .catch((response) => {
            dispatch(fail(response));
          });

    };
  };
};


const smartAsyncFetchActionCreator = (route, startActionType, successActionType, failActionType, payloadFactory) => {
  const startAction = simpleActionCreator(startActionType);
  const failAction = errorActionCreator(failActionType);
  const doneAction = payloadActionCreator(successActionType, payloadFactory);

  return asyncFetchActionCreator(route, startAction, doneAction, failAction);
};

const asyncPostActionCreator = (route, start, success, fail) => {

  return (body) => {
    return (dispatch) => {
      dispatch(start());

      let fullRoute = '/api/' + route;
      let request = body ? axios.post(fullRoute, body) : axios.post(fullRoute);
      request
        .then((apiResult) => {
          apiResultHandling(apiResult,
            dispatch,
            success,
            fail);
        })
        .catch((response) => {
          dispatch(fail(response));
        });
      };
  };
};

const smartAsyncPostActionCreator = (route, startActionType, successActionType, failActionType, payloadFactory) => {
  const startAction = simpleActionCreator(startActionType);
  const failAction = errorActionCreator(failActionType);
  const doneAction = payloadActionCreator(successActionType, payloadFactory);

  return asyncPostActionCreator(route, startAction, doneAction, failAction);
};

const asyncDeleteActionCreator = (route, start, success, fail) => {

  return (resourceId) => {
    return (dispatch) => {
      dispatch(start());

      return axios.post('/api/' + route + '/' + resourceId)
      .then((apiResult) => {
        apiResultHandling(apiResult,
          dispatch,
          success,
          fail);
        })
        .catch((response) => {
          dispatch(fail(response));
        });
      };
  };
};

const smartAsyncDeleteActionCreator = (route, startActionType, successActionType, failActionType, payloadFactory) => {
  const startAction = simpleActionCreator(startActionType);
  const failAction = errorActionCreator(failActionType);
  const doneAction = payloadActionCreator(successActionType, payloadFactory);

  return asyncDeleteActionCreator(route, startAction, doneAction, failAction);
};


module.exports = {
  simpleActionCreator: simpleActionCreator,
  errorActionCreator: errorActionCreator,
  payloadActionCreator: payloadActionCreator,
  asyncFetchActionCreator: asyncFetchActionCreator,
  smartAsyncFetchActionCreator: smartAsyncFetchActionCreator,
  asyncPostActionCreator: asyncPostActionCreator,
  smartAsyncPostActionCreator: smartAsyncPostActionCreator,
  asyncDeleteActionCreator: asyncDeleteActionCreator,
  smartAsyncDeleteActionCreator: smartAsyncDeleteActionCreator
};
