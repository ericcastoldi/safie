import React from 'react';

class ProductColorLabel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const color = this.props.color && this.props.color.name ? this.props.color.name : 'Oops. Não conseguimos identificar a cor escolhida.';

    return (
      <span>Cor: <strong>{color}</strong></span>
    );
  }
}

ProductColorLabel.propTypes = {
  color: React.PropTypes.object
};

module.exports = ProductColorLabel;
