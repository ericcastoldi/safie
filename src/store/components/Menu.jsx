var React = require('react');
var MenuItem = require('./MenuItem.jsx');
var SubMenu = require('./SubMenu.jsx');
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;
var menuActions = require('./state/menuActions.js');

var Menu = React.createClass({
  propTypes: {
    opened: React.PropTypes.bool.isRequired,
    toggle: React.PropTypes.func.isRequired,
    items: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        id: React.PropTypes.string,
        expanded: React.PropTypes.bool,
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
  },

  toggle: function(){
    this.props.toggle();
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
    if(this.props.opened) {
      cssClasses.push('open');
    }

    var items = this.renderItems();

    return (
      <div className="navigation">
        <i onClick={this.toggle} className="fa fa-bars" aria-hidden="true"></i>
        <nav className={cssClasses.join(' ')}>
          {items}
        </nav>
      </div>
    );
  }
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    toggle: menuActions.toggleMobileMenu
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    opened: state.menu.mobileMenuOpened,
    items: state.menu.items
  };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Menu);
