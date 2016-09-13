var React = require('react');
var SimplePolicyItem = require('./SimplePolicyItem.jsx');
var LinkedPolicyItem = require('./LinkedPolicyItem.jsx');

var PolicyItem = React.createClass({

  propTypes: {
    item: React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,
      route: React.PropTypes.string
    }).isRequired
  },

  render: function(){
    var item = this.props.item;

    if(item.route)
    {
      return (
        <LinkedPolicyItem title={item.title} route={item.route} />
      );
    }

    return (
      <SimplePolicyItem title={item.title} />
    );
  }
});

module.exports = PolicyItem;
