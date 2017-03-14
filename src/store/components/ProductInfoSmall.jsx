var React = require('react');
import { Link } from 'react-router';
var ProductTitleSmall = require('./ProductTitleSmall.jsx');
var ProductInfoLayout = require('./ProductInfoLayout.jsx');


var ProductInfoSmall = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    collection: React.PropTypes.string,
    description: React.PropTypes.string,
    id: React.PropTypes.string
  },

  render: function () {

    var route = '/colecoes/' + this.props.collection + '/' + this.props.id;

    return (
      <ProductInfoLayout description={this.props.description}>
        <Link to={route}>
          <ProductTitleSmall name={this.props.name} />
        </Link>
      </ProductInfoLayout>
    );
  }
});

module.exports = ProductInfoSmall;
