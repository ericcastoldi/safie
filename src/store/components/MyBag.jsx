import React from 'react';
import MyBagItemList from './MyBagItemList.jsx';
import PrettyPrice from './PrettyPrice.jsx';
import bag from './state/bag.js';

class MyBag extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className='meu-carrinho'>
        <div className='row'>
          <div className='twelve columns'>
            <MyBagItemList items={this.props.items} />
            <div className="pedido-info">
              <p><strong>Total: </strong><PrettyPrice price={this.props.total} /></p>
            </div>
            <div className="limpar">
            </div>
            <div className='new-address'>
              <button onClick={this.props.checkout} className='new-address-button'>Finalizar Pedido</button>
            </div>
          </div>
        </div>
      </div>
    );

  }

}

MyBag.propTypes = {
  total: React.PropTypes.number,
  checkout: React.PropTypes.func,
  items: React.PropTypes.shape(bag.itemShape)
};

module.exports = bag.connect(MyBag);
