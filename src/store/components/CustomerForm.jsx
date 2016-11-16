import React from 'react';
import DarkButton from './DarkButton.jsx';


class CustomerForm extends React.Component {

  constructor() {
    super();

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
            type="text"
            placeholder="Nome"
            onChange={e => this.fieldChanged({ pwdConfirmation: e.target.value })}
          />

          <label>Cadastrando-se você aceita nossos termos e privacidade.</label>

          <DarkButton click={this.save} label="Definir Medidas" />

        </form>
      </div>
    );
  }

  fieldChanged(change) {
      var updatedCustomer = Object.assign({}, this.props, change);
      this.props.customerChanged(updatedCustomer);
  }

  save(){
    this.props.saveCustomer(this.state.measurements);
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
  customerChanged: React.PropTypes.func.isRequired,
  saveCustomer: React.PropTypes.func.isRequired
};

module.exports = CustomerForm;
