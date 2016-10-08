var React = require('react');
var DarkButton = require('./DarkButton.jsx');

var Subscribe = React.createClass({

  render: function () {
    return (
      <div className="subscribe">
        <h4>Receba as Novidades</h4>
        <input type="text" id="name" placeholder="NOME" />
        <input type="email" id="email" placeholder="E-MAIL" />
        <DarkButton label="Assinar" />
      </div>
    );
  }
});

module.exports = Subscribe;
