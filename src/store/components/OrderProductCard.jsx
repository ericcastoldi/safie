import React from 'react';
import ProductPicture from './ProductPicture.jsx';
import MeasurementsInfo from './MeasurementsInfo.jsx';
import ProductColorLabel from './ProductColorLabel.jsx';
import product from './state/product.js';

class OrderProductCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const options = this.props.options;
    const prod = this.props.product;
    const picture = prod.pictures.paths[prod.pictures.product];

    return (
      <div className='order-product-card row'>
        <div className='four columns'>

          <ProductPicture picture={picture} description={prod.name}/>

        </div>
        <div className='eight columns'>
          <div className="order-product">
            <p>
              <strong>{prod.name}</strong>
            </p>
            <p><ProductColorLabel color={options.color}/></p>

            <MeasurementsInfo product={prod} measurements={options.measurements}/>
          </div>
        </div>
      </div>
    );
  }
}

OrderProductCard.propTypes = {
  options: React
    .PropTypes
    .shape({color: React.PropTypes.object, measurements: React.PropTypes.object}),
  product: React
    .PropTypes
    .shape(product.shape)
};

module.exports = OrderProductCard;
