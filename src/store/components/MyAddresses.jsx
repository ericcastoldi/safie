import React from 'react';
import AddressCard from './AddressCard.jsx';
import AddressCreation from './AddressCreation.jsx';
import NothingToSeeHere from './NothingToSeeHere.jsx';
import address from './state/address.js';

class MyAddresses extends React.Component {

  constructor(props) {
    super(props);

    this.openAddressPopup = this.openAddressPopup.bind(this);
    this.renderCards = this.renderCards.bind(this);
  }

  openAddressPopup() {
    this.props.openAddressPopup();
  }

  componentDidMount() {
    this.props.fetchAddresses();
  }


  render() {

    const cards = this.renderCards();

    return (
      <div className='my-address'>
        {cards}
        <AddressCreation />
      </div>
    );

  }


  renderCards() {

    const addresses = this.props.addresses;
    if (!addresses || addresses.length === 0) {
      return <NothingToSeeHere text="Nenhum endereço foi encontrado." />;
    }

    return addresses.map((addr, index) => {
      return (
        <AddressCard
          key={index}
          address={addr}
          removeAddress={this.props.removeAddress} />
      );
    });

  }
}

MyAddresses.propTypes = address.shape;

module.exports = address.connect(MyAddresses);
