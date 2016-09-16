var React = require('react');
var Link = require('react-router').Link;
var ProductPicture = require('./ProductPicture.jsx');


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
          <ProductPicture picture={product.picture} description={product.name} />
        </Link>
      </div>
    );
  }
});

module.exports = ProductCard;
