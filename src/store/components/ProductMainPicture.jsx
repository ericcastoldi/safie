var React = require('react');

var ProductMainPicture = React.createClass({

  propTypes: {
    picture: React.PropTypes.string.isRequired
  },

  getDefaultProps: function (){
    return {
      picture: '/img/demo/lookbook13.jpg'
    };
  },

  render: function(){
    return (
      <div className="foto-principal-produto">
        <img src={this.props.picture} />
      </div>
    );
  }
});

module.exports = ProductMainPicture;
