var React = require('react');
var Link = require('react-router').Link;

var MeasuresButton = React.createClass({
  render: function(){
    return (
      <button className="measures-button">Medidas</button>
    );
  }
});


var SocialIcons = React.createClass({
  render: function(){
    return (
      <div className="social">
        <i className="fa fa-envelope" aria-hidden="true"></i>
        <i className="fa fa-facebook" aria-hidden="true"></i>
        <i className="fa fa-twitter" aria-hidden="true"></i>
        <i className="fa fa-pinterest-p" aria-hidden="true"></i>
      </div>
    );
  }
});


var BuyButton = React.createClass({
  propTypes: {
    label: React.PropTypes.string.isRequired,
    route: React.PropTypes.string.isRequired
  },

  render: function(){
    return (
      <div className="comprar-produto">
        <MeasuresButton />
        <Link to={this.props.route}>
          <button className="buy-button">{this.props.label}</button>
        </Link>
        <SocialIcons />
      </div>
    );
  }
});


module.exports = BuyButton;
