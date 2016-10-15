import React from 'react';
import ProductPicture from './ProductPicture.jsx';
import ProductInfoSmall from './ProductInfoSmall.jsx';
import MeasurementsInfo from './MeasurementsInfo.jsx';
import productShape from './propTypes/productShape.js';

var ProductCardHorizontal = React.createClass({

  propTypes: {
    options: React.PropTypes.shape({
      color: React.PropTypes.object,
      measurements: React.PropTypes.object
    }),
    product: React.PropTypes.shape(productShape).isRequired
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
