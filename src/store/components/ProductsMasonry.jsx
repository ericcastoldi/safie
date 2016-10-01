var React = require('react');
var ProductCard = require('./ProductCard.jsx');
var connect = require('react-redux').connect;

var ProductsMasonry = React.createClass({

  propTypes: {
    products: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        id: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        pictures: React.PropTypes.shape({
          main: React.PropTypes.number.isRequired,
          product: React.PropTypes.number.isRequired,
          paths: React.PropTypes.arrayOf(React.PropTypes.object)
        })
      })
    )
  },

  render: function () {
    var renderedProducts = this.renderProducts();

    return (
      <div className="masonry-wrapper">
        <div className="masonry">
          {renderedProducts}
        </div>
      </div>
    );
  },

  renderProducts: function () {
    return this.props.products.map(function (product, rowIndex) {
      return (
        <div key={rowIndex} className="masonry-item">
          <ProductCard product={product}/>
        </div>
      );
    });
  }

});

function mapStateToProps(state) {
  return {
    products: state.products.barcelona
  };
}

module.exports = connect(mapStateToProps)(ProductsMasonry);
