import React from 'react';


class SmallBag extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div className='meu-carrinho'>
        <div className='row'>
          <div className='twelve columns'>
            <div className='row'>
              <div className="three columns">
                <img src='img/demo/saia-lapis-detalhe.jpg' width="150" />
                <i className="fa fa-times-circle-o" aria-hidden="true"></i>
                <p>Saia</p>
                <p>R$ 100,00</p>
              </div>
              <div className="three columns">
                <img src='img/demo/saia-lapis-detalhe.jpg' width="150" />
                <i className="fa fa-times-circle-o" aria-hidden="true"></i>
                <p>Saia</p>
                <p>R$ 100,00</p>
              </div>
              <div className="three columns">
                <img src='img/demo/saia-lapis-detalhe.jpg' width="150" />
                <i className="fa fa-times-circle-o" aria-hidden="true"></i>
                <p>Saia</p>
                <p>R$ 100,00</p>
              </div>
              <div className="three columns">
                <img src='img/demo/saia-lapis-detalhe.jpg' width="150" />
                <i className="fa fa-times-circle-o" aria-hidden="true"></i>
                <p>Saia</p>
                <p>R$ 100,00</p>
              </div>
            </div>
            <div className="pedido-info">
              <p><strong>Total:</strong> R$200,00</p>
            </div>
            <div className="limpar">
            </div>
            <div className='new-address'>
              <button className='new-address-button'>Finalizar Pedido</button>
            </div>
          </div>
        </div>
      </div>
    );

  }

}

module.exports = SmallBag;
