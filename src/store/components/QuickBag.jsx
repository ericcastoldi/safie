import React from 'react';
import bag from './state/bag.js';
import {Link} from 'react-router';

var QuickBag = React.createClass({
  propTypes: {
    fetchBag: React.PropTypes.func.isRequired,
    quickBagOpened: React.PropTypes.bool.isRequired,
    toggleQuickBag: React.PropTypes.func.isRequired,
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

  toggle: function(){
    this.props.toggleQuickBag();
  },

  render: function () {
    let cssClasses = ['quickbag'];
    if(this.props.quickBagOpened) {
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
  },

  renderItems: function() {
    if(this.props.fetching || this.props.adding || this.props.removing ||
      (!this.props.items || Object.keys(this.props.items).length === 0)) {
      return null;
    }

    return Object
      .keys(this.props.items)
      .map(function (itemId, index) {

        var item = this.props.items[itemId];
        var product = item.product;
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
            <p>{product.name}<br />R$ {product.price}</p>
          </div>
        );
      }.bind(this));

  }
});


module.exports = bag.connect(QuickBag);
