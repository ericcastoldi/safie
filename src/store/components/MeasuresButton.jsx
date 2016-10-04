var React = require('react');

var MeasuresButton = React.createClass({

  propTypes: {
    click: React.PropTypes.func
  },


  render: function(){
    return (
      <button onClick={this.props.click} className="measures-button">Medidas</button>
    );
  }
});

module.exports = MeasuresButton;
