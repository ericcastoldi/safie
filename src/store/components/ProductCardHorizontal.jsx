import React from 'react';
import ProductPicture from './ProductPicture.jsx';
import ProductInfoSmall from './ProductInfoSmall.jsx';
import MeasurementsInfo from './MeasurementsInfo.jsx';
import product from './state/product.js';

class ProductCardHorizontal extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {

    const options = this.props.options;
    const prod = this.props.product;
    const picture = prod.pictures.paths[prod.pictures.product];

    const colorName = options.color ?
      prod.colors[options.color].name :
      prod.colors[prod.defaultColor].name;

    return (
      <div className="produto-sacola">

        <ProductPicture
          picture={picture}
          description={prod.name} />

        <ProductInfoSmall
          id={prod.id}
          name={prod.name}
          description={prod.description} />

        <div><strong>Cor:</strong> {colorName}</div>

        <MeasurementsInfo
          product={prod}
          measurements={options.measurements} />

      </div>
    );
  }
}


ProductCardHorizontal.propTypes = {
  options: React.PropTypes.shape({
    color: React.PropTypes.object,
    measurements: React.PropTypes.object
  }),
  product: React.PropTypes.shape(product.shape).isRequired
};


module.exports = ProductCardHorizontal;
