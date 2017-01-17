import React from 'react';
import Popup from './Popup.jsx';

class DismissablePopup extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Popup active={this.props.active}>
        <div>
          <div className="close-popup">
            <i onClick={this.props.dismiss} className="fa fa-close" aria-hidden="true"></i>
          </div>
          {this.props.children}
        </div>
      </Popup>
    );
  }
}

DismissablePopup.propTypes = {
  active: React.PropTypes.bool,
  dismiss: React.PropTypes.func,
  children: React.PropTypes.node
};

module.exports = DismissablePopup;
