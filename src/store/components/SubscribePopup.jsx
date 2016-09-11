var React = require('react');
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;


var SubscribePopup = React.createClass({
  propTypes: {
    active: React.PropTypes.bool.isRequired,
    dismiss: React.PropTypes.func.isRequired
  },

  dismissPopup: function(){
    this.props.dismiss();
  },

  render: function () {
    let cssClasses = ['subscribe-popup', 'dimmer'];
    if(this.props.active) {
      cssClasses.push('active');
    }

    return (
      <div className={cssClasses.join(' ')}>
        <h2>Aproveite nossa<br />AMAZING SALE!</h2>
        <p>Deixe seu e-mail e seja a primeira a receber todos os nossos descontos.</p>
        <div className="actions">
          <input type="email" id="email" placeholder="E-MAIL" />
          <button>Receber Descontos!</button>
          <a onClick={this.dismissPopup}>
            Não, obrigada. Não quero receber descontos.
          </a>
        </div>
      </div>
    );
  }
});


var dismissSubscribePopup = function() {
  return {
    type: 'DISMISS_SUBSCRIBE_POPUP'
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    dismiss: dismissSubscribePopup
  }, dispatch);
}

module.exports = connect(null, mapDispatchToProps)(SubscribePopup);