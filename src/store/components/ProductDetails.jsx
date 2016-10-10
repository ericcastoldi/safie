import React from 'react';
import ProductTitle from './ProductTitle.jsx';
import ProductInfo from './ProductInfo.jsx';
import ProductPrice from './ProductPrice.jsx';
import ProductColorPicker from './ProductColorPicker.jsx';
import MediumDarkButton from './MediumDarkButton.jsx';
import LightButton from './LightButton.jsx';
import SocialIcons from './SocialIcons.jsx';
import Popup from './Popup.jsx';
import MeasurementsForm from './MeasurementsForm.jsx';
import productActions from './state/productActions.js';
import bagActions from './state/bagActions.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';




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
  },

  addToBag: function(){
    this.props.addProductToBag(this.props.product, this.props.options);
    browserHistory.push('/bag');
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
                <Popup
                  dismiss={this.props.closeMeasurementsPopup}
                  active={this.props.measurementsPopupOpen}>
                  <MeasurementsForm
                    setProductMeasurements={this.setProductMeasurements}
                    measurements={this.props.product.measurements} />
                </Popup>
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
    closeMeasurementsPopup: productActions.closeMeasurementsPopup,
    openMeasurementsPopup: productActions.openMeasurementsPopup,
    setProductMeasurements: productActions.setProductMeasurements,
    addProductToBag: bagActions.addProductToBag
  }, dispatch);
}
module.exports = connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
