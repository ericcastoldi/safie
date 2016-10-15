var actionTypes = require('./actionTypes.js');
var collections = require('./data/collections.js');
var initialState = require('./data/initialState.js');

module.exports = function (state = initialState.products, action) {
  switch (action.type) {
  case actionTypes.FETCH_PRODUCTS:
    if (action.payload.collection in collections) {
      return [...collections[action.payload.collection]];
    }

    return [];
  default:
    return state;
  }
};
