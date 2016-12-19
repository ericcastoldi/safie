import React from 'react';
import DarkButton from './DarkButton.jsx';
import ProductPrice from './ProductPrice.jsx';
import ProductCardHorizontal from './ProductCardHorizontal.jsx';
import bagActions from './state/bagActions.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

var ShoppingBag = React.createClass({

  propTypes: {
    fetchBag: React.PropTypes.func.isRequired,
    removeProductFromBag: React.PropTypes.func.isRequired,
    error: React.PropTypes.object,
    fetching: React.PropTypes.bool,
    doneFetching: React.PropTypes.bool,
    removing: React.PropTypes.bool,
    doneRemoving: React.PropTypes.bool,
    shipping: React.PropTypes.object,
    total: React.PropTypes.number,
    items: React
      .PropTypes
      .shape({
        options: React
          .PropTypes
          .shape({color: React.PropTypes.object, measurements: React.PropTypes.object}),
        product: React
          .PropTypes
          .shape({
            id: React.PropTypes.string.isRequired,
            name: React.PropTypes.string.isRequired,
            description: React.PropTypes.string.isRequired,
            price: React.PropTypes.string.isRequired,
            measurements: React.PropTypes.object,
            pictures: React
              .PropTypes
              .shape({
                main: React.PropTypes.number.isRequired,
                product: React.PropTypes.number.isRequired,
                paths: React
                  .PropTypes
                  .arrayOf(React.PropTypes.object)
              }),
            colors: React.PropTypes.object.isRequired,
            defaultColor: React.PropTypes.string.isRequired
          })
      })
  },

  componentDidMount: function () {
    this
      .props
      .fetchBag();
  },

  render: function () {

    if (this.props.fetching || this.props.removing) {
      return (
        <div>
          Carregando...
        </div>
      );
    }

    if (!this.props.items || Object.keys(this.props.items).length === 0) {
      return (
        <div>
          Nenhum produto na sacola :(
        </div>
      );
    }

    const shipping = this.renderShipping();
    const total = this.renderTotal();
    const renderedRows = this.renderDataRows();

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
            <div className="six columns">
              {shipping}
            </div>
            <div className="six columns">
              {total}

              <br/>

              <DarkButton label="Finalizar Compra"/>

            </div>
          </div>
        </div>
      </div>
    );
  },

  renderTotal: function () {

    if (!this.props.total) {
      return null;
    }

    return (
      <div className="total">
        <h4>
          Valor da compra
        </h4>
        {this.renderTotalItems()}
      </div>
    );
  },

  renderSubTotal: function () {
    if (!this.props.total) {
      return null;
    }

    return (
      <tr className="subtotal">
        <td>
          <h4>Total</h4>
        </td>
        <td>
          <h4>R$ {this
              .props
              .total
              .toString()
              .replace(',', '.')}</h4>
        </td>
      </tr>
    );
  },

  renderTotalItems: function () {
    var items = Object
      .keys(this.props.items)
      .map(function (itemId, index) {
        var item = this.props.items[itemId];
        var product = item.product;
        return (
          <tr key={index}>
            <td>
              <strong>{product.name}</strong>
            </td>
            <td>R$ {product.price}</td>
          </tr>
        );
      }.bind(this));

    return (
      <table>
        <tbody>

          {items}
          {this.renderShippingPrice()}
          {this.renderSubTotal()}
        </tbody>
      </table>
    );
  },

  renderShippingPrice: function () {
    if (!this.props.shipping) {
      return null;
    }

    return (
      <tr>
        <td>
          <strong>Frete</strong>
        </td>
        <td>{this.props.shipping.price}</td>
      </tr>
    );
  },

  renderShipping: function () {

    const shippingDetails = this.renderShippingDetails();

    return (
      <div className="frete">
        <h4>Frete</h4>
        <input type="text" placeholder="Informe seu cep"/>
        <button className="light-button">Calcular</button>
        {shippingDetails}
      </div>
    );

  },

  renderShippingDetails: function () {
    if (this.props.shipping) {
      return (
        <p>
          O frete para o cep
          <strong>{this.props.shipping.code}</strong>
          é
          <strong>{this.props.shipping.price}</strong>
        </p>
      );
    }
    return null;
  },

  renderDataRows: function () {

    return Object
      .keys(this.props.items)
      .map(function (itemId, index) {

        var item = this.props.items[itemId];
        var product = item.product;
        var options = item.options;

        return (
          <tr key={index}>
            <td>
              <ProductCardHorizontal product={product} options={options}/>
            </td>
            <td>
              <ProductPrice price={product.price}/>
            </td>
            <td>
              <a href="#" onClick={() => {
                this
                  .props
                .removeProductFromBag(itemId);
              }}>
                x
              </a>
            </td>
          </tr>
        );
      }.bind(this));
  }

});

function mapStateToProps(state) {
  return {
    total: state.bag.total,
    items: state.bag.items,
    error: state.bag.error,
    fetching: state.bag.fetching,
    doneFetching: state.bag.doneFetching,
    removing: state.bag.removing,
    doneRemoving: state.bag.doneRemoving,
    shipping: state.bag.shipping
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchBag: bagActions.fetchBag,
    removeProductFromBag: bagActions.removeProductFromBag
  }, dispatch);
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(ShoppingBag);
