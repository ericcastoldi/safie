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

module.exports = {
  fetchProduct: fetchProduct,
  openMeasuresPopup: openMeasuresPopup,
  closeMeasuresPopup: closeMeasuresPopup
};
