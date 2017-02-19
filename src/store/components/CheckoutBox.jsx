import React from 'react';

class CheckoutBox extends React.Component {

    constructor() {
      super();
    }

    render() {
      return (
        <div className="box">
          {this.props.children}
        </div>
      );
    }

}

CheckoutBox.propTypes = {
  children: React.PropTypes.any
};

module.exports = CheckoutBox;
