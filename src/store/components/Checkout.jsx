/*eslint no-undef: 0 new-cap: 0*/

import React from 'react';
import { Link } from 'react-router';
import CheckoutSection from './CheckoutSection.jsx';
import BagSummaryItemsBox from './BagSummaryItemsBox.jsx';
import BagSummaryShippingBox from './BagSummaryShippingBox.jsx';
import BagSummaryTotalBox from './BagSummaryTotalBox.jsx';
import CheckoutBox from './CheckoutBox.jsx';
import AddressCreation from './AddressCreation.jsx';
import AddressesBoard from './AddressesBoard.jsx';
import bag from './state/bag.js';

class Checkout extends React.Component {

  constructor() {
    super();

    this.openLightbox = this.openLightbox.bind(this);
  }

  openLightbox() {
    bag.pay();
  }


  render() {


    return (
      <div className="conteudo-c">
        <div className="conteudo-checkout">
          <div className="container">
            <div className="row">
              <div className="six columns">
                <CheckoutSection title="Resumo do Pedido">
                  <BagSummaryItemsBox items={this.props.items} />
                  <BagSummaryShippingBox shippingPrice={this.props.shippingPrice} />
                  <BagSummaryTotalBox total={this.props.total} />
                </CheckoutSection>
              </div>
              <div className="six columns">
                <CheckoutSection title="Endereço da entrega">
                  <AddressesBoard />
                  <AddressCreation />
                </CheckoutSection>
              </div>
            </div>
            <div className="row">
              <div className="twelve columns">
                <CheckoutBox>
                  <p> Você será redirecionado ao PagSeguro</p>

                  <button onClick={this.openLightbox} className="button gray-button">Realizar pagamento</button>
                </CheckoutBox>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



Checkout.propTypes = {
  items: React.PropTypes.shape(bag.itemShape),
  shippingPrice: React.PropTypes.number,
  total: React.PropTypes.number
};

module.exports = bag.connect(Checkout);

