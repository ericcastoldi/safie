var React = require('react');


var ProductInfoLayout = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired,
    description: React.PropTypes.string
  },

  render: function () {
    return (
      <div className="informacoes-produto">
        {this.props.children}
        <p>{this.props.description}</p>
      </div>
    );
  }
});

module.exports = ProductInfoLayout;
