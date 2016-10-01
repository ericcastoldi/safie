var React = require('react');
var ProductTitle = require('./ProductTitle.jsx');
var ProductInfo = require('./ProductInfo.jsx');
var ProductPrice = require('./ProductPrice.jsx');
//var SizeForm = require('./SizeForm.jsx');
var MeasuresButton = require('./MeasuresButton.jsx');
var BuyButton = require('./BuyButton.jsx');
var SocialIcons = require('./SocialIcons.jsx');

var ProductDetails = React.createClass({

  propTypes: {
    name: React.PropTypes.string.isRequired,
    price: React.PropTypes.string.isRequired,
    description: React.PropTypes.string,
    measures: React.PropTypes.object
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
              <div className="comprar-produto">
                <MeasuresButton />
                <BuyButton label="Comprar" route="/bag" />
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ProductDetails;
