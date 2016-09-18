var React = require('react');
var ProductPicturesViewer = require('./ProductPicturesViewer.jsx');
var ProductDetails = require('./ProductDetails.jsx');

var Product = React.createClass({

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
