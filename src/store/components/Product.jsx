var React = require('react');
var ProductPicturesViewer = require('./ProductPicturesViewer.jsx');
var ProductDetails = require('./ProductDetails.jsx');

var Product = React.createClass({

  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="eight columns">

            <ProductPicturesViewer />

          </div>
          <div className="four columns">

            <ProductDetails />

          </div>
        </div>
      </div>
    );
  }
});

module.exports = Product;
