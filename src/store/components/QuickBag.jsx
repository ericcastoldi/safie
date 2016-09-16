var React = require('react');
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;

var QuickBag = React.createClass({
  propTypes: {
    opened: React.PropTypes.bool.isRequired,
    toggle: React.PropTypes.func.isRequired
  },

  toggle: function(){
    this.props.toggle();
  },

  render: function () {
    let cssClasses = ['quickbag'];
    if(this.props.opened) {
      cssClasses.push('open');
    }


    return (
      <div className={cssClasses.join(' ')} onClick={this.toggle}>
        <i className="fa fa-shopping-cart fa-flip-horizontal fa-2x" aria-hidden="true"></i>
        <div className="items"></div>
      </div>
    );
  }
});


var toggleQuickBag = function() {
  return {
    type: 'TOGGLE_QUICK_BAG'
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    toggle: toggleQuickBag
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    opened: state.main.quickBagOpened
  };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(QuickBag);
