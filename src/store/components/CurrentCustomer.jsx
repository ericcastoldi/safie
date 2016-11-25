import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import customerActions from './state/customerActions.js';



class CurrentCustomer extends React.Component {
  constructor(props) {
    super(props);
  }

  renderLink() {
    if(this.props.customer && this.props.customer.id){
      return (<Link to="/my-safie">{this.props.customer.name}</Link>);
    }

    return (<Link to="/login">Entrar</Link>);
  }

  render() {
    var link = this.renderLink();

    return (<div className="usuario-atual">{link}</div>);
  }
}


CurrentCustomer.propTypes = {
  customer: React.PropTypes.shape({
    id: React.PropTypes.string,
    name: React.PropTypes.string
  })
};


const mapCustomerFormStateToProps = (state) => {
  return {
    customer: state.customer.current
  };
};

module.exports = connect(mapCustomerFormStateToProps)(CurrentCustomer);
