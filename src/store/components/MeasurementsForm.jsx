import React from 'react';
import DarkButton from './DarkButton.jsx';
import LoadingRipple from './LoadingRipple.jsx';

class MeasurementsForm extends React.Component {

  constructor() {
    super();

    this.state = {};
    this.onChange = this.onChange.bind(this);
    this.setMeasurements = this.setMeasurements.bind(this);
    this.renderMeasurements = this.renderMeasurements.bind(this);
  }

  render() {

    if(!this.props.measurements){
      return (<LoadingRipple />);
    }

    var renderedMeasurements = this.renderMeasurements();
    return (
      <div className="form-medidas">
        <h2>Medidas</h2>
        {renderedMeasurements}
        <DarkButton click={this.setMeasurements} label="Definir Medidas" />
        <a target="blank" href="/img/medidas.jpg">
          CONSULTAR TABELA DE MEDIDAS
        </a>
      </div>
    );
  }

  renderMeasurements() {

    var measurementsMap = Object.keys(this.props.measurements).map(function (measurementId, index) {
      const measurement = this.props.measurements[measurementId];

      return (
        <input
          key={index}
          type="number"
          title={measurement.description}
          placeholder={measurement.name.toUpperCase()}
          onChange={event => this.onChange(event, measurementId)}
        />
      );
    }.bind(this));

    return measurementsMap;
  }

  onChange(event, measurementId) {
    let measurements = {};
    measurements[measurementId] = {
      value: event.target.value
    };

    if(this.state.measurements){
      measurements = Object.assign({}, this.state.measurements, measurements);
    }

    this.setState({measurements: measurements});
  }

  setMeasurements(){
    this.props.setProductMeasurements(this.state.measurements);
  }
}

MeasurementsForm.propTypes = {
  measurements: React.PropTypes.object,
  setProductMeasurements: React.PropTypes.func.isRequired
};

module.exports = MeasurementsForm;
