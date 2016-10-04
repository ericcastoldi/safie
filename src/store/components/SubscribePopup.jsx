var React = require('react');
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;
var Popup = require('./Popup.jsx');
var homeActions = require('./state/homeActions.js');

var SubscribePopup = React.createClass({
  propTypes: {
    active: React.PropTypes.bool.isRequired,
    dismiss: React.PropTypes.func.isRequired
  },

  dismissPopup: function(){
    this.props.dismiss();
  },

  render: function () {

    return (
      <Popup active={this.props.active} >
        <div className="subscribe-popup">
          <div className="close-popup">
            <i onClick={this.dismissPopup} className="fa fa-close" aria-hidden="true"></i>
          </div>
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
    dismiss: homeActions.dismissSubscribePopup
  }, dispatch);
}

module.exports = connect(null, mapDispatchToProps)(SubscribePopup);
