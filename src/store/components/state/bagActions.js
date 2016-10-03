var actionTypes = require('./actionTypes.js');

var toggleQuickBag = function() {
  return {
    type: actionTypes.TOGGLE_QUICK_BAG
  };
};

module.exports = {
  toggleQuickBag: toggleQuickBag
};
