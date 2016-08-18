var React = require('react');
var Header = require('./Header.jsx');
var Menu = require('./Menu.jsx');
var ProductGrid = require('./ProductGrid.jsx');
var Footer = require('./Footer.jsx');

var SafieStore = React.createClass({

  render: function () {
    return (
      <div>
        <Header />
        <Menu />
        <ProductGrid />
        <Footer />
      </div>
    );
  }
});

module.exports = SafieStore;
