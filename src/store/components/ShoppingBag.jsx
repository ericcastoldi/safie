var React = require('react');
var ProductCardHorizontal = require('./ProductCardHorizontal.jsx');
var ProductPrice = require('./ProductPrice.jsx');
var BuyButton = require('./BuyButton.jsx');

var ShoppingBag = React.createClass({

  propTypes: {
    products: React.PropTypes.arrayOf(React.PropTypes.shape({
      picture: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired,
      route: React.PropTypes.string,
      description: React.PropTypes.string,
      price: React.PropTypes.number.isRequired,
      measures: React.PropTypes.object
    }))
  },

  getDefaultProps: function () {
    return {
      products: [
        {
          picture: '/img/demo/lookbook13.jpg',
          name: 'Saia Mid Velvet',
          description: 'Saia mid em veludo, na cor preta com acabamentos da barra à fio.',
          route: '/produtos/123',
          price: 230,
          measures: {
            'Cintura': 50,
            'Pernas': 120
          }
        }, {
          picture: '/img/demo/lookbook02.jpg',
          name: 'Peça exemplo',
          description: 'Peça de exemplo à venda',
          route: '/produtos/123',
          price: 10,
          measures: {}
        }, {
          picture: '/img/demo/lookbook03.jpg',
          name: 'Peça de exemplo à venda',
          route: '/produtos/123',
          price: 10,
          measures: {
            'Pernas': null
          }
        }
      ]
    };
  },

  render: function () {

    var renderedRows = this.renderDataRows();

    return (
      <div className="sacola">
        <div className="container">
          <div className="row">
            <div className="twelve columns">

              <h1>Sacola de compras</h1>
              <table>
                <thead>
                  <tr>
                    <th>Peça</th>
                    <th>Preço</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {renderedRows}
                </tbody>
              </table>
            </div>

          </div>
          <div className="row">
            <div className="twelve columns">
              <BuyButton label="Finalizar Compra" route="/comprar"/>
            </div>
          </div>
        </div>
      </div>
    );
  },

  renderDataRows: function () {
    return this.props.products.map(function (product, index) {
      return (
        <tr key={index}>
          <td>
            <ProductCardHorizontal product={product} />
          </td>
          <td>
            <ProductPrice price={product.price}/>
          </td>
          <td>
            <a href="#">x</a>
          </td>
        </tr>
      );
    });
  }

});

module.exports = ShoppingBag;
