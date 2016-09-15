var React = require('react');
var Link = require('react-router').Link;

var Menu = React.createClass({
  render: function () {
    return (
      <nav className="menu">
        <Link to="/">Home</Link>
        <Link to="/">Coleções</Link>
        <Link to="/">My Safie</Link>
        <Link to="/">Sobre Nós</Link>
        <Link to="/">Contato</Link>
      </nav>
    );
  }
});

module.exports = Menu;
