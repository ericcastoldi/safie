/*eslint no-underscore-dangle: 1*/
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import customerActions from './state/customerActions.js';
import { browserHistory } from 'react-router';

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

  componentDidMount() {
    this.props.fetchCurrentCustomer();
  }

  render() {

    if(this.props.customer && this.props.customer._id){
      browserHistory.push('/my-safie');
      return null;
    }

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
      browserHistory.push('/my-safie');
    }
  }

  facebookLogin(){
    if(!this.props.loggingIn){
      this.props.facebookLogin();
      browserHistory.push('/my-safie');
    }
  }
}

LoginForm.propTypes = {
  customer: React.PropTypes.shape({
    _id: React.PropTypes.string,
    name: React.PropTypes.string
  }),
  loggingIn: React.PropTypes.bool,
  error: React.PropTypes.string,
  logIn: React.PropTypes.func.isRequired,
  facebookLogin: React.PropTypes.func.isRequired,
  fetchCurrentCustomer: React.PropTypes.func.isRequired
};


const mapLoginFormStateToProps = (state) => {
  return {
    customer: state.customer.current,
    loggingIn: state.customer.loggingIn,
    error: state.customer.error
  };
};

const mapLoginFormDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logIn: customerActions.logIn,
    facebookLogin: customerActions.facebookLogin,
    fetchCurrentCustomer: customerActions.fetchCurrentCustomer
  }, dispatch);
};

module.exports = connect(mapLoginFormStateToProps, mapLoginFormDispatchToProps)(LoginForm);
