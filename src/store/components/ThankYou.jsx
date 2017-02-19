import React from 'react';
import { Link } from 'react-router';


class ThankYou extends React.Component {

  constructor() {
    super();
  }

  render() {

    return (
      <div className="conteudo-c">
        <div className="container">
          <div className="row">
            <div className="conteudo-agradecimento">
              <div className='box-agradecimento'>
                <div className="titulo-agradecimento">
                  <h4> Sua compra foi realziada com sucesso </h4>
                </div>
                <p>Muito obrigada por confiar em nós</p>
                <p>Em breve você receberá um produto unico e feito especialmente para você</p>

                <Link to="/my-safie">
                  <button className="button gray-button">Acompanhar meu pedido</button>
                </Link>
              </div>
              <p>Aproveite e venha se inspirar com a gente</p>
              <img src="img/agradecimento.jpg" width="250" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


module.exports = ThankYou;
