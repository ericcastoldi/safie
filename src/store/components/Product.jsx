var React = require('react');
var ProductPictures = require('./ProductPictures.jsx');
var ProductDetails = require('./ProductDetails.jsx');

var Product = React.createClass({

  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="eight columns">

            <ProductPictures />

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
