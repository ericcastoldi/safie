var React = require('react');
var Link = require('react-router').Link;

var Menu = React.createClass({
  render: function(){
    return (
      <nav className="menu">
        <Link to="/">Loja</Link>
        <Link to="/">Coleções</Link>
        <Link to="/">Look Book</Link>
        <Link to="/">Promoções</Link>
        <Link to="/">Contato</Link>
      </nav>
    );
  }
});

module.exports = Menu;
