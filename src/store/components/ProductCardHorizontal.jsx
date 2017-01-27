import React from 'react';
import ProductPicture from './ProductPicture.jsx';
import ProductInfoSmall from './ProductInfoSmall.jsx';
import MeasurementsInfo from './MeasurementsInfo.jsx';
import product from './state/product.js';

var ProductCardHorizontal = React.createClass({

  propTypes: {
    options: React.PropTypes.shape({
      color: React.PropTypes.object,
      measurements: React.PropTypes.object
    }),
    product: React.PropTypes.shape(product.shape).isRequired
  },

  render: function () {

    var options = this.props.options;
    var prod = this.props.product;
    var picture = prod.pictures.paths[prod.pictures.product];

    var colorName = options.color ?
      prod.colors[options.color].name :
      prod.colors[prod.defaultColor].name;

    return (
      <div className="produto-sacola">

        <ProductPicture
          picture={picture}
          description={prod.name} />

        <ProductInfoSmall
          name={prod.name}
          description={prod.description} />

        <div><strong>Cor:</strong> {colorName}</div>

        <MeasurementsInfo
          product={prod}
          measurements={options.measurements} />

      </div>
    );
  }
});

module.exports = ProductCardHorizontal;
