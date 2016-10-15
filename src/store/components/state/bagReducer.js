var actionTypes = require('./actionTypes.js');
var initialState = require('./data/initialState.js');

const toggleQuickBag = (state) => {
  return Object.assign({}, state, {
    quickBagOpened: !state.quickBagOpened
  });
};

const addProductToBag = (state, action) => {
  var newItem = Object.assign({}, action.payload);
  var newState = Object.assign({}, state);
  var newItemId = new Date()
    .getTime();

  newState.items[newItemId] = newItem;
  return newState;
};

const removeProductFromBag = (state, action) => {
  if (action.payload.productId in state.items) {
    let newState = Object.assign({}, state);
    delete newState.items[action.payload.productId];
    return newState;
  }

  return state;
};

module.exports = function (state = initialState.bag, action) {
  switch (action.type) {

  case actionTypes.TOGGLE_QUICK_BAG:
    return toggleQuickBag(state, action);

  case actionTypes.ADD_PRODUCT_TO_BAG:
    return addProductToBag(state, action);

  case actionTypes.REMOVE_PRODUCT_FROM_BAG:
    return removeProductFromBag(state, action);

  default:
    return state;
  }
};
