var React = require('react');

var Subscribe = React.createClass({

  render: function () {
    return (
      <div className="subscribe">
        <h4>Receba as Novidades</h4>
        <input type="text" id="name" placeholder="NOME" />
        <input type="email" id="email" placeholder="E-MAIL" />
        <input type="submit" value="Assinar" />
      </div>
    );
  }
});

module.exports = Subscribe;
