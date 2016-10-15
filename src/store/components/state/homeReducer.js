var actionTypes = require('./actionTypes.js');
var initialState = require('./data/initialState.js');

module.exports = function (state = initialState.home, action) {
  switch (action.type) {
  case actionTypes.DISMISS_SUBSCRIBE_POPUP:
    return Object.assign({}, state, {
      subscribePopupOn: !state.subscribePopupOn
    });
  default:
    return state;
  }
};
