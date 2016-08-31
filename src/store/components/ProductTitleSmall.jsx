var React = require('react');

var ProductTitleSmall = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
      <h5>{this.props.name}</h5>
    );
  }
});

module.exports = ProductTitleSmall;
