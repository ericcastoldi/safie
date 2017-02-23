import React from 'react';
import PrettyMeasurement from './PrettyMeasurement.jsx';
import EmptyMeasurement from './EmptyMeasurement.jsx';
import MeasurementName from './MeasurementName.jsx';
import product from './state/product.js';

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


  renderMeasurements() {

    if (!this.props.product.measurements) {
      return 'Peça sem especificação de medidas';
    }

    const measurements = this.props.measurements;
    var measurementsMap = Object.keys(this.props.product.measurements).map(function (measurementId, index) {

      let productMeasurement = this.props.product.measurements[measurementId];

      let measurementValue = (measurements && measurementId in measurements)
        ? <PrettyMeasurement measurement={measurements[measurementId]} />
        : <EmptyMeasurement />;

      return (
        <p key={index} title={productMeasurement.description}>
          <MeasurementName measurement={productMeasurement} />
          {measurementValue}
        </p>
      );
    }.bind(this));

    return measurementsMap;
  }

}

MeasurementsInfo.propTypes = {
  measurements: React.PropTypes.object,
  product: React.PropTypes.shape(product.shape)
};

module.exports = MeasurementsInfo;
