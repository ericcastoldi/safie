var React = require('react');
var ProductTitle = require('./ProductTitle.jsx');
var ProductInfo = require('./ProductInfo.jsx');
var ProductPrice = require('./ProductPrice.jsx');
var ProductColorPicker = require('./ProductColorPicker.jsx');
var MediumDarkButton = require('./MediumDarkButton.jsx');
var LightButton = require('./LightButton.jsx');
var SocialIcons = require('./SocialIcons.jsx');
var Popup = require('./Popup.jsx');
var MeasurementsForm = require('./MeasurementsForm.jsx');
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;
var productActions = require('./state/productActions.js');
var bagActions = require('./state/bagActions.js');
import { browserHistory } from 'react-router'



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
