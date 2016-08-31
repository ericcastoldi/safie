var React = require('react');
var Link = require('react-router').Link;
var ProductPicture = require('./ProductPicture.jsx');
var ProductTitleTiny = require('./ProductTitleTiny.jsx');
var ProductPrice = require('./ProductPrice.jsx');


var ProductCard = React.createClass({

  propTypes: {
    product: React
      .PropTypes
      .shape({picture: React.PropTypes.string.isRequired, name: React.PropTypes.string, route: React.PropTypes.string.isRequired, price: React.PropTypes.number.isRequired})
      .isRequired
  },

  render: function () {
    var product = this.props.product;
    return (
      <div className="card-produto">
        <Link to={product.route}>
          <div className="foto">
            <ProductPicture picture={product.picture} description={product.name} />
          </div>
          <div className="legenda">
            <ProductTitleTiny name={product.name} />
          </div>
          <div className="preco">
            <ProductPrice price={product.price} />
          </div>
        </Link>
      </div>
    );
  }
});

module.exports = ProductCard;
