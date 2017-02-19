import React from 'react';
import BagSummaryItemPrice from './BagSummaryItemPrice.jsx';

class BagSummaryItemPriceList extends React.Component {

    constructor() {
      super();
    }

    render() {
      const items = this.props.items.map(item => {
        return <BagSummaryItemPrice price={item.price} />;
      });

      return <div>{items}</div>;
    }
}

BagSummaryItemPriceList.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.object)
};

module.exports = BagSummaryItemPriceList;
