import React from 'react';
import DarkButton from './DarkButton.jsx';

class LoginForm extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="form-cadastro">
        <form onSubmit={this.save}>
          <h3>Login</h3>

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

          <button className="login-facebook">Entrar com o Facebook</button>

        </form>
      </div>
    );
  }
}

module.exports = LoginForm;
