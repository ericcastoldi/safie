var React = require('react');
import { Link } from 'react-router';
var MenuItem = require('./MenuItem.jsx');
var SubMenu = require('./SubMenu.jsx');
var menu = require('./state/menu.js');

var Menu = React.createClass({
  propTypes: menu.shape,

  toggle: function(){
    this.props.toggleMobileMenu();
  },

  renderItems: function(){
    return this.props.items.map(function (item, rowIndex) {
      if(item.items){
        return (
          <SubMenu id={item.id} key={rowIndex} title={item.title} items={item.items} expanded={item.expanded} />
        );
      }

      return (
        <MenuItem key={rowIndex} title={item.title} route={item.route} />
      );
    });
  },

  render: function () {
    let cssClasses = ['menu'];
    if(this.props.mobileMenuOpened) {
      cssClasses.push('open');
    }

    var items = this.renderItems();

    return (
      <div className="navigation">
        <i onClick={this.toggle} className="fa fa-bars" aria-hidden="true"></i>
        <nav className={cssClasses.join(' ')}>
          {items}

          <Link to="/bag">
            <i
              aria-hidden="true"
              className="fa fa-shopping-bag fa-2x">
            </i>
          </Link>
        </nav>
      </div>
    );
  }
});


module.exports = menu.connect(Menu);
