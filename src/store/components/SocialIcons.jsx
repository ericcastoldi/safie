var React = require('react');

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

module.exports = SocialIcons;
