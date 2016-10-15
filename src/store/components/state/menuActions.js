var actionTypes = require('./actionTypes.js');

var toggleMobileMenu = function () {
  return {
    type: actionTypes.TOGGLE_MOBILE_MENU
  };
};

var toggleSubItems = function (menuId) {
  return {
    type: actionTypes.TOGGLE_MENU_SUBITEMS,
    menuId: menuId
  };
};

module.exports = {
  toggleMobileMenu: toggleMobileMenu,
  toggleSubItems: toggleSubItems
};
