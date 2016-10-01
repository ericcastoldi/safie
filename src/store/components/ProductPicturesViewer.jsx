var React = require('react');
var ProductPicture = require('./ProductPicture.jsx');
var ProductPicturesPicker = require('./ProductPicturesPicker.jsx');

var ProductPicturesViewer = React.createClass({

  getInitialState: function (){
    return {
      activePicture: 1,
      pictures: {
        1: '/img/demo/lookbook13.jpg',
        2: '/img/demo/lookbook14.jpg',
        3: '/img/demo/lookbook15.jpg',
        4: '/img/demo/detalhe-saia.jpg'
      }
    };
  },

  nextPicture: function(){
    if(Number(this.state.activePicture) === Object.keys(this.state.pictures).length)
    {
      this.changeActivePicture(1);
      return;
    }

    var next = Number(this.state.activePicture) + 1;
    this.changeActivePicture(next);
  },

  previousPicture: function(){
    if(Number(this.state.activePicture) === 1)
    {
      this.changeActivePicture(Object.keys(this.state.pictures).length);
      return;
    }

    var next = Number(this.state.activePicture) - 1;
    this.changeActivePicture(next);
  },

  changeActivePicture: function(pic){
    this.setState({activePicture: pic});
  },


  render: function(){

    var activePicturePath = this.state.pictures[this.state.activePicture];

    return (
      <div className="picture-viewer">
        <div className="container">
          <div className="row">
            <div className="three columns">
              <ProductPicturesPicker
                pictures={this.state.pictures}
                activePicture={this.state.activePicture}
                picturePicked={this.changeActivePicture} />
            </div>
            <div className="nine columns">
              <div className="foto-principal-produto">
                <i onClick={this.previousPicture} className="fa fa-angle-double-left fa-2" aria-hidden="true"></i>
                <ProductPicture picture={activePicturePath} />
                <i onClick={this.nextPicture} className="fa fa-angle-double-right fa-2" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ProductPicturesViewer;
