
var React = require('react');
var Header = require('./Header.jsx');
var Menu = require('./Menu.jsx');
var Footer = require('./Footer.jsx');

var SafieStore = React.createClass({
  propTypes: {
    children: React.PropTypes.node.isRequired
  },

  render: function () {
    return (
      <div>
        <Header />
        <Menu />
        {this.props.children}
        <Footer />
      </div>
    );
  }
});

module.exports = SafieStore;
