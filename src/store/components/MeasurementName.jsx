import React from 'react';

class MeasurementName extends React.Component {

  constructor() {
    super();
  }

  render() {

    return (
      <span className="medida">{this.props.measurement.name}:</span>
    );
  }
}

MeasurementName.propTypes = {
  measurement: React.PropTypes.object
};

module.exports = MeasurementName;
