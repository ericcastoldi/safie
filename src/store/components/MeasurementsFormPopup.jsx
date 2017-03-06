import React from 'react';
import DismissablePopup from './DismissablePopup.jsx';
import MeasurementsForm from './MeasurementsForm.jsx';

class MeasurementsFormPopup extends React.Component {
  constructor(props) {
    super(props);

    this.setMeasurements = this.setMeasurements.bind(this);
  }


  setMeasurements(measurements) {
    this.props.setMeasurements(measurements);
    this.props.closePopup();
  }

  render() {
    return (
      <DismissablePopup
        dismiss={this.props.closePopup}
        active={this.props.popupOpen}>
        <MeasurementsForm
          setProductMeasurements={this.setMeasurements}
          measurements={this.props.measurements} />
      </DismissablePopup>
    );
  }
}

MeasurementsFormPopup.propTypes = {
  setMeasurements: React.PropTypes.func,
  closePopup: React.PropTypes.func,
  popupOpen: React.PropTypes.bool,
  measurements: React.PropTypes.object
};

module.exports = MeasurementsFormPopup;
