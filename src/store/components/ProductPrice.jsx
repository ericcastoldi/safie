import React from 'react';
import PrettyPrice from './PrettyPrice.jsx';

class ProductPrice extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <span className="produto-preco">
        <h5><PrettyPrice price={this.props.price} /></h5>
      </span>
    );
  }

}

ProductPrice.propTypes = {
  price: React.PropTypes.number
};


module.exports = ProductPrice;
