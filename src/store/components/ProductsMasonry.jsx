var React = require('react');
var ProductCard = require('./ProductCard.jsx');
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;
var productsActions = require('./state/productsActions.js');

var ProductsMasonry = React.createClass({

  propTypes: {
    params: React.PropTypes.object.isRequired,
    fetchProducts: React.PropTypes.func.isRequired,
    products: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        id: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        pictures: React.PropTypes.shape({
          main: React.PropTypes.number.isRequired,
          product: React.PropTypes.number.isRequired,
          paths: React.PropTypes.object
        })
      })
    )
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

    var noData = !this.props.products
                || this.props.products.length === 0;

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
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchProducts: productsActions.fetchProducts
  }, dispatch);
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(ProductsMasonry);
