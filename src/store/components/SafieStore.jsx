var React = require('react');
var Header = require('./Header.jsx');
var Footer = require('./Footer.jsx');

var SafieStore = React.createClass({

  render: function () {
    return (
      <div>
        <Header />
        <div className="spacer-band"></div>
        <Footer />
      </div>
    );
  }
});

module.exports = SafieStore;
