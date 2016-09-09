var initialState = {
  main: {
    subscribePopupOn: true
  }
};

module.exports = {
  getState: function () {
    return initialState;
  },
  dispatch: function (action) {},
  subscribe: function (listener) {},
  replaceReducer: function (nextReducer) {}
};
