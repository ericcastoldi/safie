import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DarkButton from './DarkButton.jsx';
import customerActions from './state/customerActions.js';



class CustomerForm extends React.Component {

  constructor(props) {
    super(props);

    this.fieldChanged = this.fieldChanged.bind(this);
    this.save = this.save.bind(this);
  }

  renderAdditionalInfo() {


    if(this.props.doneSaving) {
      return (<div className="mensagem sucesso">Cadastro realizado com sucesso!</div>);
    }

    if(this.props.saving) {
      return (<div className="mensagem info">Salvando...</div>);
    }


    if(this.props.error){
      return (<div className="mensagem erro">{this.props.error}</div>);
    }

    return null;
  }

  render() {

    if(!this.props.customer){
      return (<div>Carregando...</div>);
    }

    let additionalInfo = this.renderAdditionalInfo();

    return (
      <div className="form-cadastro">

        <h3>Cadastro</h3>

        {additionalInfo}

        <input
          type="text"
          placeholder="Nome"
          value={this.props.customer.name}
          disabled={this.props.saving}
          onChange={e => this.fieldChanged({ name: e.target.value })}
        />

        <input
          type="date"
          placeholder="Data de nascimento"
          value={this.props.customer.birthday}
          disabled={this.props.saving}
          onChange={e => this.fieldChanged({ birthday: e.target.value })}
        />


        <input
          type="tel"
          placeholder="Telefone"
          value={this.props.customer.phone}
          disabled={this.props.saving}
          onChange={e => this.fieldChanged({ phone: e.target.value })}
        />

        <input
          type="email"
          placeholder="E-mail"
          value={this.props.customer.email}
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
          placeholder="Confirme sua senha"
          disabled={this.props.saving}
          onChange={e => this.fieldChanged({ passwordConfirmation: e.target.value })}
        />

        <label>* Cadastrando-se você aceita nossos <a>termos</a> e <a>privacidade</a>.</label>

        <DarkButton
          click={this.save}
          label="Cadastrar"
          disabled={this.props.saving}
        />

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
  doneSaving: React.PropTypes.bool,
  error: React.PropTypes.string,
  customerChanged: React.PropTypes.func.isRequired,
  saveCustomer: React.PropTypes.func.isRequired
};


const mapCustomerFormStateToProps = (state) => {
  return {
    doneSaving: state.customer.doneSaving,
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
