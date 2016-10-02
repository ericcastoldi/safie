var React = require('react');
var ProductPicturesViewer = require('./ProductPicturesViewer.jsx');
var ProductDetails = require('./ProductDetails.jsx');
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;

var Product = React.createClass({

  propTypes: {
    fetchProduct: React.PropTypes.func.isRequired,
    params: React.PropTypes.object.isRequired,
    product: React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired,
      description: React.PropTypes.string.isRequired,
      pictures: React.PropTypes.shape({
        main: React.PropTypes.number.isRequired,
        product: React.PropTypes.number.isRequired,
        paths: React.PropTypes.arrayOf(React.PropTypes.object)
      })
    })
  },


  componentDidMount: function() {
    this.props.fetchProduct(this.props.params.product);
  },


  render: function() {
    var product = this.props.product;

    if(!product) {
      return (
        <div>Carregando...</div>
      );
    }

    return (
      <div>
        <ProductPicturesViewer pictures={this.props.product.pictures} />
        <ProductDetails name={product.name} description={product.description} price={product.price} />
      </div>
    );
  }
});

var fetchProduct = function(id) {
  return {
    type: 'FETCH_PRODUCT',
    payload: { id: id }
  };
};

function mapStateToProps(state) {
  return {
    product: state.product.current
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchProduct: fetchProduct
  }, dispatch);
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Product);
