import React from 'react';
import {
  connect
} from 'react-redux';
import {
  bindActionCreators
} from 'redux';
import actionTypes from './actionTypes.js';
import actionFactory from './actionFactory.js';
import modelReducer from './modelReducer.js';

let menu = {
  // shape: null,
  // initialState: null,
  // connect: null,
  // reducer: null
};


menu.shape = {
  mobileMenuOpened: React.PropTypes.bool.isRequired,
  toggleMobileMenu: React.PropTypes.func.isRequired,
  items: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.string,
      expanded: React.PropTypes.bool,
      toggleSubItems: React.PropTypes.func,
      title: React.PropTypes.string.isRequired,
      route: React.PropTypes.string,
      items: React.PropTypes.arrayOf(
        React.PropTypes.shape({
          title: React.PropTypes.string.isRequired,
          route: React.PropTypes.string.isRequired
        })
      )
    })
  ).isRequired
};

menu.initialState = {
  mobileMenuOpened: false,
  items: [{
      title: 'Home',
      route: '/'
    },
    {
      id: 'colecoes',
      expanded: false,
      title: 'Coleções',
      items: [
        {
          title: 'Coleção Cápsula',
          route: '/colecoes/capsula'
        },
        {
          title: 'Coleção Contínua',
          route: '/colecoes/continua'
        },
        {
          title: 'Barcelona',
          route: '/colecoes/barcelona'
        }
      ]
    },
    {
      id: 'mysafie',
      expanded: false,
      title: 'My Safie',
      items: [{
          title: 'Medidas',
          route: '/medidas'
        },
        {
          title: 'Login',
          route: '/login'
        }
      ]
    },
    {
      title: 'Sobre Nós',
      route: '/sobre'
    },
    {
      title: 'Contato',
      route: '/contato'
    }
  ]
};

menu.toggleMobileMenu = actionFactory.simpleActionCreator(actionTypes.TOGGLE_MOBILE_MENU);
menu.toggleSubItems = (menuId) => {
  return {
    type: actionTypes.TOGGLE_MENU_SUBITEMS,
    menuId: menuId
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    toggleSubItems: menu.toggleSubItems,
    toggleMobileMenu: menu.toggleMobileMenu
  }, dispatch);
};

const mapStateToProps = (state) => {
  return {
    mobileMenuOpened: state.menu.mobileMenuOpened,
    items: state.menu.items
  };
};

menu.connect = (Component) => {
  return connect(mapStateToProps, mapDispatchToProps)(Component);
};

menu.actionTypeMapping = [];
menu.actionTypeMapping[actionTypes.TOGGLE_MOBILE_MENU] = (state) => {
  return Object.assign({}, state, {
    mobileMenuOpened: !state.mobileMenuOpened
  });
};

menu.actionTypeMapping[actionTypes.TOGGLE_MENU_SUBITEMS] = (state, action) => {
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
};

menu.reducer = (state = menu.initialState, action) => {
  return modelReducer(menu, state, action);
};


module.exports = menu;
