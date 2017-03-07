import React from 'react';
import AddressForm from './AddressForm.jsx';
import DismissablePopup from './DismissablePopup.jsx';
import address from './state/address.js';

class AddressCreation extends React.Component {

  constructor(props) {
    super(props);

    this.openAddressPopup = this.openAddressPopup.bind(this);
    this.closeAddressPopup = this.closeAddressPopup.bind(this);
  }

  openAddressPopup() {
    this.props.openAddressPopup();
  }

  closeAddressPopup() {
    this.props.closeAddressPopup();
    this.props.fetchAddresses();
  }

  render() {

    return (

      <div className='new-address'>

        <DismissablePopup
          dismiss={this.closeAddressPopup}
          active={this.props.addressPopupOpen}>

          <AddressForm
            address={this.props.foundAddress}
            searching={this.props.fetchingAddresses}
            saveAddress={this.props.saveAddress}
            savingAddress={this.props.savingAddress}
            foundAddress={this.props.foundAddress}
            searchAddress={this.props.searchAddress}
          />

        </DismissablePopup>

        <button onClick={this.openAddressPopup} className='new-address-button'>
          Adicionar Novo endereco
        </button>

      </div>
    );
  }
}


AddressCreation.propTypes = address.shape;

module.exports = address.connect(AddressCreation);
