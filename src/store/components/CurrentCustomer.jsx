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
      return (<Link to="/my-safie">{this.props.customer.name}</Link> - <a onClick={this.logout}>Sair</a>);
    }

    return (<Link to="/login">Entrar</Link>);
  }

  render() {
    var link = this.renderLink();

    return (<div className="usuario-atual">{link}</div>);
  }

  login(){
    if(!this.props.loggingOut){
      this.props.logOut();
    }
  }
}


CurrentCustomer.propTypes = {
  customer: React.PropTypes.shape({
    id: React.PropTypes.string,
    name: React.PropTypes.string
  }),
  logOut: React.PropTypes.func.isRequired,
  loggingOut: React.PropTypes.bool
};


const mapCurrentCustomerStateToProps = (state) => {
  return {
    customer: state.customer.current,
    loggingOut: state.customer.loggingOut
  };
};


const mapCurrentCustomerDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logOut: customerActions.logOut
  }, dispatch);
};

module.exports = connect(mapCurrentCustomerStateToProps, mapCurrentCustomerDispatchToProps)(CurrentCustomer);
