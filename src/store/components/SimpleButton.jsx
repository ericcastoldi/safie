import React from 'react';

class SimpleButton extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <button
        onClick={this.props.click}
        disabled={this.props.disabled}
        className={this.props.className}>

        {this.props.label}

      </button>
    );
  }
}

SimpleButton.propTypes = {
  click: React.PropTypes.func,
  disabled: React.PropTypes.bool,
  className: React.PropTypes.string,
  label: React.PropTypes.string.isRequired
};

SimpleButton.defaultProps = {
  disabled: false,
  label: 'OK'
};

module.exports = SimpleButton;
