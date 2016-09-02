var React = require('react');


var ProductTitleTiny = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
      <p>{this.props.name}</p>
    );
  }
});

module.exports = ProductTitleTiny;
