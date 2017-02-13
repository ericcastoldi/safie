import React from 'react';
import { Link } from 'react-router';
import LightButton from './LightButton.jsx';
import DarkButton from './DarkButton.jsx';
import ProductPrice from './ProductPrice.jsx';
import ProductCardHorizontal from './ProductCardHorizontal.jsx';
import bag from './state/bag.js';
import LoadingRipple from './LoadingRipple.jsx';
import PrettyPrice from './PrettyPrice.jsx';

var ShoppingBag = React.createClass({

  propTypes: {
    fetchBag: React.PropTypes.func.isRequired,
    checkout: React.PropTypes.func.isRequired,
    removeProductFromBag: React.PropTypes.func.isRequired,
    error: React.PropTypes.object,
    fetching: React.PropTypes.bool,
    doneFetching: React.PropTypes.bool,
    removing: React.PropTypes.bool,
    doneRemoving: React.PropTypes.bool,
    adding: React.PropTypes.bool,
    doneAdding: React.PropTypes.bool,
    shipping: React.PropTypes.object,
    total: React.PropTypes.number,
    items: React.PropTypes.shape(bag.itemShape)
  },

  render: function () {

    if (this.props.fetching || this.props.adding || this.props.removing) {
      return (<LoadingRipple active={true} />);
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
            <div className="five columns">
              {shipping}
            </div>
            <div className="seven columns">
              {total}

              <br/>

              <Link to='/colecoes/barcelona'>
                <LightButton label="Continuar Comprando"/>
              </Link>

              <DarkButton click={this.props.checkout} label="Finalizar Compra"/>

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
          <h4><PrettyPrice price={this.props.total} /></h4>
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
            <td><PrettyPrice price={product.price} /></td>
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
        <td><PrettyPrice price={this.props.shipping.price} /></td>
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
          <strong><PrettyPrice price={this.props.shipping.price} /></strong>
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

module.exports = bag.connect(ShoppingBag);
