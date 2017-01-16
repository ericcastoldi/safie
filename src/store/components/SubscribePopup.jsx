var React = require('react');
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;
var Popup = require('./Popup.jsx');
var home = require('./state/home.js');

var SubscribePopup = React.createClass({
  propTypes: {
    active: React.PropTypes.bool.isRequired,
    dismiss: React.PropTypes.func.isRequired
  },

  dismissPopup: function(){
    this.props.dismiss();
  },

  render: function () {
    // TODO: Renomear componente (para Sale, Featured ou algo do genero) e desacoplar da popup
    return (
      <Popup dismiss={this.dismissPopup} active={this.props.active} >
        <div className="subscribe-popup">
          <h2>Aproveite nossa<br />AMAZING SALE!</h2>
          <p>Deixe seu e-mail e seja a primeira a receber todos os nossos descontos.</p>
          <div className="actions">
            <input type="email" id="email" placeholder="E-MAIL" />
            <button>Receber Descontos!</button>
          </div>
        </div>
      </Popup>
    );
  }
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    dismiss: home.dismissSubscribePopup
  }, dispatch);
}

module.exports = connect(null, mapDispatchToProps)(SubscribePopup);
