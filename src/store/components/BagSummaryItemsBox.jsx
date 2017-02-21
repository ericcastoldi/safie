import React from 'react';
import BagSummaryItemList from './BagSummaryItemList.jsx';
import BagSummaryItemPriceList from './BagSummaryItemPriceList.jsx';
import BagSummaryBox from './BagSummaryBox.jsx';
import { itemShape } from './state/bag.js';

class BagSummaryItemsBox extends React.Component {

    constructor() {
      super();
    }

    render() {

      const items = <BagSummaryItemList items={this.props.items} />;
      const prices = <BagSummaryItemPriceList items={this.props.items} />;

      return (
        <BagSummaryBox leftContent={items} rightContent={prices} />
      );
    }
}


BagSummaryItemsBox.propTypes = {
  items: React.PropTypes.shape(itemShape)
};

module.exports = BagSummaryItemsBox;
