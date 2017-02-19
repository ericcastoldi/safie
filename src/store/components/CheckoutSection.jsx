import React from 'react';
import CheckoutBox from './CheckoutBox.jsx';

class CheckoutSection extends React.Component {

    constructor() {
      super();
    }

    render() {
      return (
        <section>
          <h4>{this.props.title}</h4>
          <CheckoutBox>
            {this.props.children}
          </CheckoutBox>
        </section>
      );
    }

}

CheckoutSection.propTypes = {
  title: React.PropTypes.string,
  children: React.PropTypes.any
};

module.exports = CheckoutSection;
