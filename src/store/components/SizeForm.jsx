var React = require('react');

var SizeForm = React.createClass({

  propTypes: {
    measures: React.PropTypes.object
  },
  render: function () {

    var renderedMeasures = this.renderMeasures();

    return (
      <div className="form-medidas">
        {renderedMeasures}
      </div>
    );
  },

  renderMeasures: function () {
    var measuresMap = Object.keys(this.props.measures).map(function (measure, index) {
      return (<input type="text" key={index} placeholder={measure}/>);
    });

    return measuresMap;
  }
});

module.exports = SizeForm;
