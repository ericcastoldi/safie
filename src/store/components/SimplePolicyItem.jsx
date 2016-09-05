var React = require('react');

var SimplePolicyItem = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },

  render: function(){
    return (
      <span>{this.props.title}</span>
    );
  }
});

module.exports = SimplePolicyItem;
