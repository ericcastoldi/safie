var React = require('react');

var ProductDescription = React.createClass({


    propTypes: {
      caption: React.PropTypes.string.isRequired,
      price: React.PropTypes.number.isRequired,
      description: React.PropTypes.string,
      measures: React.PropTypes.arrayOf(React.PropTypes.string)
    },


  getDefaultProps: function (){
    return {
      caption: 'Saia Mid Velvet',
      price: 230.00,
      description: 'Saia mid em veludo, na cor preta com acabamentos da barra à fio.',
      measures: ['Cintura']
     };
  },

  renderMeasures: function(){
    var measuresMap = this.props.measures.map(function(measure, index){
      return (
        <input type="text" key={index} placeholder={measure} />
      );
    });

    return measuresMap;
  },

  render: function(){

    var measureFields = this.renderMeasures();

    return (
      <div>

        <div className="titulo-produto">
          {this.props.caption}
        </div>
        <div className="preco-produto">
          {this.props.price}
        </div>
        <div className="descricao-produto">
          {this.props.description}
        </div>
        <div className="medidas-produto">
          {measureFields}
        </div>
        <div className="comprar-produto">
          <div className="botao-comprar-produto">
            <a href="#">Adicionar à Sacola de Compras</a>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ProductDescription;
