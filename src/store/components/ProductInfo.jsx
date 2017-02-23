import React from 'react';

class ProductInfo extends React.Component {

  constructor(props){
    super(props);
  }


  render() {
    return (
      <div className="informacoes-produto">
        <h3>Descrição & Detalhes</h3>
        <p>{this.props.description}</p>
      </div>
    );
  }

}

ProductInfo.propTypes = {
  description: React.PropTypes.string
};


module.exports = ProductInfo;
