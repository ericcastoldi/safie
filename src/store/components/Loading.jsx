import React from 'react';
import Popup from './Popup.jsx';
import LoadingRipple from './LoadingRipple.jsx';

class Loading extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Popup active={this.props.active}>
        <LoadingRipple />
      </Popup>
    );
  }
}

Loading.propTypes = {
  active: React.PropTypes.bool
};

module.exports = Loading;
