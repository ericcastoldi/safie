var actionTypes = require('./actionTypes.js');
var initialState = require('./data/initialState.js');

module.exports = function (state = initialState.bag, action) {
  switch (action.type) {

  case actionTypes.TOGGLE_QUICK_BAG:
    return Object.assign({}, state, {
      quickBagOpened: !state.quickBagOpened
    });


  case actionTypes.ADD_PRODUCT_TO_BAG:

    var newItem = Object.assign({}, action.payload);
    var newState = Object.assign({}, state);
    var newItemId = new Date()
      .getTime();

    newState.items[newItemId] = newItem;
    return newState;

  default:
    return state;
  }
};
