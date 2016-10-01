var React = require('react');
var ProductPicturesViewer = require('./ProductPicturesViewer.jsx');
var ProductDetails = require('./ProductDetails.jsx');

var Product = React.createClass({

  propTypes: {
    id: React.PropTypes.string.isRequired // carregar o produto a partir do id da querystring
  },

  render: function() {
    return (
      <div>
        <ProductPicturesViewer />
        <ProductDetails />
      </div>
    );
  }
});

module.exports = Product;
