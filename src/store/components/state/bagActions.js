var actionTypes = require('./actionTypes.js');

var toggleQuickBag = function () {
  return {
    type: actionTypes.TOGGLE_QUICK_BAG
  };
};

var addProductToBag = function (product, options) {
  return {
    type: actionTypes.ADD_PRODUCT_TO_BAG,
    payload: {
      product: product,
      options: options
    }
  };
};

module.exports = {
  toggleQuickBag: toggleQuickBag,
  addProductToBag: addProductToBag
};
