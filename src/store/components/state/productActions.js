var actionTypes = require('./actionTypes.js');

var fetchProduct = function (id) {
  return {
    type: actionTypes.FETCH_PRODUCT,
    payload: {
      id: id
    }
  };
};

module.exports = {
  fetchProduct: fetchProduct
};
