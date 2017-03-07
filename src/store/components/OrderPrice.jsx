import React from 'react';
import PrettyPrice from './PrettyPrice.jsx';

class OrderPrice extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p><strong>{this.props.caption}:</strong> <PrettyPrice price={this.props.price} /></p>
    );
  }
}


OrderPrice.propTypes = {
  caption: React.PropTypes.string,
  price: React.PropTypes.number
};

module.exports = OrderPrice;
