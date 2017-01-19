import React from 'react';
import ProductTitle from './ProductTitle.jsx';
import ProductInfo from './ProductInfo.jsx';
import ProductPrice from './ProductPrice.jsx';
import ProductColorPicker from './ProductColorPicker.jsx';
import MediumDarkButton from './MediumDarkButton.jsx';
import LightButton from './LightButton.jsx';
import SocialIcons from './SocialIcons.jsx';
import DismissablePopup from './DismissablePopup.jsx';
import MeasurementsForm from './MeasurementsForm.jsx';
import product from './state/product.js';
import bag from './state/bag.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

var ProductDetails = React.createClass({

  propTypes: {
    measurementsPopupOpen: React.PropTypes.bool,
    openMeasurementsPopup: React.PropTypes.func,
    closeMeasurementsPopup: React.PropTypes.func,
    setProductMeasurements: React.PropTypes.func.isRequired,
    addProductToBag: React.PropTypes.func.isRequired,
    options: React.PropTypes.shape({
      color: React.PropTypes.object,
      measurements: React.PropTypes.object
    }),
    product: React.PropTypes.shape(product.shape)
  },

  addToBag: function(){
    const item = {
      product: this.props.product,
      options: this.props.options
    };

    this.props.addProductToBag(item);
  },

  setProductMeasurements: function(measurements){
    this.props.setProductMeasurements(measurements);
    this.props.closeMeasurementsPopup();
  },

  render: function () {
    return (
      <div className="detalhes-produto">
        <div className="container">
          <div className="row">
            <div className="three columns">
              <ProductTitle name={this.props.product.name} />
              <ProductPrice price={this.props.product.price} />
              <ProductColorPicker
                defaultColor={this.props.product.defaultColor}
                colors={this.props.product.colors} />
            </div>
            <div className="four columns">
              <ProductInfo description={this.props.product.description} />
            </div>
            <div className="five columns">
              <div className="comprar-produto">
                <MediumDarkButton label="Medidas" click={this.props.openMeasurementsPopup} />
                <DismissablePopup
                  dismiss={this.props.closeMeasurementsPopup}
                  active={this.props.measurementsPopupOpen}>
                  <MeasurementsForm
                    setProductMeasurements={this.setProductMeasurements}
                    measurements={this.props.product.measurements} />
                </DismissablePopup>
                <LightButton click={this.addToBag} label="Comprar" />
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    measurementsPopupOpen: state.product.measurementsPopupOpen
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    closeMeasurementsPopup: product.closeMeasurementsPopup,
    openMeasurementsPopup: product.openMeasurementsPopup,
    setProductMeasurements: product.setProductMeasurements,
    addProductToBag: bag.addProductToBag
  }, dispatch);
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
