var React = require('react');
var Menu = require('./Menu.jsx');
var QuickBag = require('./QuickBag.jsx');

var Layout = React.createClass({

    propTypes: {
      children: React.PropTypes.node.isRequired
    },

  render: function () {
    return (
      <div>
        <Menu />
        <div className="layout-content">
          {this.props.children}
        </div>
        <QuickBag />
      </div>
    );
  }
});

module.exports = Layout;
