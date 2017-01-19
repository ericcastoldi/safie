import React from 'react';
import { Link } from 'react-router';
import customer from './state/customer.js';

class LoginForm extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.login = this.login.bind(this);
    this.facebookLogin = this.facebookLogin.bind(this);
  }


  render() {

    return (
      <div className="login-form">
        <div className="container">
          <div className="row">
            <div className='box-login'>

              <div className='assinatura'>
                <img src='/img/logo.jpg' width="200" />
              </div>

              <button
                onClick={this.facebookLogin}
                className="button facebook-button">
                <i className="fa fa-facebook" aria-hidden="true"></i> Entrar com o Facebook
              </button>

              <Link to="/cadastro">
                <button className="button orange-button">Novo Cadastro</button>
              </Link>

              <input
                type="email"
                placeholder="E-mail"
                value={this.state.email}
                onChange={e => this.fieldChanged({ email: e.target.value })}
              />

              <input
                type="password"
                placeholder="Senha"
                value={this.state.password}
                onChange={e => this.fieldChanged({ password: e.target.value })}
              />

              <p><a href='#'>Esqueci minha senha</a></p>

              <button
                onClick={this.login}
                className="button light-button entrar">
                Entrar
              </button>

            </div>
          </div>
        </div>
      </div>
    );
  }



  fieldChanged(change) {
     this.setState(change);
  }

  login(){
    if(!this.props.loggingIn){
      this.props.logIn(this.state);
    }
  }

  facebookLogin(){
    if(!this.props.loggingIn){
      this.props.facebookLogin();
    }
  }
}

LoginForm.propTypes = customer.shape;
module.exports = customer.connect(LoginForm);
