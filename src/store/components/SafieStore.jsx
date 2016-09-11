var React = require('react');
var connect = require('react-redux').connect;

var Footer = require('./Footer.jsx');
var Subscribe = require('./Subscribe.jsx');
var SubscribePopup = require('./SubscribePopup.jsx');

var SafieStore = React.createClass({

  propTypes: {
    subscribePopupOn: React.PropTypes.bool.isRequired,
    children: React.PropTypes.node.isRequired
  },

  render: function () {
    return (
      <div className="safie-store">

        {this.props.children}

        <Subscribe />

        <Footer />

        <SubscribePopup active={this.props.subscribePopupOn} />

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
