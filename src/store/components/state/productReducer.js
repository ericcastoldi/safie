var actionTypes = require('./actionTypes.js');
var collections = require('./data/collections.js');
var initialState = require('./data/initialState.js');

module.exports = function (state = initialState.product, action) {
  switch (action.type) {

  case actionTypes.OPEN_MEASUREMENTS_POPUP:
    return Object.assign({}, state, {
      measurementsPopupOpen: true
    });

  case actionTypes.CLOSE_MEASUREMENTS_POPUP:
    return Object.assign({}, state, {
      measurementsPopupOpen: false
    });

  case actionTypes.PICK_PRODUCT_COLOR:
    var updatedOptions = Object.assign({}, state.options, {
      color: action.payload.color
    });

    return Object.assign({}, state, {
      options: updatedOptions
    });

  case actionTypes.SET_PRODUCT_MEASUREMENTS:
    var updatedMeasurementsOptions = Object.assign({}, state.options, {
      measurements: action.payload.measurements
    });

    return Object.assign({}, state, {
      options: updatedMeasurementsOptions
    });


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
