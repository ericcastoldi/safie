var actionTypes = require('./actionTypes.js');

var openMeasuresPopup = function () {
  return {
    type: actionTypes.OPEN_MEASURES_POPUP
  };
};

var closeMeasuresPopup = function () {
  return {
    type: actionTypes.CLOSE_MEASURES_POPUP
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

var setProductMeasures = function (measures) {
  return {
    type: actionTypes.SET_PRODUCT_MEASURES,
    payload: {
      measures: measures
    }
  };
};


module.exports = {
  fetchProduct: fetchProduct,
  openMeasuresPopup: openMeasuresPopup,
  closeMeasuresPopup: closeMeasuresPopup,
  pickProductColor: pickProductColor,
  setProductMeasures: setProductMeasures
};
