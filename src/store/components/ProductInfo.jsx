var React = require('react');
var ProductTitle = require('./ProductTitle.jsx');
var ProductInfoLayout = require('./ProductInfoLayout.jsx');

var ProductInfo = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string
  },

  render: function () {
    return (
      <ProductInfoLayout description={this.props.description}>
        <ProductTitle name={this.props.name} />
      </ProductInfoLayout>
    );
  }
});

module.exports = ProductInfo;
