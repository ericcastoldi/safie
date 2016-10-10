var React = require('react');
var ProductCardHorizontal = require('./ProductCardHorizontal.jsx');
var ProductPrice = require('./ProductPrice.jsx');
var DarkButton = require('./DarkButton.jsx');
var connect = require('react-redux').connect;

var ShoppingBag = React.createClass({

  propTypes: {
    items: React.PropTypes.shape({
      options: React.PropTypes.shape({
        color: React.PropTypes.object,
        measurements: React.PropTypes.object
      }),
      product: React.PropTypes.shape({
        id: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired,
        price: React.PropTypes.string.isRequired,
        measurements: React.PropTypes.object,
        pictures: React.PropTypes.shape({
          main: React.PropTypes.number.isRequired,
          product: React.PropTypes.number.isRequired,
          paths: React.PropTypes.arrayOf(React.PropTypes.object)
        }),
        colors: React.PropTypes.object.isRequired,
        defaultColor: React.PropTypes.string.isRequired
      })
    })
  },

  render: function () {

    if(Object.keys(this.props.items).length === 0){
      return (
        <div>
          Nenhum produto na sacola :(
        </div>
      );
    }

    var renderedRows = this.renderDataRows();

    return (
      <div className="sacola">
        <div className="container">
          <div className="row">
            <div className="twelve columns">

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
              <DarkButton label="Finalizar Compra" />
            </div>
          </div>
        </div>
      </div>
    );
  },

  renderDataRows: function () {


    return Object.keys(this.props.items).map(function (itemId, index) {

      var item = this.props.items[itemId];
      var product = item.product;
      var options = item.options;

      return (
        <tr key={index}>
          <td>
            <ProductCardHorizontal
              product={product}
              options={options}
            />
          </td>
          <td>
            <ProductPrice price={product.price}/>
          </td>
          <td>
            <a href="#">x</a>
          </td>
        </tr>
      );
    }.bind(this));
  }

});


function mapStateToProps(state) {
  return {
    items: state.bag.items
  };
}


module.exports = connect(mapStateToProps)(ShoppingBag);
