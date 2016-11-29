import React from 'react';
import DarkButton from './DarkButton.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import customerActions from './state/customerActions.js';

class LoginForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {};

    this.login = this.login.bind(this);
  }

  render() {
    return (
      <div className="form-cadastro">
        <form>
          <h3>Login</h3>

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

          <DarkButton click={this.login} label="Entrar" />

          <button className="login-facebook">Entrar com o Facebook</button>

        </form>
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
}

LoginForm.propTypes = {
  loggingIn: React.PropTypes.bool,
  error: React.PropTypes.string,
  logIn: React.PropTypes.func.isRequired
};


const mapLoginFormStateToProps = (state) => {
  return {
    loggingIn: state.customer.loggingIn,
    error: state.customer.error
  };
};

const mapLoginFormDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logIn: customerActions.logIn
  }, dispatch);
};

module.exports = connect(mapLoginFormStateToProps, mapLoginFormDispatchToProps)(LoginForm);
