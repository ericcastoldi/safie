var React = require('react');
var SimplePolicyItem = require('./SimplePolicyItem.jsx');
var Link = require('react-router').Link;

var LinkedPolicyItem = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    route: React.PropTypes.string.isRequired
  },

  render: function(){
    return (
      <Link to={this.props.route}>
        <SimplePolicyItem title={this.props.title} />
      </Link>
    );
  }
});

module.exports = LinkedPolicyItem;
