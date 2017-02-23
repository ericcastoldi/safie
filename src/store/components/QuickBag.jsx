import React from 'react';
import PrettyPrice from './PrettyPrice.jsx';
import { Link } from 'react-router';
import bag from './state/bag.js';

class QuickBag extends React.Component {

  constructor() {
    super();

    this.toggle = this.toggle.bind(this);
    this.renderItems = this.renderItems.bind(this);
  }

  toggle() {
    this.props.toggleQuickBag();
  }

  render() {
    let cssClasses = ['quickbag'];
    if (this.props.quickBagOpened) {
      cssClasses.push('open');
    }

    const items = this.renderItems();
    return (
      <div
        id="quickbag"
        className={cssClasses.join(' ')}>
        <i
          aria-hidden="true"
          onClick={this.toggle}
          className="fa fa-shopping-bag fa-2x">
        </i>
        <div className="items">

          {items}

        </div>
      </div>
    );
  }

  renderItems() {
    if (this.props.fetching || this.props.adding || this.props.removing ||
      (!this.props.items || Object.keys(this.props.items).length === 0)) {
      return null;
    }

    return Object
      .keys(this.props.items)
      .map(function (itemId, index) {

        var item = this.props.items[itemId];
        var product = item.product;
        var route = '/colecoes/barcelona/' + product.id;
        var picture = product.pictures.paths[product.pictures.product];

        return (
          <div className="quickbag-item" key={index}>
            <img src={picture} alt={product.name.toUpperCase()} />
            <i
              className="fa fa-times-circle-o"
              aria-hidden="true"
              onClick={() => {
                this
                  .props
                  .removeProductFromBag(itemId);
              }}>
            </i>
            <p>
              <Link to={route}>{product.name}</Link>
              <br />
              <PrettyPrice price={product.price} />
            </p>
          </div>
        );
      }.bind(this));

  }
}

QuickBag.propTypes = bag.shape;
module.exports = bag.connect(QuickBag);
