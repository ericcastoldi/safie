var React = require('react');
var Link = require('react-router').Link;
var ProductPicture = require('./ProductPicture.jsx');


var BagProduct = React.createClass({

  propTypes: {
    picture: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string,
    route: React.PropTypes.string
  },

  render: function () {
    return (
      <div className="produto-sacola">
        <Link to={this.props.route}>
          <div className="imagem">
            <ProductPicture picture={this.props.picture} description={this.props.name} />
          </div>
          <div className="descricao">
            <h5>{this.props.name}</h5>
            <p>{this.props.description}</p>
          </div>
        </Link>
      </div>
    );
  }
});

module.exports = BagProduct;
