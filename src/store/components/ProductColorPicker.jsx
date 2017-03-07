import React from 'react';
import ProductColorLabel from './ProductColorLabel.jsx';

var ProductColorPicker = React.createClass({
  propTypes: {
    colors: React.PropTypes.object,
    pickProductColor: React.PropTypes.func,
    defaultColor: React.PropTypes.object,
    selectedColor: React.PropTypes.object
  },

  pickColor: function (color) {
    this.props.pickProductColor(color);
  },

  render: function () {
    if (!this.props.colors) {
      return null;
    }

    var colors = this.props.colors;

    var selectedColor = this.props.selectedColor ?
      this.props.selectedColor :
      this.props.defaultColor;

    var colorBoxes = Object.keys(colors).map(function (colorId, index) {

      var color = colors[colorId];
      let cssClasses = ['product-color'];
      if (color.hex === selectedColor.hex) {
        cssClasses.push('selected');
      }

      var divStyle = {
        backgroundColor: color.hex
      };


      const title = 'Trocar cor para ' + color.name;
      return (
        <div
          key={index}
          className={cssClasses.join(' ')}
          onClick={this.pickColor.bind(this, color)}>

          <div
            style={divStyle}
            title={title}
            className="product-color-box">
          </div>

        </div>
      );
    }.bind(this));


    return (
      <div className="product-colors">
        <ProductColorLabel color={selectedColor} />
        <div>
          {colorBoxes}
        </div>
      </div>
    );
  }
});

module.exports = ProductColorPicker;
