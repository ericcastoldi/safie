import React from 'react';
import productShape from './propTypes/productShape.js';

class MeasurementsInfo extends React.Component {

  constructor() {
    super();
    this.renderMeasurements = this.renderMeasurements.bind(this);
  }

  render() {

    var renderedMeasurements = this.renderMeasurements();

    return (
      <div className="produto-sacola-medidas">
        {renderedMeasurements}
      </div>
    );
  }


  renderMeasurements(){

    if(!this.props.product.measurements){
      return 'Peça sem especificação de medidas';
    }

    var measurementsMap = Object.keys(this.props.product.measurements).map(function(measurementId, index){

      let productMeasurement = this.props.product.measurements[measurementId];
      let measurementValue = 'Medida não especificada';

      if(measurementId in this.props.measurements) {
        let measurement = this.props.measurements[measurementId];

        if(measurement.value){
          measurementValue = measurement.value + 'cm';
        }
      }

      return (
        <p key={index} title={productMeasurement.description}>
          <span className="medida">{productMeasurement.name}:</span>
          <span className="tamanho">{measurementValue}</span>
        </p>
      );
    }.bind(this));

    return measurementsMap;
  }

}

MeasurementsInfo.propTypes = {
  measurements: React.PropTypes.object,
  product: React.PropTypes.shape(productShape)
};

module.exports = MeasurementsInfo;
