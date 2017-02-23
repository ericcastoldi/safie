import React from 'react';
import AddressCard from './AddressCard.jsx';
import AddressCreation from './AddressCreation.jsx';
import NothingToSeeHere from './NothingToSeeHere.jsx';
import address from './state/address.js';


class AddressesBoard extends React.Component {

  constructor() {
    super();

    this.renderCards = this.renderCards.bind(this);
  }

  render() {

    const addresses = this.props.addresses;
    if (!addresses || addresses.length === 0) {
      return (
        <NothingToSeeHere text="Nenhum endereço encontrado. Cadastre o endereço em que você deseja receber sua encomenda da Safie!" />
      );
    }

    if (addresses.length === 1) {

      return (
        <AddressCard
          address={addresses[0]}
          removeAddress={this.props.removeAddress} />
      );
    }

    const renderedAddresses = this.renderCards();

    return (
      <div className='my-address'>
        {renderedAddresses}
        <AddressCreation />
      </div>
    );

  }



  renderCards() {

    let addresses = this.props.addresses;
    let splittedAddresses = [];

    while (addresses.length) {
      splittedAddresses.push(addresses.splice(0, 2));
    }

    const renderedProducts = splittedAddresses.map((rowAddresses, index) => {

      var addressRowContent = rowAddresses.map((addr, rowIndex) => {
        return (
          <div key={rowIndex} className="six columns">
            <AddressCard
              address={addr}
              removeAddress={this.props.removeAddress} />
          </div>
        );
      });

      return (
        <div key={index} className="row">{addressRowContent}</div>
      );

    });

    return renderedProducts;
  }

}


AddressesBoard.propTypes = address.shape;

module.exports = address.connect(AddressesBoard);
