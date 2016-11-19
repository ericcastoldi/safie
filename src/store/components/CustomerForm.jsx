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

  renderAdditionalInfo() {
    if(this.props.saving) {
      return (<div>Salvando...</div>);
    }

    if(this.props.error){
      return (<div>Ocorreu um erro ao salvar... {this.props.error}</div>);
    }

    return (<span></span>);
  }

  render() {

    if(!this.props.customer){
      return (<div>Carregando...</div>);
    }

    let additionalInfo = this.renderAdditionalInfo();

    return (
      <div className="form-medidas">
        <h2>Cadastre-se</h2>
        <input
          type="text"
          placeholder="Nome"
          disabled={this.props.saving}
          onChange={e => this.fieldChanged({ name: e.target.value })}
        />

        <input
          type="date"
          placeholder="Data de nascimento"
          disabled={this.props.saving}
          onChange={e => this.fieldChanged({ birthday: e.target.value })}
        />

        <input
          type="email"
          placeholder="E-mail"
          disabled={this.props.saving}
          onChange={e => this.fieldChanged({ email: e.target.value })}
        />


        <input
          type="password"
          placeholder="Senha"
          disabled={this.props.saving}
          onChange={e => this.fieldChanged({ password: e.target.value })}
        />

        <input
          type="password"
          placeholder="Repita sua senha"
          disabled={this.props.saving}
          onChange={e => this.fieldChanged({ passwordConfirmation: e.target.value })}
        />

        <label>* Cadastrando-se você aceita nossos <a>termos</a> e <a>privacidade</a>.</label>

        {additionalInfo}

        <DarkButton click={this.save} label="Cadastrar" />

      </div>
    );
  }

  fieldChanged(change) {
      var updatedCustomer = Object.assign({}, this.props.customer, change);
      this.props.customerChanged(updatedCustomer);
  }

  save(){
    if(!this.props.saving){
      this.props.saveCustomer(this.props.customer);
    }
  }
}

CustomerForm.propTypes = {
  customer: React.PropTypes.shape({
    _id: React.PropTypes.string,
    name: React.PropTypes.string,
    email: React.PropTypes.string,
    password: React.PropTypes.string,
    passwordConfirmation: React.PropTypes.string,
    birthday: React.PropTypes.string,
    cpf: React.PropTypes.string,
    phone: React.PropTypes.string
  }).isRequired,
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
