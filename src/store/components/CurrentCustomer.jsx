import React from 'react';
import { Link } from 'react-router';
import customer from './state/customer.js';

class CurrentCustomer extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  render() {

    let out = '';
    let route = '/login';
    let description = 'Entrar';

    if(this.props.customer && this.props.customer.id){
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


CurrentCustomer.propTypes = customer.shape;
module.exports = customer.connect(CurrentCustomer);
