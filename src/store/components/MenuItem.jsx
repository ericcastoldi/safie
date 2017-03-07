var React = require('react');
var Link = require('react-router').Link;

var MenuItem = React.createClass({

  propTypes: {
    title: React.PropTypes.string.isRequired,
    route: React.PropTypes.string,
    click: React.PropTypes.func
  },

  itemClicked: function () {
    if (this.props.click) {
      this.props.click();
    }
  },

  render: function () {
    if (this.props.route) {
      return (
        <Link to={this.props.route}>{this.props.title}</Link>
      );
    }

    return (
      <span onClick={this.itemClicked}>{this.props.title}</span>
    );
  }
});

module.exports = MenuItem;
