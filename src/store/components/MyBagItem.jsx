import React from 'react';
import PrettyPrice from './PrettyPrice.jsx';
import bag from './state/bag.js';
import product from './state/product.js';

class MyBagItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const id = this.props.itemId;
    const prod = this.props.product;
    const picture = prod.pictures.paths[prod.pictures.product];

    return (
      <div className="my-bag-item">
        <img src={picture} alt={prod.name.toUpperCase()} width="150" />

        <i
          className="fa fa-times-circle-o"
          aria-hidden="true"
          onClick={() => { this.props.removeProductFromBag(id); }}>
        </i>

        <p>{prod.name}</p>
        <p><PrettyPrice price={prod.price} /></p>
      </div>
    );
  }
}


MyBagItem.propTypes = {
  itemId: React.PropTypes.string,
  product: React.PropTypes.shape(product.shape),
  removeProductFromBag: React.PropTypes.func.isRequired
};

module.exports = bag.connect(MyBagItem);
