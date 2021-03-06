import React from 'react';
import ProductPicture from './ProductPicture.jsx';
import ProductInfoSmall from './ProductInfoSmall.jsx';
import MeasurementsInfo from './MeasurementsInfo.jsx';
import MeasurementsFormPopup from './MeasurementsFormPopup.jsx';
import ProductColorPicker from './ProductColorPicker.jsx';
import product from './state/product.js';

class ProductCardHorizontal extends React.Component {


  constructor(props) {
    super(props);

    this.pickProductColor = this.pickProductColor.bind(this);
    this.changeMeasurements = this.changeMeasurements.bind(this);
  }

  pickProductColor(color) {
    const change = {
      color: color
    };

    this.props.patch(change);
  }

  changeMeasurements(measurements) {
    const change = {
      measurements: measurements
    };

    this.props.patch(change);
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
          description={prod.description}
          collection={prod.collection} />

        <MeasurementsInfo
          product={prod}
          measurements={options.measurements} />


        <MeasurementsFormPopup
          popupOpen={this.props.measurementsPopupOpen}
          closePopup={this.props.closeMeasurementsPopup}
          setMeasurements={this.changeMeasurements}
          measurements={prod.measurements} />

        <div className="alterar-medidas">
          <a onClick={this.props.openMeasurementsPopup}>
            Alterar medidas
          </a> <i className="fa fa-pencil" aria-hidden="true"></i>
        </div>

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
  product: React.PropTypes.shape(product.shape).isRequired,
  patch: React.PropTypes.func,
  measurementsPopupOpen: React.PropTypes.bool,
  openMeasurementsPopup: React.PropTypes.func,
  closeMeasurementsPopup: React.PropTypes.func
};


module.exports = ProductCardHorizontal;
