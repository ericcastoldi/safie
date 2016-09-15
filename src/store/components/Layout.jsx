var React = require('react');
var Menu = require('./Menu.jsx');
//var QuickBag = require('./QuickBag.jsx');

var QuickBag = React.createClass({
  render: function () {
    return (
      <div className="quickbag">
        <i className="fa fa-shopping-cart fa-flip-horizontal fa-2x" aria-hidden="true"></i>
      </div>
    );
  }
});

var Layout = React.createClass({
  render: function () {
    return (
      <div>
        <Menu />
        <div className="layout-content"></div>
        <QuickBag />
      </div>
    );
  }
});

module.exports = Layout;
