var React = require('react');
var Link = require('react-router').Link;
var ProductPicture = require('./ProductPicture.jsx');
var ProductInfoSmall = require('./ProductInfoSmall.jsx');
var MeasurementsInfo = require('./MeasurementsInfo.jsx');

var ProductCardHorizontal = React.createClass({

  propTypes: {
    product: React.PropTypes.shape({
      picture: React.PropTypes.string.isRequired,
      name: React.PropTypes.string,
      route: React.PropTypes.string.isRequired,
      price: React.PropTypes.number.isRequired,
      measurements: React.PropTypes.object
    }).isRequired
  },

  render: function () {

    var product = this.props.product;

    return (
      <div className="produto-sacola">
        <Link to={product.route}>
          <ProductPicture picture={product.picture} description={product.name} />
          <ProductInfoSmall
            name={product.name}
            description={product.description} />
          <MeasurementsInfo measurements={product.measurements}/>
        </Link>
      </div>
    );
  }
});

module.exports = ProductCardHorizontal;
