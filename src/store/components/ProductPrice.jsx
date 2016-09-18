var React = require('react');

var ProductPrice = React.createClass({
  propTypes: {
    price: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
      <span className="produto-preco">
        <h5>R$ {this.props.price}</h5>
      </span>
    );
  }
});


module.exports = ProductPrice;
