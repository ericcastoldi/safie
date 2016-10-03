var actionTypes = require('./actionTypes.js');
var collections = require('./data/collections.js');
var initialState = require('./data/initialState.js');

module.exports = function (state = initialState.product, action) {
  switch (action.type) {
  case actionTypes.FETCH_PRODUCT:
    var product = collections.barcelona.find(function (piece) {
      return piece.id === action.payload.id;
    });

    return Object.assign({}, state, {
      current: product
    });

  default:
    return state;
  }
};
