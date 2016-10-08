var React = require('react');

var MeasurementsInfo = React.createClass({

  propTypes: {
    measurements: React.PropTypes.object
  },

  render: function () {

    var renderedMeasurements = this.renderMeasurements();

    return (
      <div className="produto-sacola-medidas">
        {renderedMeasurements}
      </div>
    );
  },


  renderMeasurements: function(){

    if(!this.props.measurements){
      return 'Peça sem especificação de medidas';
    }

    var measurementsMap = Object.keys(this.props.measurements).map(function(measurement, index){

      var measurementValue = this.props.measurements[measurement] ?
        this.props.measurements[measurement] + 'cm' :
        'Medida não especificada';

      return (
        <p key={index}>
          <span className="medida">{measurement}</span>
          <span className="tamanho">{measurementValue}</span>
        </p>
      );
    }.bind(this));

    return measurementsMap;
  }
});


module.exports = MeasurementsInfo;
