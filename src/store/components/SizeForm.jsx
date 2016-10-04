var React = require('react');

var SizeForm = React.createClass({

  propTypes: {
    measures: React.PropTypes.object,
    dismiss: React.PropTypes.func.isRequired
  },

  dismissPopup: function(){
    this.props.dismiss();
  },

  render: function () {

    if(!this.props.measures){
      return (<div>Carregando medidas...</div>);
    }

    var renderedMeasures = this.renderMeasures();

    return (
      <div className="form-medidas">
        <div className="close-popup">
          <i onClick={this.dismissPopup} className="fa fa-close" aria-hidden="true"></i>
        </div>
        {renderedMeasures}
        <button className="buy-button" onClick={this.dismissPopup}>
          Definir Medidas
        </button>
      </div>
    );
  },

  renderMeasures: function () {
    var measuresMap = Object.keys(this.props.measures).map(function (measure, index) {
      return (<input type="text" key={index} placeholder={measure.toUpperCase()}/>);
    });

    return measuresMap;
  }
});

module.exports = SizeForm;
