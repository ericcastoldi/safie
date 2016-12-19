var actionTypes = require('./actionTypes.js');
const axios = require('axios');

var toggleQuickBag = function () {
  return {
    type: actionTypes.TOGGLE_QUICK_BAG
  };
};

// var _addProductToBag = function (product, options) {
//   return {
//     type: actionTypes.ADD_PRODUCT_TO_BAG,
//     payload: {
//       product: product,
//       options: options
//     }
//   };
// };

const handleApiResult = (apiResult, dispatch, success, fail) => {
  var result = apiResult.data;
  if(result.success){
    dispatch(success(result.data));
  }
  else{
    dispatch(fail(result.error));
  }
};


const startFetchingBag = () => {
  return {
    type: actionTypes.START_FETCHING_BAG
  };
};

const doneFetchingBag = (bag) => {
  return {
    type: actionTypes.DONE_FETCHING_BAG,
    payload: {
      bag: bag
    }
  };
};

const cannotFetchBag = (err) => {
  return {
    type: actionTypes.CANNOT_FETCH_BAG,
    payload: {
      error: err
    }
  };
};

const fetchBag = () => {

  return (dispatch) => {
    dispatch(startFetchingBag());

    return axios.get('/api/bag')
        .then((apiResult) => {
          handleApiResult(apiResult,
            dispatch,
            doneFetchingBag,
            cannotFetchBag);
        })
        .catch((response) => {
          dispatch(cannotFetchBag(response));
        });

  };
};


const startAddingProductToBag = () => {
  return {
    type: actionTypes.START_ADDING_PRODUCT_TO_BAG
  };
};

const doneAddingProductToBag = (bag) => {
  return {
    type: actionTypes.DONE_ADDING_PRODUCT_TO_BAG,
    payload: {
      bag: bag
    }
  };
};

const cannotAddProductToBag = (err) => {
  return {
    type: actionTypes.CANNOT_ADD_PRODUCT_TO_BAG,
    payload: {
      error: err
    }
  };
};

const addProductToBag = (product, options) => {

  return (dispatch) => {
    dispatch(startAddingProductToBag());

    var item = {
      product: product,
      options: options
    };

    return axios.post('/api/bag', item)
        .then((apiResult) => {
          handleApiResult(apiResult,
            dispatch,
            doneAddingProductToBag,
            cannotAddProductToBag);
        })
        .catch((response) => {
          dispatch(cannotAddProductToBag(response));
        });
  };
};






// var _removeProductFromBag = function (productId) {
//   return {
//     type: actionTypes.REMOVE_PRODUCT_FROM_BAG,
//     payload: {
//       productId: productId
//     }
//   };
// };

const startRemovingProductFromBag = () => {
  return {
    type: actionTypes.START_REMOVING_PRODUCT_FROM_BAG
  };
};

const doneRemovingProductFromBag = (bag) => {
  return {
    type: actionTypes.DONE_REMOVING_PRODUCT_FROM_BAG,
    payload: {
      bag: bag
    }
  };
};

const cannotRemoveProductFromBag = (err) => {
  return {
    type: actionTypes.CANNOT_REMOVE_PRODUCT_FROM_BAG,
    payload: {
      error: err
    }
  };
};

const removeProductFromBag = (itemId) => {

  return (dispatch) => {
    dispatch(startRemovingProductFromBag());

    return axios.delete('/api/bag/' + itemId)
        .then((apiResult) => {
          handleApiResult(apiResult,
            dispatch,
            doneRemovingProductFromBag,
            cannotRemoveProductFromBag);
        })
        .catch((response) => {
          dispatch(cannotRemoveProductFromBag(response));
        });

  };
};





module.exports = {
  fetchBag: fetchBag,
  toggleQuickBag: toggleQuickBag,
  addProductToBag: addProductToBag,
  removeProductFromBag: removeProductFromBag
};
