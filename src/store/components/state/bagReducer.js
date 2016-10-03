var actionTypes = require('./actionTypes.js');
var initialState = require('./data/initialState.js');

module.exports = function (state = initialState.bag, action) {
  switch (action.type) {
  case actionTypes.TOGGLE_QUICK_BAG:
    return Object.assign({}, state, {
      quickBagOpened: !state.quickBagOpened
    });
  default:
    return state;
  }
};
