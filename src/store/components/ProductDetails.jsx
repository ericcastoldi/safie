import React from 'react';
import ProductTitle from './ProductTitle.jsx';
import ProductInfo from './ProductInfo.jsx';
import ProductPrice from './ProductPrice.jsx';
import ProductColorPicker from './ProductColorPicker.jsx';
import MediumDarkButton from './MediumDarkButton.jsx';
import LightButton from './LightButton.jsx';
import SocialIcons from './SocialIcons.jsx';
import MeasurementsFormPopup from './MeasurementsFormPopup.jsx';
import product from './state/product.js';
import bag from './state/bag.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ProductDetails extends React.Component {

  constructor(props) {
    super(props);

    this.addToBag = this.addToBag.bind(this);
    this.setProductMeasurements = this.setProductMeasurements.bind(this);
    this.pickProductColor = this.pickProductColor.bind(this);
  }

  pickProductColor(color) {
    this.props.pickProductColor(color);
  }

  addToBag() {

    const color = this.props.selectedColor || this.props.product.defaultColor;

    const options = Object.assign({}, this.props.options, {
      color: color
    });

    const item = {
      product: this.props.product,
      options: options
    };

    this.props.addProductToBag(item);
  }

  setProductMeasurements(measurements) {
    this.props.setProductMeasurements(measurements);
    this.props.closeMeasurementsPopup();
  }

  render() {
    return (
      <div className="detalhes-produto">
        <div className="container">
          <div className="row">
            <div className="three columns">

              <ProductTitle name={this.props.product.name} />

              <ProductPrice price={this.props.product.price} />

              <ProductColorPicker
                colors={this.props.product.colors}
                pickProductColor={this.pickProductColor}
                defaultColor={this.props.product.defaultColor}
                selectedColor={this.props.selectedColor} />


            </div>
            <div className="four columns">
              <ProductInfo description={this.props.product.description} />
            </div>
            <div className="five columns">
              <div className="comprar-produto">
                <MediumDarkButton label="Medidas" click={this.props.openMeasurementsPopup} />

                <MeasurementsFormPopup
                  popupOpen={this.props.measurementsPopupOpen}
                  closePopup={this.props.closeMeasurementsPopup}
                  setMeasurements={this.props.setProductMeasurements}
                  measurements={this.props.product.measurements} />

                <LightButton click={this.addToBag} label="Comprar" />

                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  pickProductColor: React.PropTypes.func,
  measurementsPopupOpen: React.PropTypes.bool,
  openMeasurementsPopup: React.PropTypes.func,
  closeMeasurementsPopup: React.PropTypes.func,
  setProductMeasurements: React.PropTypes.func.isRequired,
  addProductToBag: React.PropTypes.func.isRequired,
  selectedColor: React.PropTypes.object,
  options: React.PropTypes.shape({
    color: React.PropTypes.object,
    measurements: React.PropTypes.object
  }),
  product: React.PropTypes.shape(product.shape)
};


const mapStateToProps = (state) => {

  const current = state.product.current;
  const color = current && current.options && current.options.color ? current.options.color : null;

  return {
    selectedColor: color,
    measurementsPopupOpen: state.product.measurementsPopupOpen
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    closeMeasurementsPopup: product.closeMeasurementsPopup,
    openMeasurementsPopup: product.openMeasurementsPopup,
    setProductMeasurements: product.setProductMeasurements,
    pickProductColor: product.pickProductColor,
    addProductToBag: bag.addProductToBag

  }, dispatch);
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
