var React = require('react');

var ProductPicture = React.createClass({

  propTypes: {
    picture: React.PropTypes.string.isRequired,
    description: React.PropTypes.string
  },

  render: function(){
    return (
      <div className="foto-produto">
        <img src={this.props.picture} alt={this.props.description} />
      </div>
    );
  }
});

module.exports = ProductPicture;
