var React = require('react');

var ProductPicture = React.createClass({

  propTypes: {
    picture: React.PropTypes.string.isRequired,
    description: React.PropTypes.string
  },

  getDefaultProps: function (){
    return {
      picture: '/img/demo/lookbook13.jpg',
      description: 'Saia mid em veludo, na cor preta com acabamentos da barra à fio.'
    };
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
