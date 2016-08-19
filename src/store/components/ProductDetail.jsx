var React = require('react');
var ProductPictures = require('./ProductPictures.jsx');
var ProductDescription = require('./ProductDescription.jsx');

var ProductDetail = React.createClass({

  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="one-half column">

            <ProductPictures />

          </div>
          <div className="one-half column">

            <ProductDescription />

          </div>
        </div>
      </div>
    );
  }
});

module.exports = ProductDetail;
