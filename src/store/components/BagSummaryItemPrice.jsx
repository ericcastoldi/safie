import React from 'react';
import PrettyPrice from './PrettyPrice.jsx';
import BagSummaryItem from './BagSummaryItem.jsx';


class BagSummaryItemPrice extends React.Component {

    constructor() {
      super();
    }

    render() {
      return (
        <BagSummaryItem>
          <PrettyPrice price={this.props.price} />
        </BagSummaryItem>
      );
    }

}

BagSummaryItemPrice.propTypes = {
  price: React.PropTypes.number
};

module.exports = BagSummaryItemPrice;
