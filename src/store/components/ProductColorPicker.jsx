import React from 'react';
import Loading from './Loading.jsx';
import product from './state/product.js';

var ProductColorPicker = React.createClass({
  propTypes: {
    colors: React.PropTypes.object,
    pickProductColor: React.PropTypes.func,
    defaultColor: React.PropTypes.string,
    selectedColor: React.PropTypes.string
  },

  pickColor: function(color){
    this.props.pickProductColor(color);
  },

  render: function(){
    if(!this.props.colors){
      return (<Loading active={true} />);
    }

    var colors = this.props.colors;

    var selectedColorId = this.props.selectedColor ?
                    this.props.selectedColor :
                    this.props.defaultColor;

    var selectedColor = colors[selectedColorId];

    var colorBoxes = Object.keys(colors).map(function(colorId, index){

      var color = colors[colorId];
      let cssClasses = ['product-color'];
      if(colorId === selectedColorId) {
        cssClasses.push('selected');
      }

      var divStyle = {
        backgroundColor: color.hex
      };

      return (
        <div
          key={index}
          className={cssClasses.join(' ')}
          onClick={this.pickColor.bind(this, colorId)}>

          <div

            style={divStyle}
            title={color.name}
            className="product-color-box">
          </div>

        </div>
      );
    }.bind(this));


    return (
      <div className="product-colors">
        Cor: <b>{selectedColor.name}</b>
        <div>
          {colorBoxes}
        </div>
      </div>
    );
  }
});

module.exports = product.connect(ProductColorPicker);
