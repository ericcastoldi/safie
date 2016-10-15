var actionTypes = require('./actionTypes.js');

var fetchProducts = function (collection) {
  return {
    type: actionTypes.FETCH_PRODUCTS,
    payload: {
      collection: collection
    }
  };
};

module.exports = {
  fetchProducts: fetchProducts
};
