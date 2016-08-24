var React = require('react');


var ProductTitle = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
      <h3>{this.props.name}</h3>
    );
  }
});

var ProductTitleSmall = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
      <h5>{this.props.name}</h5>
    );
  }
});


var ProductTitleTiny = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
      <p>{this.props.name}</p>
    );
  }
});



var ProductInfo = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string
  },

  render: function () {
    return (
      <div className="informacoes-produto">
        <div>
          <h3>{this.props.name}</h3>
        </div>

        <div className="descricao">
          {this.props.description}
        </div>

      </div>
    );
  }
});

module.exports = ProductInfo;
