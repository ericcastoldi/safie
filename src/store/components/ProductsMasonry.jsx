var React = require('react');
var ProductCard = require('./ProductCard.jsx');

var ProductsMasonry = React.createClass({

  propTypes: {
    products: React
      .PropTypes
      .arrayOf(
        React.PropTypes.shape({
          picture: React.PropTypes.string.isRequired,
          name: React.PropTypes.string.isRequired,
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
            name: 'Peça de exemplo à venda',
            route: '/produtos/123',
            price: 10
          },
          {
            picture: '/img/demo/lookbook02.jpg',
            name: 'Peça de exemplo à venda',
            route: '/produtos/123',
            price: 10
          },
          {
            picture: '/img/demo/lookbook03.jpg',
            name: 'Peça de exemplo à venda',
            route: '/produtos/123',
            price: 10
          },
          {
            picture: '/img/demo/lookbook04.jpg',
            name: 'Peça de exemplo à venda',
            route: '/produtos/123',
            price: 10
          },
          {
            picture: '/img/demo/lookbook05.jpg',
            name: 'Peça de exemplo à venda',
            route: '/produtos/123',
            price: 10
          },
          {
            picture: '/img/demo/lookbook06.jpg',
            name: 'Peça de exemplo à venda',
            route: '/produtos/123',
            price: 10
          }
        ]
      };
    },

  render: function () {
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

module.exports = ProductsMasonry;
