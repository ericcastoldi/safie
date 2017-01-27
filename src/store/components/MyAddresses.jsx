import React from 'react';
import AddressForm from './AddressForm.jsx';
import AddressCard from './AddressCard.jsx';
import DismissablePopup from './DismissablePopup.jsx';
import address from './state/address.js';

class MyAddresses extends React.Component {
  constructor(props){
    super(props);
    this.openAddressPopup = this.openAddressPopup.bind(this);
  }

  openAddressPopup(){
    this.props.openAddressPopup();
  }

  componentDidMount() {
    this.props.fetchAddresses();
  }

  render() {

    const noAddresses = (
      <div className="no-items">Nenhum endereço encontrado.</div>
    );

    const newAddressButton = (
      <div className='row'>
        <div className='twelve columns'>
          <DismissablePopup
            dismiss={this.props.closeAddressPopup}
            active={this.props.addressPopupOpen}>
            <AddressForm
              saveAddress={this.props.saveAddress}
              savingAddress={this.props.savingAddress}
            />
          </DismissablePopup>
          <div className='new-address'>
            <button onClick={this.openAddressPopup} className='new-address-button'>
              <i className="fa fa-plus-square-o" aria-hidden="true"></i>
              Adicionar Novo endereco
            </button>
          </div>
        </div>
      </div>
    );

    const addresses = this.props.addresses;
    if(!addresses || addresses.length === 0){
      return (
        <div className='my-address'>
          {noAddresses}
          {newAddressButton}
        </div>
      );
    }

    const renderedAddresses = addresses.map((addr, index) => {
        return (
          <AddressCard
            key={index}
            address={addr}
            removeAddress={this.props.removeAddress} />
        );
    });

    return (
      <div className='my-address'>
        {renderedAddresses}
        {newAddressButton}
      </div>
    );

  }
}

MyAddresses.propTypes = address.shape;

module.exports = address.connect(MyAddresses);
