var React = require('react');
var ProductPicture = require('./ProductPicture.jsx');
var ProductInfoSmall = require('./ProductInfoSmall.jsx');
var MeasurementsInfo = require('./MeasurementsInfo.jsx');

var ProductCardHorizontal = React.createClass({

  propTypes: {
    options: React.PropTypes.shape({
      color: React.PropTypes.object,
      measurements: React.PropTypes.object
    }),
    product: React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired,
      description: React.PropTypes.string.isRequired,
      price: React.PropTypes.string.isRequired,
      measurements: React.PropTypes.object,
      pictures: React.PropTypes.shape({
        main: React.PropTypes.number.isRequired,
        product: React.PropTypes.number.isRequired,
        paths: React.PropTypes.arrayOf(React.PropTypes.object)
      }),
      colors: React.PropTypes.object.isRequired,
      defaultColor: React.PropTypes.string.isRequired
    })
.isRequired
  },

  render: function () {

    var options = this.props.options;
    var product = this.props.product;
    var picture = product.pictures.paths[product.pictures.product];

    var colorName = options.color ?
      product.colors[options.color].name :
      product.colors[product.defaultColor].name;

    return (
      <div className="produto-sacola">

        <ProductPicture
          picture={picture}
          description={product.name} />

        <ProductInfoSmall
          name={product.name}
          description={product.description} />

        <div><strong>Cor:</strong> {colorName}</div>

        <MeasurementsInfo
          product={product}
          measurements={options.measurements} />

      </div>
    );
  }
});

module.exports = ProductCardHorizontal;
