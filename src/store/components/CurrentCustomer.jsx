import React from 'react';
import { Link } from 'react-router';
import customer from './state/customer.js';

class CurrentCustomer extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  render() {

    if(this.props.customer && this.props.customer.id){
      return (
        <div className="usuario-atual">
          <Link to='/my-safie'>
            Olá, {this.props.customer.name}!
          </Link> | <a href="#" onClick={this.logout}>Sair</a>
        </div>
      );
    }

    return (
      <div className="usuario-atual">
        <span>
          <Link to='/login'>Entrar</Link>
        </span>
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
