import React from 'react';
import BagSummaryItem from './BagSummaryItem.jsx';
import BagSummaryItemPrice from './BagSummaryItemPrice.jsx';
import BagSummaryBox from './BagSummaryBox.jsx';


class BagSummaryTotalBox extends React.Component {

    constructor() {
      super();
    }

    render() {
      const totalLabel = <BagSummaryItem><strong>Total a pagar</strong></BagSummaryItem>;
      const totalPrice = <strong><BagSummaryItemPrice price={this.props.total} /></strong>;

      return <BagSummaryBox leftContent={totalLabel} rightContent={totalPrice} />;
    }

}


BagSummaryTotalBox.propTypes = {
  total: React.PropTypes.number
};

module.exports = BagSummaryTotalBox;
