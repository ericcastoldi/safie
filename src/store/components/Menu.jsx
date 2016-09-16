var React = require('react');
var Link = require('react-router').Link;

var Menu = React.createClass({
  render: function () {
    return (
      <div className="navigation">
        <i className="fa fa-bars" aria-hidden="true"></i>

        <nav className="menu">
          <Link to="/">Home</Link>
          <Link to="/">Coleções</Link>
          <Link to="/">My Safie</Link>
          <Link to="/">Sobre Nós</Link>
          <Link to="/">Contato</Link>
        </nav>
      </div>
    );
  }
});

module.exports = Menu;
