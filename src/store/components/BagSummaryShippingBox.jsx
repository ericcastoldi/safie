import React from 'react';
import BagSummaryItem from './BagSummaryItem.jsx';
import BagSummaryItemPrice from './BagSummaryItemPrice.jsx';
import BagSummaryBox from './BagSummaryBox.jsx';

class BagSummaryShippingBox extends React.Component {

  constructor() {
    super();
  }

  render() {
    if (!this.props.shippingPrice) {
      return null;
    }

    const shippingLabel = <BagSummaryItem>Frete</BagSummaryItem>;
    const shippingPrice = <BagSummaryItemPrice price={this.props.shippingPrice} />;

    return <BagSummaryBox leftContent={shippingLabel} rightContent={shippingPrice} />;
  }

}

BagSummaryShippingBox.propTypes = {
  shippingPrice: React.PropTypes.number
};

module.exports = BagSummaryShippingBox;
