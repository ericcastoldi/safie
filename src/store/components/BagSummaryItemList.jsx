import React from 'react';
import BagSummaryItem from './BagSummaryItem.jsx';
import { itemShape } from './state/bag.js';

class BagSummaryItemList extends React.Component {

    constructor() {
      super();
    }

    render() {
      const items = this.props.items;

      const renderedItems = Object.keys(items).map((itemId, idx) => {
        const item = items[itemId];

        return (
          <BagSummaryItem key={idx}>
            {item.product.name}
          </BagSummaryItem>
        );
      });

      return <div>{renderedItems}</div>;
    }
}

BagSummaryItemList.propTypes = {
  items: React.PropTypes.shape(itemShape)
};

module.exports = BagSummaryItemList;

