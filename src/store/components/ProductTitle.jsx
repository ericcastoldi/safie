var React = require('react');


var ProductTitle = React.createClass({
  propTypes: {
    name: React.PropTypes.string
  },

  render: function () {
    return (
      <h3>{this.props.name}</h3>
    );
  }
});

module.exports = ProductTitle;
