import React from 'react';

class OrderStatus extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span><strong>Pedido:</strong> <span className='pedido-status'>{this.props.status}</span></span>
    );
  }
}

OrderStatus.propTypes = {
  status: React.PropTypes.bool
};


module.exports = OrderStatus;
