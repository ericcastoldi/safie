var actionTypes = require('./actionTypes.js');
var initialState = require('./data/initialState.js');

/*
FETCH_BAG: 'FETCH_BAG',
START_FETCHING_BAG: 'START_FETCHING_BAG',
DONE_FETCHING_BAG: 'DONE_FETCHING_BAG',
CANNOT_FETCH_BAG: 'CANNOT_FETCH_BAG',

ADD_PRODUCT_TO_BAG: 'ADD_PRODUCT_TO_BAG',
START_ADDING_PRODUCT_TO_BAG: 'START_ADDING_PRODUCT_TO_BAG',
DONE_ADDING_PRODUCT_TO_BAG: 'DONE_ADDING_PRODUCT_TO_BAG',
CANNOT_ADD_PRODUCT_TO_BAG: 'CANNOT_ADD_PRODUCT_TO_BAG',

REMOVE_PRODUCT_FROM_BAG: 'REMOVE_PRODUCT_FROM_BAG',
START_REMOVING_PRODUCT_FROM_BAG: 'START_REMOVING_PRODUCT_FROM_BAG',
DONE_REMOVING_PRODUCT_FROM_BAG: 'DONE_REMOVING_PRODUCT_FROM_BAG',
CANNOT_REMOVE_PRODUCT_FROM_BAG: 'CANNOT_REMOVE_PRODUCT_FROM_BAG',


// const addProductToBag = (state, action) => {
//   var newItem = Object.assign({}, action.payload);
//   var newState = Object.assign({}, state);
//   var newItemId = new Date()
//     .getTime();
//
//   newState.items[newItemId] = newItem;
//   return newState;
// };
//
// const removeProductFromBag = (state, action) => {
//   if (action.payload.productId in state.items) {
//     let newState = Object.assign({}, state);
//     delete newState.items[action.payload.productId];
//     return newState;
//   }
//
//   return state;
// };
*/
const startFetchingBag = (state) => {
  return Object.assign({}, state, {
    error: null,
    fetching: true,
    doneFetching: false
  });
};

const doneFetchingBag = (state, action) => {
  return Object.assign({}, state, {
    doneFetching: true,
    fetching: false,
    error: null,
    items: action.payload.bag.items,
    total: action.payload.bag.total
  });
};

const cannotFetchBag = (state, action) => {
  return Object.assign({}, state, {
    doneFetching: true,
    fetching: false,
    error: action.payload.error
  });
};

const startAddingProductToBag = (state) => {
  return Object.assign({}, state, {
    error: null,
    adding: true,
    doneAdding: false
  });
};

const doneAddingProductToBag = (state, action) => {
  return Object.assign({}, state, {
    adding: false,
    doneAdding: true,
    error: null,
    items: action.payload.bag.items,
    total: action.payload.bag.total
  });
};

const cannotAddProductToBag = (state, action) => {
  return Object.assign({}, state, {
    adding: false,
    doneAdding: true,
    error: action.payload.error
  });
};


const startRemovingProductFromBag = (state) => {
  return Object.assign({}, state, {
    error: null,
    removing: true,
    doneRemoving: false
  });
};

const doneRemovingProductFromBag = (state, action) => {
  return Object.assign({}, state, {
    removing: false,
    doneRemoving: true,
    error: null,
    items: action.payload.bag.items,
    total: action.payload.bag.total
  });
};

const cannotRemoveProductFromBag = (state, action) => {
  return Object.assign({}, state, {
    removing: false,
    doneRemoving: true,
    error: action.payload.error
  });
};


const toggleQuickBag = (state) => {
  return Object.assign({}, state, {
    quickBagOpened: !state.quickBagOpened
  });
};

module.exports = function (state = initialState.bag, action) {
  switch (action.type) {

  case actionTypes.START_FETCHING_BAG:
    return startFetchingBag(state, action);

  case actionTypes.DONE_FETCHING_BAG:
    return doneFetchingBag(state, action);

  case actionTypes.CANNOT_FETCH_BAG:
    return cannotFetchBag(state, action);

  case actionTypes.START_ADDING_PRODUCT_TO_BAG:
    return startAddingProductToBag(state, action);

  case actionTypes.DONE_ADDING_PRODUCT_TO_BAG:
    return doneAddingProductToBag(state, action);

  case actionTypes.CANNOT_ADD_PRODUCT_TO_BAG:
    return cannotAddProductToBag(state, action);

  case actionTypes.TOGGLE_QUICK_BAG:
    return toggleQuickBag(state, action);

  case actionTypes.START_REMOVING_PRODUCT_FROM_BAG:
    return startRemovingProductFromBag(state, action);

  case actionTypes.DONE_REMOVING_PRODUCT_FROM_BAG:
    return doneRemovingProductFromBag(state, action);

  case actionTypes.CANNOT_REMOVE_PRODUCT_FROM_BAG:
    return cannotRemoveProductFromBag(state, action);

  // case actionTypes.ADD_PRODUCT_TO_BAG:
  //   return addProductToBag(state, action);
  //
  // case actionTypes.REMOVE_PRODUCT_FROM_BAG:
  //   return removeProductFromBag(state, action);

  default:
    return state;
  }
};
