var actionTypes = require('./actionTypes.js');
var initialState = require('./data/initialState.js');

module.exports = function (state = initialState.bag, action) {
  switch (action.type) {

  case actionTypes.TOGGLE_QUICK_BAG:
    return Object.assign({}, state, {
      quickBagOpened: !state.quickBagOpened
    });


  case actionTypes.ADD_PRODUCT_TO_BAG:
    //state.items[]
    return state;
  default:
    return state;
  }
};
