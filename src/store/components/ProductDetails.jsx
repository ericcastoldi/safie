var React = require('react');
var ProductTitle = require('./ProductTitle.jsx');
var ProductInfo = require('./ProductInfo.jsx');
var ProductPrice = require('./ProductPrice.jsx');
var MeasuresButton = require('./MeasuresButton.jsx');
var ProductColorPicker = require('./ProductColorPicker.jsx');
var BuyButton = require('./BuyButton.jsx');
var SocialIcons = require('./SocialIcons.jsx');
var Popup = require('./Popup.jsx');
var SizeForm = require('./SizeForm.jsx');

var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;
var productActions = require('./state/productActions.js');


var ProductDetails = React.createClass({

  propTypes: {
    measuresPopupOpen: React.PropTypes.bool,
    openMeasuresPopup: React.PropTypes.func,
    closeMeasuresPopup: React.PropTypes.func,
    name: React.PropTypes.string.isRequired,
    price: React.PropTypes.string.isRequired,
    description: React.PropTypes.string,
    measures: React.PropTypes.object,
    colors: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        hex: React.PropTypes.string.isRequired
      })
    )
  },


  closeMeasuresPopup: function(){
    this.props.closeMeasuresPopup();
  },

  openMeasuresPopup: function(){
    this.props.openMeasuresPopup();
  },

  render: function () {

    return (
      <div className="detalhes-produto">
        <div className="container">
          <div className="row">
            <div className="three columns">
              <ProductTitle name={this.props.name} />
              <ProductPrice price={this.props.price} />
              <ProductColorPicker colors={this.props.colors} />
            </div>
            <div className="four columns">
              <ProductInfo description={this.props.description} />
            </div>
            <div className="five columns">
              <div className="comprar-produto">
                <MeasuresButton click={this.openMeasuresPopup} />
                <Popup active={this.props.measuresPopupOpen}>
                  <SizeForm dismiss={this.closeMeasuresPopup} measures={this.props.measures} />
                </Popup>
                <BuyButton label="Comprar" route="/bag" />
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
    measuresPopupOpen: state.product.measuresPopupOpen
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    closeMeasuresPopup: productActions.closeMeasuresPopup,
    openMeasuresPopup: productActions.openMeasuresPopup
  }, dispatch);
}
module.exports = connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
