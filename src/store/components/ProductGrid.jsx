var React = require('react');
var ProductCard = require('./ProductCard.jsx');

var ProductGrid = React.createClass({

  propTypes: {
    products: React
      .PropTypes
      .arrayOf(
        React.PropTypes.shape({
          picture: React.PropTypes.string.isRequired,
          caption: React.PropTypes.string,
          route: React.PropTypes.string.isRequired,
          price: React.PropTypes.number.isRequired
        })
      )
  },


    getDefaultProps: function () {
      return {
        products: [
          {
            picture: '/img/demo/lookbook01.jpg',
            caption: 'Peça de exemplo à venda',
            route: '/produtos/123',
            price: 10
          },
          {
            picture: '/img/demo/lookbook02.jpg',
            caption: 'Peça de exemplo à venda',
            route: '/produtos/123',
            price: 10
          },
          {
            picture: '/img/demo/lookbook03.jpg',
            caption: 'Peça de exemplo à venda',
            route: '/produtos/123',
            price: 10
          },
          {
            picture: '/img/demo/lookbook04.jpg',
            caption: 'Peça de exemplo à venda',
            route: '/produtos/123',
            price: 10
          },
          {
            picture: '/img/demo/lookbook05.jpg',
            caption: 'Peça de exemplo à venda',
            route: '/produtos/123',
            price: 10
          },
          {
            picture: '/img/demo/lookbook06.jpg',
            caption: 'Peça de exemplo à venda',
            route: '/produtos/123',
            price: 10
          }
        ]
      };
    },

  render: function () {

    var renderedProducts = this.renderProducts();
    return (
      <div className="listagem-produtos">
        <div className="container">
          {renderedProducts}
        </div>
      </div>
    );
  },

  renderProducts: function () {

    var products = this.props.products;
    var splittedProducts = [];

    while (products.length) {
      splittedProducts.push(products.splice(0, 3));
    }

    var renderedProducts = splittedProducts.map(function (rowProducts, index) {

      var productRowContent = rowProducts.map(function (product, rowIndex) {
        return (
          <div key={rowIndex} className="four columns">
            <ProductCard product={product}/>
          </div>
        );
      });

      return (
        <div key={index} className="row">{productRowContent}</div>
      );
    });

    return renderedProducts;
  }

});

module.exports = ProductGrid;
