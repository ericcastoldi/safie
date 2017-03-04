import React from 'react';
import AddressCard from './AddressCard.jsx';
import NothingToSeeHere from './NothingToSeeHere.jsx';
import address from './state/address.js';
import bag from './state/bag.js';

import {
  connect
} from 'react-redux';
import {
  bindActionCreators
} from 'redux';


class AddressesBoard extends React.Component {

  constructor() {
    super();

    this.renderCards = this.renderCards.bind(this);
    this.selectAddress = this.selectAddress.bind(this);
  }

  componentDidMount() {
    this.props.fetchAddresses();
  }

  selectAddress(addr) {
    this.props.selectAddress(addr);
  }

  render() {

    const addresses = this.props.addresses;
    if (!addresses || addresses.length === 0) {
      return (
        <NothingToSeeHere text="Nenhum endereço encontrado. Cadastre o endereço em que você deseja receber sua encomenda da Safie!" />
      );
    }


    const renderedAddresses = this.renderCards();

    return (
      <div className='my-address'>
        {renderedAddresses}
      </div>
    );

  }



  renderCards() {

    let addresses = this.props.addresses;


    if (addresses.length === 1) {

      return (
        <AddressCard
          address={addresses[0]}
          selectAddress={this.selectAddress}
          removeAddress={this.props.removeAddress} />
      );
    }

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
              selectAddress={this.selectAddress}
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


AddressesBoard.propTypes = {
  removeAddress: React.PropTypes.func,
  selectAddress: React.PropTypes.func,
  addresses: React.PropTypes.arrayOf(address.addressShape),
  fetchAddresses: React.PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    addresses: state.address.addresses
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeAddress: address.removeAddress,
    fetchAddresses: address.fetchAddresses,
    selectAddress: bag.selectAddress
  }, dispatch);
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(AddressesBoard);
