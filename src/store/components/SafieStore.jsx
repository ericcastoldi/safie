var React = require('react');
var Header = require('./Header.jsx');
var Menu = require('./Menu.jsx');
var Footer = require('./Footer.jsx');

var SafieStore = React.createClass({

  propTypes: {
    children: React.PropTypes.node.isRequired
  },

  render: function () {
    return (
      <div className="safie-store">

        <Header />

        <Menu />

        <div className="conteudo-loja">
          {this.props.children}
        </div>

        <Footer />

      </div>
    );
  }
});

module.exports = SafieStore;
