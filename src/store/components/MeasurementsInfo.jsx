var React = require('react');

var MeasurementsInfo = React.createClass({

  propTypes: {
    measurements: React.PropTypes.object,
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

  render: function () {

    var renderedMeasurements = this.renderMeasurements();

    return (
      <div className="produto-sacola-medidas">
        {renderedMeasurements}
      </div>
    );
  },


  renderMeasurements: function(){

    if(!this.props.product.measurements){
      return 'Peça sem especificação de medidas';
    }

    var measurementsMap = Object.keys(this.props.product.measurements).map(function(measurement, index){

      var measurementValue = 'Medida não especificada';
      if(this.props.measurements && (measurement in this.props.measurements)){
        measurementValue = this.props.measurements[measurement] + 'cm';
      }

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
