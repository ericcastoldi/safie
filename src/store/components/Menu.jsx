var React = require('react');
var Link = require('react-router').Link;
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;

var Menu = React.createClass({
  propTypes: {
    opened: React.PropTypes.bool.isRequired,
    toggle: React.PropTypes.func.isRequired
  },

  toggle: function(){
    this.props.toggle();
  },

  render: function () {
    let cssClasses = ['menu'];
    if(this.props.opened) {
      cssClasses.push('open');
    }

    return (
      <div className="navigation">
        <i onClick={this.toggle} className="fa fa-bars" aria-hidden="true"></i>

        <nav className={cssClasses.join(' ')}>
          <Link to="/">Home</Link>
          <Link to="/produtos">Coleções</Link>
          <Link to="/">My Safie</Link>
          <Link to="/">Sobre Nós</Link>
          <Link to="/">Contato</Link>
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
    opened: state.main.mobileMenuOpened
  };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Menu);
