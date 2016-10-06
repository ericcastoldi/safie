var React = require('react');

var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;
var productActions = require('./state/productActions.js');

var ProductColorPicker = React.createClass({
  propTypes: {
    colors: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        hex: React.PropTypes.string.isRequired
      })
    ),
    pickProductColor: React.PropTypes.func.isRequired,
    selectedColor: React.PropTypes.number.isRequired
  },

  pickColor: function(colorIndex){
    this.props.pickProductColor(colorIndex);
  },

  render: function(){
    if(!this.props.colors){
      return (<div>Carregando cores...</div>);
    }


    var colorBoxes = this.props.colors.map(function(color, index){

      var divStyle = {
        backgroundColor: color.hex
      };

      return (
        <div onClick={this.pickColor(index)} className="product-color">
          <div
            key={index}
            style={divStyle}
            title={color.name}
            className="product-color-box">
          </div>
        </div>
      );
    }.bind(this));

    var selectedColorName = this.props.colors[this.props.selectedColor].name;

    return (
      <div className="product-colors">
        Cor: <b>{selectedColorName}</b>
        <div>
          {colorBoxes}
        </div>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    selectedColor: state.product.options.color
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    pickProductColor: productActions.pickProductColor
  }, dispatch);
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(ProductColorPicker);
