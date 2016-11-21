import React from 'react';
import DarkButton from './DarkButton.jsx';

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

module.exports = LoginForm;
