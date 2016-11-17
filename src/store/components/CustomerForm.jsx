import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DarkButton from './DarkButton.jsx';
import customerActions from './state/customerActions.js';

class LoginForm extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="form-medidas">
        <form onSubmit={this.save}>
          <h2>Login</h2>

          <input
            type="email"
            placeholder="E-mail"
            onChange={e => this.fieldChanged({ email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.fieldChanged({ pwd: e.target.value })}
          />

          <DarkButton click={this.save} label="Entrar" />

        </form>
      </div>
    );
  }
}


class CustomerForm extends React.Component {

  constructor(props) {
    super(props);

    this.fieldChanged = this.fieldChanged.bind(this);
    this.save = this.save.bind(this);
  }

  render() {

    if(!this.props.customer){
      return (<div>Carregando...</div>);
    }

    return (
      <div className="form-medidas">
        <form onSubmit={this.save}>
          <h2>Cadastre-se</h2>
          <input
            type="text"
            placeholder="Nome"
            onChange={e => this.fieldChanged({ name: e.target.value })}
          />

          <input
            type="email"
            placeholder="E-mail"
            onChange={e => this.fieldChanged({ email: e.target.value })}
          />

          <input
            type="date"
            placeholder="Data de nascimento"
            onChange={e => this.fieldChanged({ birthday: e.target.value })}
          />

          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.fieldChanged({ pwd: e.target.value })}
          />

          <input
            type="password"
            placeholder="Nome"
            onChange={e => this.fieldChanged({ pwdConfirmation: e.target.value })}
          />

          <label>* Cadastrando-se você aceita nossos <a>termos</a> e <a>privacidade</a>.</label>

          <DarkButton click={this.save} label="Cadastrar" />

        </form>
      </div>
    );
  }

  fieldChanged(change) {
      var updatedCustomer = Object.assign({}, this.props, change);
      this.props.customerChanged(updatedCustomer);
  }

  save(){
    this.props.saveCustomer(this.props.customer);
  }
}

CustomerForm.propTypes = {
  customer: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    pwd: React.PropTypes.string.isRequired,
    pwdConfirmation: React.PropTypes.string.isRequired,
    birthday: React.PropTypes.string.isRequired
  }),
  saving: React.PropTypes.bool,
  error: React.PropTypes.object,
  customerChanged: React.PropTypes.func.isRequired,
  saveCustomer: React.PropTypes.func.isRequired
};


const mapCustomerFormStateToProps = (state) => {
    return {
      customer: state.customer.current,
      saving: state.customer.saving,
      error: state.customer.error
    };
};

const mapCustomerFormDispatchToProps = (dispatch) => {
  return bindActionCreators({
    saveCustomer: customerActions.saveCustomer,
    customerChanged: customerActions.customerChanged
  }, dispatch);
};

module.exports = connect(mapCustomerFormStateToProps, mapCustomerFormDispatchToProps)(CustomerForm);
