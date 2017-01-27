import React from 'react';
import SimpleButton from './SimpleButton.jsx';

class DarkButton extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <SimpleButton
        className="dark-button"
        disabled={this.props.disabled}
        click={this.props.click}
        label={this.props.label} />
    );
  }
}

DarkButton.propTypes = {
  click: React.PropTypes.func,
  disabled: React.PropTypes.bool,
  label: React.PropTypes.string.isRequired
};

DarkButton.defaultProps = {
  disabled: false,
  label: 'OK'
};

module.exports = DarkButton;
