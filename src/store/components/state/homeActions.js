var actionTypes = require('./actionTypes.js');

var dismissSubscribePopup = function() {
  return {
    type: actionTypes.DISMISS_SUBSCRIBE_POPUP
  };
};

module.exports = {
  dismissSubscribePopup: dismissSubscribePopup
};
