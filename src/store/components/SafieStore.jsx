var React = require('react');
var Menu = require('./Menu.jsx');
var Footer = require('./Footer.jsx');
var SubscribePopup = require('./SubscribePopup.jsx');

var Dimmer = React.createClass({

    propTypes: {
      children: React.PropTypes.node.isRequired
    },

  render: function(){
    return (
        <div className="dimmer-content">
          {this.props.children}
        </div>
    );
  }

});

var SafieStore = React.createClass({

  propTypes: {
    children: React.PropTypes.node.isRequired
  },

  render: function () {
    return (
      <div className="safie-store">

        <Dimmer>
          <SubscribePopup />
        </Dimmer>

        {this.props.children}

        <Menu />

        <Footer />

      </div>
    );
  }
});

module.exports = SafieStore;
