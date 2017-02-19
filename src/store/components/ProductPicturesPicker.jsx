var React = require('react');
var ProductPicture = require('./ProductPicture.jsx');

var ProductPicturesPicker = React.createClass({

  propTypes: {
    picturePicked: React.PropTypes.func,
    activePicture: React.PropTypes.number,
    pictures: React.PropTypes.object
  },

  renderThumbnails: function(){

    return Object.keys(this.props.pictures).map(function(pic, index) {
      var thumbnailCssClasses = [ 'thumbnail-produto' ];

      if(pic === this.props.activePicture.toString()){
        thumbnailCssClasses.push('active');
      }

      return (
        <div key={index}
          onMouseEnter={this.props.picturePicked.bind(null, pic)}
          className={thumbnailCssClasses.join(' ')}>
          <ProductPicture picture={this.props.pictures[pic]} />
        </div>
      );
    }.bind(this));
  },

  render: function(){

    var thumbnails = this.renderThumbnails();

    return (
        <div className="picture-picker">
          {thumbnails}
        </div>
    );
  }
});

module.exports = ProductPicturesPicker;
