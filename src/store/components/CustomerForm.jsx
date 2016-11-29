import React from 'react';
import customerFactory from '../model/customerFactory.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DarkButton from './DarkButton.jsx';
import customerActions from './state/customerActions.js';



class CustomerForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = props.customer && props.customer.id ?
      Object.assign({}, props.customer) :
      Object.assign({}, customerFactory.model);

    this.save = this.save.bind(this);
    this.fieldChanged = this.fieldChanged.bind(this);
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

    let additionalInfo = this.renderAdditionalInfo();

    return (
      <div className="form-cadastro">

        <h3>Cadastro</h3>

        {additionalInfo}

        <input
          type="text"
          placeholder="Nome"
          value={this.state.name}
          disabled={this.props.saving}
          onChange={e => this.fieldChanged({ name: e.target.value })}
        />

        <input
          type="date"
          placeholder="Data de nascimento"
          value={this.state.birthday}
          disabled={this.props.saving}
          onChange={e => this.fieldChanged({ birthday: e.target.value })}
        />


        <input
          type="tel"
          placeholder="Telefone"
          value={this.state.phone}
          disabled={this.props.saving}
          onChange={e => this.fieldChanged({ phone: e.target.value })}
        />

        <input
          type="email"
          placeholder="E-mail"
          value={this.state.email}
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
          label="Cadastrar"
          click={this.save}
          disabled={this.props.saving}
        />

      </div>
    );
  }

  fieldChanged(change) {
      this.setState(change);
  }

  save(){
    if(!this.props.saving){
      this.props.saveCustomer(this.state);
    }
  }
}

CustomerForm.propTypes = {
  customer: React.PropTypes.shape({
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    email: React.PropTypes.string,
    password: React.PropTypes.string,
    passwordConfirmation: React.PropTypes.string,
    birthday: React.PropTypes.string,
    phone: React.PropTypes.string
  }).isRequired,
  saving: React.PropTypes.bool,
  doneSaving: React.PropTypes.bool,
  error: React.PropTypes.string,
//  customerChanged: React.PropTypes.func.isRequired,
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
    saveCustomer: customerActions.saveCustomer
//    customerChanged: customerActions.customerChanged
  }, dispatch);
};

module.exports = connect(mapCustomerFormStateToProps, mapCustomerFormDispatchToProps)(CustomerForm);
