import React from 'react';
import OrderCard from './OrderCard.jsx';
import NothingToSeeHere from './NothingToSeeHere.jsx';
import {
  connect
} from 'react-redux';

class MyOrders extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const orders = this.props.orders;

    if(!orders || orders.length === 0){
      return (
        <div className='meus-pedidos'>
          <NothingToSeeHere text='Aqui ficam seus pedidos da Safie. Fique à vontade para escolher suas peças favoritas e fazer seu pedido!' />
        </div>
      );
    }

    const content = orders.map((order, i) => {
        return (
          <OrderCard key={i} order={order} />
        );
      });

    return (
      <div className='meus-pedidos'>
        {content}
      </div>
    );
  }
}

MyOrders.propTypes = {
  orders: React.PropTypes.arrayOf(React.PropTypes.shape({
    items: React.PropTypes.object,
    shipping: React.PropTypes.object,
    totalPrice: React.PropTypes.number,
    status: React.PropTypes.string
  }))
};

const mapStateToProps = (state) => {
  const orders = state.customer.current ? state.customer.current.orders : null;

  return {
    orders: orders
  };
};


module.exports = connect(mapStateToProps)(MyOrders);

