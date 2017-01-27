import React from 'react';
import MyBagItem from './MyBagItem.jsx';
import bag from './state/bag.js';

class MyBagItemList extends React.Component {

  constructor(props){
    super(props);
  }

  render() {

    if (!this.props.items) {
      return (
        <div className="no-items">Sua sacola está vazia.</div>
      );
    }

    const items = this.props.items;
    const keys = Object.keys(this.props.items);
    var splittedKeys = [];

    while (keys.length) {
      splittedKeys.push(keys.splice(0, 4));
    }

    var renderedItems = splittedKeys.map((rowItems, index) => {
      var itemRow = rowItems.map((itemId, rowIndex) => {

        const item = items[itemId];
        return (
          <div key={rowIndex} className="three columns">
            <MyBagItem itemId={itemId} product={item.product} />
          </div>
        );
      });

      return (
        <div key={index} className="row">{itemRow}</div>
      );
    });

    return (
      <div>
        {renderedItems}
      </div>
    );

  }
}

MyBagItemList.propTypes = {
  items: React.PropTypes.shape(bag.itemShape)
};

module.exports = MyBagItemList;
