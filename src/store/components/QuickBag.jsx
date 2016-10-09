var React = require('react');
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;
var bagActions = require('./state/bagActions.js');
var Link = require('react-router').Link;

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

        <Link to="/bag">
          <i className="fa fa-shopping-cart fa-flip-horizontal fa-2x" aria-hidden="true"></i>
        </Link>
        <div className="items"></div>
      </div>
    );
  }
});




function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    toggle: bagActions.toggleQuickBag
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    opened: state.bag.quickBagOpened
  };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(QuickBag);
