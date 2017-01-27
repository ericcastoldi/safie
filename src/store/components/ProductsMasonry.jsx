var React = require('react');
var ProductCard = require('./ProductCard.jsx');
var collection = require('./state/collection.js');

var ProductsMasonry = React.createClass({

  propTypes: {
    params: React.PropTypes.object.isRequired,
    fetchProducts: React.PropTypes.func.isRequired,
    collection: collection.shape
  },

  componentDidMount: function() {
    this.props.fetchProducts(this.props.params.collection);
  },

  componentWillReceiveProps: function(nextProps) {
    if(this.props.params.collection !== nextProps.params.collection){
      this.props.fetchProducts(nextProps.params.collection);
    }
  },

  render: function () {

    var noData = !this.props.collection
                || this.props.collection.length === 0;

    if(noData) {
       return (
          <div>Nenhuma peça nessa coleção :(</div>
       );
    }

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
    return this.props.collection.map(function (product, rowIndex) {
      return (
        <div key={rowIndex} className="masonry-item">
          <ProductCard product={product}/>
        </div>
      );
    });
  }

});

module.exports = collection.connect(ProductsMasonry);
