var React = require('react');

var BagProductMeasures = React.createClass({

  propTypes: {
    measures: React.PropTypes.object
  },

  render: function () {

    var renderedMeasures = this.renderMeasures();

    return (
      <div className="produto-sacola-medidas">
        {renderedMeasures}
      </div>
    );
  },


  renderMeasures: function(){

    if(!this.props.measures){
      return 'Peça sem especificação de medidas';
    }

    var measuresMap = Object.keys(this.props.measures).map(function(measure, index){

      var measureValue = this.props.measures[measure] ?
        this.props.measures[measure] :
        'Medida não especificada';

      return (
        <p key={index}>
          <span className="medida">{measure}</span>
          <span className="tamanho">{measureValue}</span>
        </p>
      );
    }.bind(this));

    return measuresMap;
  }
});


module.exports = BagProductMeasures;
