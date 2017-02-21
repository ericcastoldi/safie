import React from 'react';
import BagSummaryItemPrice from './BagSummaryItemPrice.jsx';
import { itemShape } from './state/bag.js';

class BagSummaryItemPriceList extends React.Component {

    constructor() {
      super();
    }

    render() {
      const items = this.props.items;

      const renderedItems = Object.keys(items).map((itemId, idx) => {
        const item = items[itemId];
        return (<BagSummaryItemPrice
                  key={idx}
                  price={item.product.price} />);
      });

      return <div>{renderedItems}</div>;
    }
}

BagSummaryItemPriceList.propTypes = {
  items: React.PropTypes.shape(itemShape)
};

module.exports = BagSummaryItemPriceList;
