var React = require('react');
var ProductTitle = require('./ProductTitle.jsx');
var ProductInfo = require('./ProductInfo.jsx');
var ProductPrice = require('./ProductPrice.jsx');
//var SizeForm = require('./SizeForm.jsx');
var BuyButton = require('./BuyButton.jsx');

var ProductDetails = React.createClass({

  propTypes: {
    name: React.PropTypes.string.isRequired,
    price: React.PropTypes.string.isRequired,
    description: React.PropTypes.string,
    measures: React.PropTypes.object
  },

  getDefaultProps: function () {
    return {
      name: 'SAIA LÁPIS URBAN',
      price: '230,90',
      description: 'A SAIA LÁPIS URBAN é confeccionada em tecido encorpado e flexível com toque de viscose. O modelo saia lápis se adapta facilmente em diferentes silhuetas, valorizando e modelando as curvas do corpo. Seu comprimento é até os joelhos, caimento ajustado e elegância, sem igual. A peça é detalhada por víes e fenda discreta da parte frontal. Ideal para look no trabalho e jantares à noite.',
      measures: {
        Cintura: null,
        Pernas: null
      }
    };
  },

  render: function () {

    return (
      <div className="detalhes-produto">
        <div className="container">
          <div className="row">
            <div className="three columns">
              <ProductTitle name={this.props.name} />
              <ProductPrice price={this.props.price} />
            </div>
            <div className="four columns">
              <ProductInfo description={this.props.description} />
            </div>
            <div className="five columns">
              <BuyButton label="Comprar" route="/bag" />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ProductDetails;
