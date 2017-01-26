import React from 'react';

class AddressCard extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div className='twelve columns'>
        <div className='address'>
          <p>{this.props.address.street}, {this.props.address.number}</p>
          <p>{this.props.address.obs}</p>
          <p>{this.props.address.district}</p>
          <p>{this.props.address.state}</p>
          <p>{this.props.address.city}</p>
          <p>{this.props.address.code}</p>

          <i className="fa fa-times-circle-o" aria-hidden="true"></i>

        </div>
      </div>
    );
  }
}


AddressCard.propTypes = {
  address: React.PropTypes.shape({
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
