var React = require('react');
var MenuItem = require('./MenuItem.jsx');
var SubMenu = require('./SubMenu.jsx');
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;

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

  // getDefaultProps: function () {
  //   return {
  //     items: [
  //       {
  //         title: 'Home',
  //         route: '/'
  //       },
  //       {
  //         id: 'colecoes',
  //         expanded: false,
  //         title: 'Coleções',
  //         items: [
  //           {
  //             title: 'Safie Conceito',
  //             route: '/produtos'
  //           },
  //           {
  //             title: 'Barcelona',
  //             route: '/produtos'
  //           },
  //           {
  //             title: 'Coleções Cápsula',
  //             route: '/produtos'
  //           }
  //         ]
  //       },
  //       {
  //         id: 'mysafie',
  //         expanded: false,
  //         title: 'My Safie',
  //         items: [
  //           {
  //             title: 'Medidas',
  //             route: '/medidas'
  //           },
  //           {
  //             title: 'Login',
  //             route: '/login'
  //           }
  //         ]
  //       },
  //       {
  //         title: 'Sobre Nós',
  //         route: '/sobre'
  //       },
  //       {
  //         title: 'Contato',
  //         route: '/contato'
  //       }
  //     ]
  //   };
  // },

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

var toggleMobileMenu = function() {
  return {
    type: 'TOGGLE_MOBILE_MENU'
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    toggle: toggleMobileMenu
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    opened: state.menu.mobileMenuOpened,
    items: state.menu.items
  };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Menu);
