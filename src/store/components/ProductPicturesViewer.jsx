var React = require('react');
var ProductPicture = require('./ProductPicture.jsx');
var ProductPicturesPicker = require('./ProductPicturesPicker.jsx');

var ProductPicturesViewer = React.createClass({

  getInitialState: function (){
    return {
      activePicture: '/img/demo/lookbook13.jpg',
      pictures: [
        '/img/demo/lookbook13.jpg',
        '/img/demo/lookbook14.jpg',
        '/img/demo/lookbook15.jpg',
        '/img/demo/detalhe-saia.jpg'
      ]
    };
  },

  changeActivePicture: function(pic){
    this.setState({activePicture: pic});
  },


  render: function(){

    return (
      <div>
        <ProductPicture picture={this.state.activePicture} />

        <ProductPicturesPicker
          pictures={this.state.pictures}
          picturePicked={this.changeActivePicture} />
      </div>
    );
  }
});

module.exports = ProductPicturesViewer;
