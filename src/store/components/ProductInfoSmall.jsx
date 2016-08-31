var React = require('react');
var ProductTitleSmall = require('./ProductTitleSmall.jsx');
var ProductInfoLayout = require('./ProductInfoLayout.jsx');


var ProductInfoSmall = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string
  },

  render: function () {
      return (
        <ProductInfoLayout description={this.props.description}>
          <ProductTitleSmall name={this.props.name} />
        </ProductInfoLayout>
      );
  }
});

module.exports = ProductInfoSmall;
