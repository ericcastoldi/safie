var actionTypes = require('./actionTypes.js');
var initialState = require('./data/initialState.js');

module.exports = function (state = initialState.mysafie, action) {
  switch (action.type) {

    case actionTypes.TOGGLE_MEASUREMENTS_BOX:
      return Object.assign({}, state, {
        measurementsOpened: !state.measurementsOpened
      });

    case actionTypes.TOGGLE_ORDERS_BOX:
      return Object.assign({}, state, {
        ordersOpened: !state.ordersOpened
      });

    case actionTypes.TOGGLE_ADDRESSES_BOX:
      return Object.assign({}, state, {
        addressesOpened: !state.addressesOpened
      });

    case actionTypes.TOGGLE_BAG_BOX:
      return Object.assign({}, state, {
        bagOpened: !state.bagOpened
      });

    default:
      return state;
  }
};
