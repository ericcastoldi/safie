import React from 'react';

class BagSummaryItem extends React.Component {

    constructor() {
      super();
    }

    render() {
      return (
        <p>{this.props.children}</p>
      );
    }

}

BagSummaryItem.propTypes = {
  children: React.PropTypes.any
};

module.exports = BagSummaryItem;
