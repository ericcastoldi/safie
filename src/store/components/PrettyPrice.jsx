import React from 'react';

class PrettyPrice extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const price = this.props.price || 0;
    const prettyPrice = price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    return (
      <span>{prettyPrice}</span>
    );
  }
}

PrettyPrice.propTypes = {
  price: React.PropTypes.number
};


module.exports = PrettyPrice;
