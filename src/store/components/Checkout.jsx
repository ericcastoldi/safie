import React from 'react';
import { Link } from 'react-router';


class Checkout extends React.Component {

  constructor() {
    super();
  }

  render() {


    return (
      <div className="conteudo-c">
        <div className="container">
          <div className="row">
             <div className="conteudo-checkout">
                <div className="row">
                  <div className="six columns">
                    <h4>Resumo do Pedido</h4>
                    <div className="box">
                        <div className="inside-box">
                            <div className="row">
                              <div className="eight columns">
                                <p>1 saia lápis</p>
                                <p>1 vestiodo essence</p>
                              </div>
                              <div className="four columns">
                                  <p>R$ 100,00</p>
                                  <p>R$ 100,00</p>
                              </div>
                            </div>
                        </div>
                      <div className="inside-box">
                            <div className="row">
                              <div className="eight columns">
                                <p>Frete</p>
                              </div>
                              <div className="four columns">
                                  <p>R$ 20,00</p>
                              </div>
                            </div>
                        </div>
                      <div className="inside-box">
                            <div className="row">
                              <div className="eight columns">
                                <p><strong>Total a pagar</strong></p>
                              </div>
                              <div className="four columns">
                                <p><strong>R$ 20,00</strong></p>
                              </div>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className="six columns">
                    <h4>Endereço da entrega</h4>
                    <div className="box">
                       <div className="row">
                          <div className="six columns">
                            <div className="linha-exterior">
                              <div className="inside-box">
                                <p>Nome cliente</p>
                                <p>Nome Rua/Número</p>
                                <p>Bairro</p>
                                <p>Cidade</p>
                                <p>222222</p>
                                <p>Brasil</p>
                                <p className="alterar-end">Alterar endereço</p>
                              </div>
                            </div>
                          </div>
                          <div className="six columns">
                            <div className="linha-exterior-2">
                              <div className="inside-box">
                                <p>Nome cliente</p>
                                <p>Nome Rua/Número</p>
                                <p>Bairro</p>
                                <p>Cidade</p>
                                <p>222222</p>
                                <p>Brasil</p>
                                <p className="alterar-end">Alterar endereço</p>
                              </div>
                            </div>
                          </div>
                      </div>
                      <div className="row">
                        <div className="new-address">
                      <button className="new-address-button"><i className="fa fa-plus-square-o" aria-hidden="true"></i> Adicionar Novo endereco</button>
                    </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="twelve columns">
                    <div className="box">
                      <p> Você será redirecionado ao pagseguro</p>

                      <Link to="/agradecimento">
                        <button className="button gray-button">Realizar pagamento</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

module.exports = Checkout;
