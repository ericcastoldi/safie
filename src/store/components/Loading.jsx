import React from 'react';
import Popup from './Popup.jsx';

class Loading extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Popup active={this.props.active}>
        <img src='/img/ripple.gif' width="170" />
      </Popup>
    );
  }
}

Loading.propTypes = {
  active: React.PropTypes.bool
};

module.exports = Loading;
