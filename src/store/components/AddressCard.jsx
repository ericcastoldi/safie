import React from 'react';

class AddressCard extends React.Component {

  constructor(props){
    super(props);

    this.remove = this.remove.bind(this);
  }

  remove() {
    if(!this.props.removingAddress){
      this.props.removeAddress(this.props.address.addressId);
    }
  }

  render() {

    let cssClasses = ['linha-exterior'];
    if(this.props.address.active) {
      cssClasses.push('active');
    }


    return (
      <div className={cssClasses.join(' ')}>
        <div className='address inside-box'>

          <p>{this.props.address.street}, {this.props.address.number}</p>
          <p>{this.props.address.obs}</p>
          <p>{this.props.address.district}</p>
          <p>{this.props.address.state}</p>
          <p>{this.props.address.city}</p>
          <p>{this.props.address.code}</p>

          <i onClick={this.remove} className="fa fa-times-circle-o" aria-hidden="true"></i>

          <p className="alterar-end">Alterar endereço</p>

        </div>
      </div>
    );
  }
}


AddressCard.propTypes = {
  removingAddress: React.PropTypes.bool,
  removeAddress: React.PropTypes.func,
  address: React.PropTypes.shape({
    active: React.PropTypes.bool,
    addressId: React.PropTypes.string,
    street: React.PropTypes.string,
    number: React.PropTypes.string,
    obs: React.PropTypes.string,
    district: React.PropTypes.string,
    state: React.PropTypes.string,
    city: React.PropTypes.string,
    code: React.PropTypes.string
  })
};

module.exports = AddressCard;
