var React = require('react');

var ProductColorPicker = React.createClass({
  propTypes: {
    colors: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        hex: React.PropTypes.string.isRequired
      })
    )
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
        <div className="product-color">
          <div
            key={index}
            style={divStyle}
            title={color.name}
            className="product-color-box">
          </div>
        </div>
      );
    });

    return (
      <div className="product-colors">
        Cor: <b>{this.props.colors[0].name}</b>
        <div>
          {colorBoxes}
        </div>
      </div>
    );
  }
});

module.exports = ProductColorPicker;
