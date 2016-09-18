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
      <div className="picture-viewer">
        <div className="container">
          <div className="row">
            <div className="three columns">
              <ProductPicturesPicker
                pictures={this.state.pictures}
                picturePicked={this.changeActivePicture} />
            </div>
            <div className="nine columns">
              <div className="foto-principal-produto">
                <i className="fa fa-angle-double-left fa-2" aria-hidden="true"></i>
                <ProductPicture picture={this.state.activePicture} />
                <i className="fa fa-angle-double-right fa-2" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ProductPicturesViewer;
