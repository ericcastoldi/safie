var React = require('react');
var Link = require('react-router').Link;

var ProductCard = React.createClass({

  propTypes: {
    product: React
      .PropTypes
      .shape({picture: React.PropTypes.string.isRequired, caption: React.PropTypes.string, route: React.PropTypes.string.isRequired, price: React.PropTypes.number.isRequired})
      .isRequired
  },

  getDefaultProps: function () {
    return {
      product: {
        picture: '/img/quadro-exemplo.png',
        caption: 'Quadro de exemplo à venda',
        route: '/produtos/123',
        price: 10
      }
    };
  },

  render: function () {
    var product = this.props.product;
    return (
      <div className="produto-listagem">
        <Link to={product.route}>
          <div className="u-max-full-width produto-imagem ">
            <img src={product.picture} alt={product.caption}/>
          </div>
          <div className="produto-valor">
            R$ {product.price}
          </div>
        </Link>
      </div>
    );
  }
});

module.exports = ProductCard;
