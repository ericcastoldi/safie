var React = require('react');
var Link = require('react-router').Link;

var BuyButton = React.createClass({
  propTypes: {
    label: React.PropTypes.string.isRequired,
    route: React.PropTypes.string.isRequired
  },

  render: function(){
    return (
      <div className="comprar-produto">
        <Link to={this.props.route}>
          <button>{this.props.label}</button>
        </Link>
      </div>
    );
  }
});


module.exports = BuyButton;
