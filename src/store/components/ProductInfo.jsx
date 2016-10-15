var React = require('react');

//var ProductTitle = require('./ProductTitle.jsx');
//var ProductInfoLayout = require('./ProductInfoLayout.jsx');
// var ProductInfo = React.createClass({
//   propTypes: {
//     name: React.PropTypes.string.isRequired,
//     description: React.PropTypes.string
//   },
//
//   render: function () {
//     return (
//       <ProductInfoLayout description={this.props.description}>
//         <ProductTitle name={this.props.name} />
//       </ProductInfoLayout>
//     );
//   }
// });

var ProductInfo = React.createClass({
  propTypes: {
    description: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
      <div className="informacoes-produto">
        <h3>Descrição & Detalhes</h3>
        <p>{this.props.description}</p>
      </div>
    );
  }
});


module.exports = ProductInfo;
