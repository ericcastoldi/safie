var React = require('react');
var PolicyItem = require('./PolicyItem.jsx');

var PolicyCard = React.createClass({
  propTypes: {
    policy: React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      items: React.PropTypes.arrayOf(
       React.PropTypes.shape({
          title: React.PropTypes.string.isRequired,
          route: React.PropTypes.string
        })
      ).isRequired
    }).isRequired
  },

  renderPolicies: function(){

    if (!this.props.policy.items || this.props.policy.items.length === 0) {
      return null;
    }

    return this.props.policy.items.map(function(item, index){
      return (
        <p key={index}>
          <PolicyItem item={item} />
        </p>
      );
    });
  },

  render: function(){

    var renderedPolicies = this.renderPolicies();

    return (
      <div>
        <h6>{this.props.policy.name}</h6>
        {renderedPolicies}
      </div>
    );
  }
});

module.exports = PolicyCard;
