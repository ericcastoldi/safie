var React = require('react');
var Link = require('react-router').Link;
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


var ProductDetails = React.createClass({

  propTypes: {
    measurementsPopupOpen: React.PropTypes.bool,
    openMeasurementsPopup: React.PropTypes.func,
    closeMeasurementsPopup: React.PropTypes.func,
    setProductMeasurements: React.PropTypes.func.isRequired,
    name: React.PropTypes.string.isRequired,
    price: React.PropTypes.string.isRequired,
    description: React.PropTypes.string,
    measurements: React.PropTypes.object,
    colors: React.PropTypes.object.isRequired,
    defaultColor: React.PropTypes.string.isRequired
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
              <ProductTitle name={this.props.name} />
              <ProductPrice price={this.props.price} />
              <ProductColorPicker
                defaultColor={this.props.defaultColor}
                colors={this.props.colors} />
            </div>
            <div className="four columns">
              <ProductInfo description={this.props.description} />
            </div>
            <div className="five columns">
              <div className="comprar-produto">
                <MediumDarkButton label="Medidas" click={this.props.openMeasurementsPopup} />
                <Popup
                  dismiss={this.props.closeMeasurementsPopup}
                  active={this.props.measurementsPopupOpen}>
                  <MeasurementsForm
                    setProductMeasurements={this.setProductMeasurements}
                    measurements={this.props.measurements} />
                </Popup>
                <Link to="/bag">
                  <LightButton label="Comprar" route="/bag" />
                </Link>
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
    setProductMeasurements: productActions.setProductMeasurements
  }, dispatch);
}
module.exports = connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
