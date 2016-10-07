var React = require('react');
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;
var productActions = require('./state/productActions.js');


var SizeForm = React.createClass({

  propTypes: {
    measures: React.PropTypes.object,
    dismiss: React.PropTypes.func.isRequired,
    setProductMeasures: React.PropTypes.func.isRequired
  },

  getInitialState: function() {
      return { measures: this.props.measures };
  },

  onChange: function (event, measure) {
    var measures = {};
    measures[measure] = event.target.value;

    this.setState({measures: measures});
  },

  setMeasures: function(){
    this.props.setProductMeasures(this.state.measures);
    this.props.dismiss();
  },

  render: function () {

    if(!this.props.measures){
      return (<div>Carregando medidas...</div>);
    }

    var renderedMeasures = this.renderMeasures();

    return (
      <div className="form-medidas">
        <div className="close-popup">
          <i onClick={this.props.dismiss} className="fa fa-close" aria-hidden="true"></i>
        </div>
        {renderedMeasures}
        <button className="buy-button" onClick={this.setMeasures}>
          Definir Medidas
        </button>
      </div>
    );
  },

  renderMeasures: function () {
    var measuresMap = Object.keys(this.props.measures).map(function (measure, index) {
      return (
        <input
          type="text"
          key={index}
          placeholder={measure.toUpperCase()}
          onChange={event => this.onChange(event, measure)}
        />
      );
    }.bind(this));

    return measuresMap;
  }
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setProductMeasures: productActions.setProductMeasures
  }, dispatch);
}

module.exports = connect(null, mapDispatchToProps)(SizeForm);
