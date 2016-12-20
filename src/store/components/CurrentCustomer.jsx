/*eslint no-underscore-dangle: 1*/
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import customerActions from './state/customerActions.js';



class CurrentCustomer extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.props.fetchCurrentCustomer();
  }

  render() {

    let out = '';
    let route = '/login';
    let description = 'Entrar';

    if(this.props.customer && this.props.customer._id){
      out = ' | Sair';
      route = '/my-safie';
      description = this.props.customer.name;
    }

    return (
      <div className="usuario-atual">
        <Link to={route}>{description}</Link>
        <a href="#" onClick={this.logout}>{out}</a>
      </div>
    );
  }

  logout(){
    if(!this.props.loggingOut){
      this.props.logOut();
    }
  }
}


CurrentCustomer.propTypes = {
  customer: React.PropTypes.shape({
    _id: React.PropTypes.string,
    name: React.PropTypes.string
  }),
  logOut: React.PropTypes.func.isRequired,
  loggingOut: React.PropTypes.bool,
  fetchCurrentCustomer: React.PropTypes.func.isRequired
};


const mapCurrentCustomerStateToProps = (state) => {
  return {
    customer: state.customer.current,
    loggingOut: state.customer.loggingOut
  };
};


const mapCurrentCustomerDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logOut: customerActions.logOut,
    fetchCurrentCustomer: customerActions.fetchCurrentCustomer
  }, dispatch);
};

module.exports = connect(mapCurrentCustomerStateToProps, mapCurrentCustomerDispatchToProps)(CurrentCustomer);
