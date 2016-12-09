var React = require('react');
var Menu = require('./Menu.jsx');
var Logo = require('./Logo.jsx');
var UnderstandButton = require('./UnderstandButton.jsx');
var Subscribe = require('./Subscribe.jsx');
var SubscribePopup = require('./SubscribePopup.jsx');
var Footer = require('./Footer.jsx');
var connect = require('react-redux').connect;

var Landing = React.createClass({

  propTypes: {
    subscribePopupOn: React.PropTypes.bool.isRequired
  },

  render: function () {

    return (
      <div className="safie-store">
        <div className="landing">
          <Menu />
          <Logo />
          <UnderstandButton />
        </div>
        <Subscribe />
        <SubscribePopup active={this.props.subscribePopupOn} />
        <Footer />
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    subscribePopupOn: state.home.subscribePopupOn
  };
}

module.exports = connect(mapStateToProps)(Landing);
