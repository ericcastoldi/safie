var actionTypes = require('./actionTypes.js');
var initialState = require('./data/initialState.js');

module.exports = function (state = initialState.menu, action) {
  switch (action.type) {

  case actionTypes.TOGGLE_MOBILE_MENU:
    return Object.assign({}, state, {
      mobileMenuOpened: !state.mobileMenuOpened
    });

  case actionTypes.TOGGLE_MENU_SUBITEMS:
    var item = state.items.find(function (it) {
      return it.id === action.menuId;
    });

    if (!item) {
      return state;
    }

    var index = state.items.indexOf(item);
    var changedItem = Object.assign({}, item, {
      expanded: !item.expanded
    });

    var newItems = [
      ...state.items.slice(0, index),
      changedItem,
      ...state.items.slice(index + 1)
    ];

    return Object.assign({}, state, {
      items: newItems
    });

  default:
    return state;

  }
};
