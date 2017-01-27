var React = require('react');
var ProductPicture = require('./ProductPicture.jsx');
var ProductPicturesPicker = require('./ProductPicturesPicker.jsx');

var ProductPicturesViewer = React.createClass({

  propTypes: {
    pictures: React.PropTypes.shape({
      main: React.PropTypes.number.isRequired,
      product: React.PropTypes.number.isRequired,
      paths: React.PropTypes.object
    })
  },

  getInitialState: function (){
    if(this.props.pictures) {
      return {
        activePicture: this.props.pictures.main
      };
    }

    return {
      activePicture: 1
    };
  },

  nextPicture: function(){
    if(Number(this.state.activePicture) === Object.keys(this.props.pictures.paths).length)
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
      this.changeActivePicture(Object.keys(this.props.pictures.paths).length);
      return;
    }

    var next = Number(this.state.activePicture) - 1;
    this.changeActivePicture(next);
  },

  changeActivePicture: function(pic){
    this.setState({activePicture: pic});
  },


  render: function(){

    if(!this.props.pictures){
      return (<div>Carregando imagens...</div>);
    }

    var activePicturePath = this.props.pictures.paths[this.state.activePicture];

    return (
      <div className="picture-viewer">
        <div className="container">
          <div className="row">
            <div className="three columns">
              <ProductPicturesPicker
                pictures={this.props.pictures.paths}
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
