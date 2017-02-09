var React = require('react');

var CreditCards = React.createClass({
  render: function(){
    return (
      <div className="cartoes-de-credito">
        <img src="/img/pagseguro.jpg" alt="PagSeguro" title="Parcele suas compras em até 18x" />
      </div>
    );
  }
});

module.exports = CreditCards;
