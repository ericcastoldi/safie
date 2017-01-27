import React from 'react';

class AmazingSale extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="subscribe-popup">
        <h2>Aproveite nossa<br />AMAZING SALE!</h2>
        <p>Deixe seu e-mail e seja a primeira a receber todos os nossos descontos.</p>
        <div className="actions">
          <input type="email" id="email" placeholder="E-MAIL" />
          <button>Receber Descontos!</button>
        </div>
      </div>
    );
  }
}

module.exports = AmazingSale;
