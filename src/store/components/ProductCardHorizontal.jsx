import React from 'react';
import ProductPicture from './ProductPicture.jsx';
import ProductInfoSmall from './ProductInfoSmall.jsx';
import MeasurementsInfo from './MeasurementsInfo.jsx';
import ProductColorPicker from './ProductColorPicker.jsx';
import product from './state/product.js';

class ProductCardHorizontal extends React.Component {


  constructor(props) {
    super(props);

    this.pickProductColor = this.pickProductColor.bind(this);
  }

  pickProductColor(color) {
    console.log(color);
  }

  render() {

    const options = this.props.options;
    const prod = this.props.product;
    const picture = prod.pictures.paths[prod.pictures.product];

    return (
      <div className="produto-sacola">

        <ProductPicture
          picture={picture}
          description={prod.name} />

        <ProductInfoSmall
          id={prod.id}
          name={prod.name}
          description={prod.description} />

        <MeasurementsInfo
          product={prod}
          measurements={options.measurements} />


        <ProductColorPicker
          colors={prod.colors}
          pickProductColor={this.pickProductColor}
          defaultColor={prod.defaultColor}
          selectedColor={options.color} />

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
