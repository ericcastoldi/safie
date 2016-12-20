var actionTypes = require('./actionTypes.js');

var toggleMeasurementsBox = function() {
  return {
    type: actionTypes.TOGGLE_MEASUREMENTS_BOX
  };
};


var toggleOrdersBox = function() {
  return {
    type: actionTypes.TOGGLE_ORDERS_BOX
  };
};



var toggleAddressesBox = function() {
  return {
    type: actionTypes.TOGGLE_ADDRESSES_BOX
  };
};



var toggleBagBox = function() {
  return {
    type: actionTypes.TOGGLE_BAG_BOX
  };
};


module.exports = {
  toggleMeasurementsBox: toggleMeasurementsBox,
  toggleOrdersBox: toggleOrdersBox,
  toggleAddressesBox: toggleAddressesBox,
  toggleBagBox: toggleBagBox
};
