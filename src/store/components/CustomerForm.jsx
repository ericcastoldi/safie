import React from 'react';
import customer from './state/customer.js';
import customerFactory from '../model/customerFactory.js';



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
      <div className="login-form">
        <div className="container">
          <div className='box-login'>
            <div className='assinatura'>
              <img src='/img/logo.png' width="200" />
            </div>
            <h4>Criar nova conta</h4>
            <div className='row'>
              <div className='twelve columns'>

                <input
                  type="text"
                  placeholder="Nome"
                  value={this.state.name}
                  disabled={this.props.saving}
                  onChange={e => this.fieldChanged({ name: e.target.value })}
                />

              </div>
            </div>
            <div className='row'>
              <div className='six columns'>

                <input
                  type="text"
                  placeholder="Data de Nascimento"
                  value={this.state.birthday}
                  disabled={this.props.saving}
                  onChange={e => this.fieldChanged({ birthday: e.target.value })}
                />

              </div>
              <div className='six columns'>

                <input
                  type="tel"
                  placeholder="Telefone"
                  value={this.state.phone}
                  disabled={this.props.saving}
                  onChange={e => this.fieldChanged({ phone: e.target.value })}
                />

              </div>
            </div>
            <div className='row'>

              <input
                type="email"
                placeholder="Email"
                value={this.state.email}
                disabled={this.props.saving}
                onChange={e => this.fieldChanged({ email: e.target.value })}
              />

            </div>
            <div className='row'>
              <div className='six columns'>

                <input
                  type="password"
                  placeholder="Senha"
                  disabled={this.props.saving}
                  onChange={e => this.fieldChanged({ password: e.target.value })}
                />

              </div>
              <div className='six columns'>

                <input
                  type="password"
                  placeholder="Digite a senha novamente"
                  disabled={this.props.saving}
                  onChange={e => this.fieldChanged({ passwordConfirmation: e.target.value })}
                />

              </div>
            </div>

            <p><a href='#'>Cadastrando-se voce aceita nossos termos e privacidade</a></p>

            <button
              onClick={this.save}
              disabled={this.props.saving}
              className="button orange-button">
              Cadastrar
            </button>

            {additionalInfo}

          </div>
        </div>

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

CustomerForm.propTypes = customer.shape;

module.exports = customer.connect(CustomerForm);
