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

var removeProductFromBag = function (productId) {
  return {
    type: actionTypes.REMOVE_PRODUCT_FROM_BAG,
    payload: {
      productId: productId
    }
  };
};

module.exports = {
  toggleQuickBag: toggleQuickBag,
  addProductToBag: addProductToBag,
  removeProductFromBag: removeProductFromBag
};
