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

  render: function () {
    var product = this.props.product;
    var route = '/colecoes/barcelona/' + product.id;
    return (
      <div className="card-produto">
        <Link to={route}>
          <ProductPicture picture={product.pictures.paths[product.pictures.main]} description={product.name} />
        </Link>
      </div>
    );
  }
});

module.exports = ProductCard;
