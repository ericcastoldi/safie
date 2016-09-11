var React = require('react');
var Menu = require('./Menu.jsx');
var Logo = require('./Logo.jsx');
var UnderstandButton = require('./UnderstandButton.jsx');

var Landing = React.createClass({

  render: function () {

    return (
      <div>
        <div className="landing">
          <Menu />
          <Logo />
          <UnderstandButton />
        </div>
      </div>
    );
  }
});

module.exports = Landing;
