var React = require('react');
var ProductPicturesViewer = require('./ProductPicturesViewer.jsx');
var ProductDetails = require('./ProductDetails.jsx');

var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;
var productActions = require('./state/productActions.js');

var Product = React.createClass({

  propTypes: {
    fetchProduct: React.PropTypes.func.isRequired,
    params: React.PropTypes.object.isRequired,
    product: React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired,
      description: React.PropTypes.string.isRequired,
      measures: React.PropTypes.object,
      pictures: React.PropTypes.shape({
        main: React.PropTypes.number.isRequired,
        product: React.PropTypes.number.isRequired,
        paths: React.PropTypes.arrayOf(React.PropTypes.object)
      }),
      colors: React.PropTypes.object.isRequired,
      defaultColor: React.PropTypes.string.isRequired
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
        <ProductPicturesViewer
          pictures={product.pictures} />

        <ProductDetails
          name={product.name}
          description={product.description}
          price={product.price}
          colors={product.colors}
          defaultColor={product.defaultColor}
          measures={product.measures}
        />
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    product: state.product.current,
    measuresPopupOpen: state.product.measuresPopupOpen
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchProduct: productActions.fetchProduct
  }, dispatch);
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Product);
