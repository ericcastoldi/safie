var actionTypes = require('./actionTypes.js');

var openMeasurementsPopup = function () {
  return {
    type: actionTypes.OPEN_MEASUREMENTS_POPUP
  };
};

var closeMeasurementsPopup = function () {
  return {
    type: actionTypes.CLOSE_MEASUREMENTS_POPUP
  };
};

var fetchProduct = function (id) {
  return {
    type: actionTypes.FETCH_PRODUCT,
    payload: {
      id: id
    }
  };
};

var pickProductColor = function (color) {
  return {
    type: actionTypes.PICK_PRODUCT_COLOR,
    payload: {
      color: color
    }
  };
};

var setProductMeasurements = function (measurements) {
  return {
    type: actionTypes.SET_PRODUCT_MEASUREMENTS,
    payload: {
      measurements: measurements
    }
  };
};


module.exports = {
  fetchProduct: fetchProduct,
  openMeasurementsPopup: openMeasurementsPopup,
  closeMeasurementsPopup: closeMeasurementsPopup,
  pickProductColor: pickProductColor,
  setProductMeasurements: setProductMeasurements
};
