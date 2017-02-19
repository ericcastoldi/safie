import React from 'react';
import BagSummaryItemList from './BagSummaryItemList.jsx';
import BagSummaryItemPriceList from './BagSummaryItemPriceList.jsx';
import CheckoutBox from './CheckoutBox.jsx';
import BagSummaryBox from './BagSummaryBox.jsx';


class BagSummaryItemsBox extends React.Component {

    constructor() {
      super();
    }

    render() {

      const items = <BagSummaryItemList items={this.props.items} />;
      const prices = <BagSummaryItemPriceList items={this.props.items} />;

      return (
        <CheckoutBox>
          <BagSummaryBox leftContent={items} rightContent={prices} />
        </CheckoutBox>
      );
    }
}


BagSummaryItemsBox.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.object)
};

module.exports = BagSummaryItemsBox;
