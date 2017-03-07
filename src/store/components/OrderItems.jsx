import React from 'react';
import OrderProductCard from './OrderProductCard.jsx';

class OrderItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const items = this.props.items;

    const renderedItems = Object.keys(items).map((itemKey) => {
      const orderItem = items[itemKey];
      return <OrderProductCard product={orderItem.product} options={orderItem.options} />;
    });

    return (
      <div className='six columns peca'>
        {renderedItems}
      </div>
    );
  }
}


OrderItems.propTypes = {
  items: React.PropTypes.object
};

module.exports = OrderItems;
