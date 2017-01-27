import React from 'react';

class MyOrders extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div className='meus-pedidos'>
        <div className='row'>
          <div className='twelve columns'>
            <div className='row'>
              <div className='six columns peca'>
                <div className='row'>
                  <div className='four columns'>
                    <img src='img/demo/saia-lapis-detalhe.jpg' width="100" />
                  </div>
                  <div className='eight columns'>
                    <p><strong>Descricao:</strong> Texto da peca</p>
                    <p><strong>Medidas:</strong> 12.24 | 12.24...</p>
                    <p><strong>Prazo de Entrega:</strong> 20 dias</p>
                  </div>
                </div>
              </div>
              <div className='six columns peca'>
                <div className='row'>
                  <div className='six columns obs'>
                    <p><strong>Observacoes:</strong> texto da cliente</p>
                    <p><strong>Frete:</strong> R$12,34</p>

                  </div>
                  <div className='six columns obs'>
                    <p><strong>Pedido:</strong> <span className='pedido-status'>Concluído</span></p>

                    <p><strong>Valor:</strong> R$123,45</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='six columns peca'>
                <div className='row'>
                  <div className='four columns'>
                    <img src='img/demo/saia-lapis-detalhe.jpg' width="100" />
                  </div>
                  <div className='eight columns'>
                    <p><strong>Descricao:</strong> Texto da peca</p>
                    <p><strong>Medidas:</strong> 12.24 | 12.24...</p>
                    <p><strong>Prazo de Entrega:</strong> 20 dias</p>
                  </div>
                </div>
              </div>
              <div className='six columns peca'>
                <div className='row'>
                  <div className='six columns obs'>
                    <p><strong>Observacoes:</strong> texto da cliente</p>
                    <p><strong>Frete:</strong> R$12,34</p>

                  </div>
                  <div className='six columns obs'>
                    <p><strong>Pedido:</strong> <span className='pedido-status'>Concluído</span></p>

                    <p><strong>Valor:</strong> R$123,45</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='six columns peca'>
                <div className='row'>
                  <div className='four columns'>
                    <img src='img/demo/saia-lapis-detalhe.jpg' width="100" />
                  </div>
                  <div className='eight columns'>
                    <p><strong>Descricao:</strong> Texto da peca</p>
                    <p><strong>Medidas:</strong> 12.24 | 12.24...</p>
                    <p><strong>Prazo de Entrega:</strong> 20 dias</p>
                  </div>
                </div>
              </div>
              <div className='six columns peca'>
                <div className='row'>
                  <div className='six columns obs'>
                    <p><strong>Observacoes:</strong> texto da cliente</p>
                    <p><strong>Frete:</strong> R$12,34</p>

                  </div>
                  <div className='six columns obs'>
                    <p><strong>Pedido:</strong> <span className='pedido-status'>Concluído</span></p>

                    <p><strong>Valor:</strong> R$123,45</p>
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

module.exports = MyOrders;
