var React = require('react');

var ProductDetails = React.createClass({


    propTypes: {
      name: React.PropTypes.string.isRequired,
      price: React.PropTypes.number.isRequired,
      description: React.PropTypes.string,
      measures: React.PropTypes.arrayOf(React.PropTypes.string)
    },


  getDefaultProps: function (){
    return {
      name: 'Saia Mid Velvet',
      price: 230.00,
      description: 'Saia mid em veludo, na cor preta com acabamentos da barra à fio.',
      measures: ['Cintura', 'Pernas']
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
      <div className="detalhes-produto">

        <div>
          <h3>{this.props.name}</h3>
        </div>
        <div>
          <h5>R$ {this.props.price}</h5>
        </div>
        <div className="descricao">
          {this.props.description}
        </div>
        <div className="medidas">
          {measureFields}
        </div>
        <div className="comprar-produto">
          <button>Comprar</button>
        </div>
      </div>
    );
  }
});

module.exports = ProductDetails;
