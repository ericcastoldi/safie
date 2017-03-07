import React from 'react';
import OrderItems from './OrderItems.jsx';
import OrderPrice from './OrderPrice.jsx';
import OrderStatus from './OrderStatus.jsx';


class OrderCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const order = this.props.order;

    return (
      <div className='row'>
        <OrderItems items={order.items} />
        <div className='six columns peca'>
          <div className='row'>
            <div className='six columns obs'>
              <OrderPrice caption="Frete" price={order.shipping.price} />
            </div>
            <div className='six columns obs'>
              <OrderStatus status={order.status} />
              <OrderPrice caption="Valor" price={order.totalPrice} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

OrderCard.propTypes = {
  order: React.PropTypes.shape({
    items: React.PropTypes.object,
    shipping: React.PropTypes.object,
    totalPrice: React.PropTypes.number,
    status: React.PropTypes.string
  })
};

module.exports = OrderCard;
