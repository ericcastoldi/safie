import React from 'react';
import BagSummaryItem from './BagSummaryItem.jsx';

class BagSummaryItemList extends React.Component {

    constructor() {
      super();
    }

    render() {
      const items = this.props.items.map(item => {
        return <BagSummaryItem>{item.name}</BagSummaryItem>;
      });

      return <div>{items}</div>;
    }
}

BagSummaryItemList.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.object)
};

module.exports = BagSummaryItemList;

