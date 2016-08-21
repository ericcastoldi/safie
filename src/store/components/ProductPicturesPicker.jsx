var React = require('react');

var ProductPicturesPicker = React.createClass({

  propTypes: {
    picturePicked: React.PropTypes.func,
    pictures: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
  },

  renderThumbnails: function(){
    return this.props.pictures.map(function(pic, index) {
      return (
        <div key={index}
            onMouseEnter={this.props.picturePicked.bind(null, pic)}
            className="thumbnail-produto">
          <img src={pic} />
        </div>
      );
    }.bind(this));
  },

  render: function(){

    var thumbnails = this.renderThumbnails();

    return (
        <div>
          {thumbnails}
        </div>
    );
  }
});

module.exports = ProductPicturesPicker;
