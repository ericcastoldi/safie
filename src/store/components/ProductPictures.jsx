var React = require('react');

var ProductPictures = React.createClass({

  propTypes: {
    pictures: React.PropTypes.arrayOf(React.PropTypes.string)
  },

  getDefaultProps: function (){
    return {
      pictures: [
        '/img/demo/lookbook13.jpg',
        '/img/demo/lookbook14.jpg',
        '/img/demo/lookbook15.jpg',
        '/img/demo/detalhe-saia.jpg'
      ]
    };
  },

  renderThumbnails: function(){
    return this.props.pictures.map(function(pic, index) {
      return (
        <div key={index} className="thumbnail-container">
          <img src={pic} />
        </div>
      );
    });
  },

  render: function(){

    var thumbnails = this.renderThumbnails();

    return (
      <div>
        <div className="foto-principal-produto">
          <img src={this.props.pictures[0]} />
        </div>
        <div className="thumbnails-produto">
          {thumbnails}
        </div>
      </div>
    );
  }
});

module.exports = ProductPictures;
