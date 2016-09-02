var React = require('react');
var ProductInfo = require('./ProductInfo.jsx');
var ProductPrice = require('./ProductPrice.jsx');
var SizeForm = require('./SizeForm.jsx');
var BuyButton = require('./BuyButton.jsx');

var ProductDetails = React.createClass({

  propTypes: {
    name: React.PropTypes.string.isRequired,
    price: React.PropTypes.number.isRequired,
    description: React.PropTypes.string,
    measures: React.PropTypes.object
  },

  getDefaultProps: function () {
    return {
      name: 'Saia Mid Velvet',
      price: 230.00,
      description: 'Saia mid em veludo, na cor preta com acabamentos da barra à fio.',
      measures: {
        Cintura: null,
        Pernas: null
      }
    };
  },

  render: function () {

    return (
      <div className="detalhes-produto">

        <ProductInfo
          name={this.props.name}
          description={this.props.description} />

        <ProductPrice price={this.props.price} />

        <SizeForm measures={this.props.measures} />

        <BuyButton label="Comprar" route="/bag" />

      </div>
    );
  }
});

module.exports = ProductDetails;
