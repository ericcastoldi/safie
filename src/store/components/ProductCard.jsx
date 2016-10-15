var React = require('react');
var Link = require('react-router').Link;
var ProductPicture = require('./ProductPicture.jsx');


var ProductCard = React.createClass({

  propTypes: {
    product: React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired,
      pictures: React.PropTypes.shape({
        main: React.PropTypes.number.isRequired,
        product: React.PropTypes.number.isRequired,
        paths: React.PropTypes.arrayOf(React.PropTypes.object)
      })
    }).isRequired
  },

  getInitialState: function() {
    var product = this.props.product;
    return {
      activePicture: product.pictures.paths[product.pictures.main],
      mainPicture: product.pictures.paths[product.pictures.main],
      productPicture: product.pictures.paths[product.pictures.product]
    };
  },

  render: function () {
    var product = this.props.product;
    var route = '/colecoes/barcelona/' + product.id;
    return (
      <div
        className="card-produto"
        onMouseEnter={() => { this.setState({activePicture: this.state.productPicture}); }}
        onMouseLeave={() => { this.setState({activePicture: this.state.mainPicture}); }}>
        <Link to={route}>
          <ProductPicture picture={this.state.activePicture} description={product.name} />
        </Link>
      </div>
    );
  }
});

module.exports = ProductCard;
