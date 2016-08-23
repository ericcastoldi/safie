var React = require('react');

var BagProductPrice = React.createClass({
  propTypes: {
    price: React.PropTypes.number.isRequired
  },

  render: function () {
    return (<span className="produto-sacola-preco">R$ {this.props.price}</span>);
  }
});


module.exports = BagProductPrice;
