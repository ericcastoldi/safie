var React = require('react');
var connect = require('react-redux').connect;
var Dimmer = require('./Dimmer.jsx');
var Menu = require('./Menu.jsx');
var Footer = require('./Footer.jsx');
var SubscribePopup = require('./SubscribePopup.jsx');

var SafieStore = React.createClass({

  propTypes: {
    subscribePopupOn: React.PropTypes.bool.isRequired,
    children: React.PropTypes.node.isRequired
  },

  render: function () {
    return (
      <div className="safie-store">

        <Dimmer active={this.props.subscribePopupOn}>
          <SubscribePopup dismiss={this.dismissPopup} />
        </Dimmer>

        {this.props.children}

        <Menu />

        <Footer />

      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    subscribePopupOn: state.main.subscribePopupOn
  };
}


module.exports = connect(mapStateToProps)(SafieStore);
