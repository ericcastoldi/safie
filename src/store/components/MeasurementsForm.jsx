var React = require('react');
var DarkButton = require('./DarkButton.jsx');

var MeasurementsForm = React.createClass({

  propTypes: {
    measurements: React.PropTypes.object.isRequired,
    setProductMeasurements: React.PropTypes.func.isRequired
  },

  getInitialState: function() {
      return { measurements: this.props.measurements };
  },

  onChange: function (event, measurement) {
    var measurements = Object.assign({}, this.state.measurements);
    measurements[measurement] = event.target.value;

    this.setState({measurements: measurements});
  },

  setMeasurements: function(){
    this.props.setProductMeasurements(this.state.measurements);
  },

  render: function () {

    if(!this.props.measurements){
      return (<div>Carregando medidas...</div>);
    }

    var renderedMeasurements = this.renderMeasurements();
    return (
      <div className="form-medidas">
        {renderedMeasurements}
        <DarkButton click={this.setMeasurements} label="Definir Medidas" />
      </div>
    );
  },

  renderMeasurements: function () {

    var measurementsMap = Object.keys(this.props.measurements).map(function (measurement, index) {
      return (
        <input
          type="text"
          key={index}
          placeholder={measurement.toUpperCase()}
          onChange={event => this.onChange(event, measurement)}
        />
      );
    }.bind(this));

    return measurementsMap;
  }
});

module.exports = MeasurementsForm;
