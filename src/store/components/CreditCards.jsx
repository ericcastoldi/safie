var React = require('react');

var CreditCards = React.createClass({
  render: function(){
    return (
      <div className="cartoes-de-credito">
        <img src="https://stc.pagseguro.uol.com.br/public/img/banners/divulgacao/120x240_10X_pagseguro.gif" alt="Banner PagSeguro" title="Parcele suas compras em até 18x" />
      </div>
    );
  }
});

module.exports = CreditCards;
