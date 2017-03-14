import React from 'react';
import { Link } from 'react-router';
import LightButton from './LightButton.jsx';
import DarkButton from './DarkButton.jsx';
import ProductPrice from './ProductPrice.jsx';
import ProductCardHorizontal from './ProductCardHorizontal.jsx';
import bag from './state/bag.js';
import LoadingRipple from './LoadingRipple.jsx';
import PrettyPrice from './PrettyPrice.jsx';

class ShoppingBag extends React.Component {

  constructor() {
    super();

    this.renderDataRows = this.renderDataRows.bind(this);

    this.renderTotal = this.renderTotal.bind(this);
    this.renderSubTotal = this.renderSubTotal.bind(this);
    this.renderTotalItems = this.renderTotalItems.bind(this);

    this.renderShipping = this.renderShipping.bind(this);
    this.renderShippingPrice = this.renderShippingPrice.bind(this);
    this.renderShippingDetails = this.renderShippingDetails.bind(this);

    this.checkShippingPrice = this.checkShippingPrice.bind(this);

    this.state = {
      cep: ''
    };
  }

  patch(item, change) {
    const ptch = {
      item: item,
      change: change
    };

    this.props.patch(ptch);
  }

  render() {

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

              <br />

              <Link to='/colecoes/continua'>
                <LightButton label="Continuar Comprando" />
              </Link>

              <DarkButton click={this.props.checkout} label="Finalizar Compra" />

            </div>
          </div>
        </div>
      </div>
    );
  }

  renderTotal() {

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
  }

  renderSubTotal() {
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
  }

  renderTotalItems() {
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
  }

  renderShippingPrice() {
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
  }

  checkShippingPrice() {
    this.props.checkShippingPrice(this.state.cep);
  }

  renderShipping() {

    const shippingDetails = this.renderShippingDetails();

    return (
      <div className="frete">
        <h4>Frete</h4>
        <input
          type="text"
          onChange={event => this.setState({ cep: event.target.value })}
          placeholder="Informe seu cep" />
        <button onClick={this.checkShippingPrice} className="light-button">Calcular</button>
        {shippingDetails}
      </div>
    );

  }

  renderShippingDetails() {
    if (this.props.shipping) {
      const addr = this.props.shipping.address;
      return (
        <p>
          O frete para o CEP
          <strong> {addr.code} </strong>
          é
          <strong> <PrettyPrice price={this.props.shipping.price} /></strong>
        </p>
      );
    }
    return null;
  }

  renderDataRows() {

    return Object
      .keys(this.props.items)
      .map(function (itemId, index) {

        var item = this.props.items[itemId];
        var product = item.product;
        var options = item.options;

        return (
          <tr key={index}>
            <td>
              <ProductCardHorizontal
                patch={change => this.patch(itemId, change)}
                product={product}
                options={options}
                measurementsPopupOpen={this.props.measurementsPopupOpen}
                openMeasurementsPopup={this.props.openMeasurementsPopup}
                closeMeasurementsPopup={this.props.closeMeasurementsPopup} />
            </td>
            <td>
              <ProductPrice price={product.price} />
            </td>
            <td>
              <a href="#" onClick={() => {
                this.props.removeProductFromBag(itemId);
              }}>
                x
              </a>
            </td>
          </tr>
        );
      }.bind(this));
  }

}

ShoppingBag.propTypes = bag.shape;
module.exports = bag.connect(ShoppingBag);
