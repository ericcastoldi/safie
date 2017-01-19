import React from 'react';
import ProductPicturesViewer from './ProductPicturesViewer.jsx';
import ProductDetails from './ProductDetails.jsx';
import LoadingRipple from './LoadingRipple.jsx';
import product from './state/product.js';

var Product = React.createClass({

  propTypes: {
    fetchProduct: React.PropTypes.func.isRequired,
    params: React.PropTypes.object.isRequired,
    options: React.PropTypes.shape({
      color: React.PropTypes.object,
      measurements: React.PropTypes.object
    }),
    product: React.PropTypes.shape(product.shape)
  },


  componentDidMount: function() {
    this.props.fetchProduct(this.props.params.product);
  },


  render: function() {
    var prod = this.props.product;

    if(!prod) {
      return (<LoadingRipple />);
    }

    return (
      <div>
        <ProductPicturesViewer
          pictures={prod.pictures} />

        <ProductDetails
          product={prod}
          options={this.props.options} />
      </div>
    );
  }
});

module.exports = product.connect(Product);
