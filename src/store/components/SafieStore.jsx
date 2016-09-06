var React = require('react');
var Menu = require('./Menu.jsx');
var Footer = require('./Footer.jsx');

var SafieStore = React.createClass({

  propTypes: {
    children: React.PropTypes.node.isRequired
  },

  render: function () {
    return (
      <div className="safie-store">

        {this.props.children}
        <Menu />
        <Footer />

      </div>
    );
  }
});

module.exports = SafieStore;
