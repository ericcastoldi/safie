import React from 'react';

class ProductColorLabel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span>Cor: <b>{this.props.color.name}</b></span>
    );
  }
}

ProductColorLabel.propTypes = {
  color: React.PropTypes.object
};

module.exports = ProductColorLabel;
