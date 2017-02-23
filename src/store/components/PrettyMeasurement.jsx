import React from 'react';
import EmptyMeasurement from './EmptyMeasurement.jsx';


class PrettyMeasurement extends React.Component {

  constructor() {
    super();
  }

  render() {

    const measurement = this.props.measurement;
    if (measurement && measurement.value) {
      const prettyMeasurement = measurement.value + 'cm';
      return <span className="tamanho">{prettyMeasurement}</span>;
    }

    return <EmptyMeasurement />;

  }
}

PrettyMeasurement.propTypes = {
  measurement: React.PropTypes.object
};

module.exports = PrettyMeasurement;

