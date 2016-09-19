var React = require('react');
var Link = require('react-router').Link;

var BuyButton = React.createClass({
  propTypes: {
    label: React.PropTypes.string.isRequired,
    route: React.PropTypes.string.isRequired
  },

  render: function(){
    return (
      <Link to={this.props.route}>
        <button className="buy-button">{this.props.label}</button>
      </Link>
    );
  }
});


module.exports = BuyButton;
