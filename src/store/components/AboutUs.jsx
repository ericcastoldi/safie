import React from 'react';

class AboutUs extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="conteudo-c">
        <div className="container">
          <div className="row">
            <div className="conteudo-p">
              <div className='assinatura'>
                <img src='img/logo.png' width="400" />
              </div>
              <p>
                A <strong>SAFIE</strong> é uma marca que já nasce acreditando que podemos mudar o mundo a nossa volta transformando pensamentos. Sabemos que uma roupa especial pode mudar a confiança de uma pessoa, e uma pessoa confiante pode mudar o mundo. Começando pelo seu mundo.
              </p>
              <p>
                A <strong>SAFIE</strong> acredita em equilíbrio. Entre o ambiente, a moda e o corpo, é possível existir sem agredir nenhum  deles. Acredita  que dar  a oportunidade  a alguém  de modificar o que veste, com conteúdo sensível e atemporal é transformador.
              </p>
              <p><strong>É INSPIRADOR.</strong></p>
              <p>
                E para permitir que mais pessoas possam se inspirar e se transformar a SAFIE existe. Queremos criar roupas que contem histórias a partir de materiais e iniciativas sustentáveis e de fácil acesso. E por acreditar na força da conexão, trazemos para o mundo online a possibilidade de encontrar peças exclusivas e sob medida.
              </p>
              <p>
                <strong>
                  Porque cada pessoa merece vestir aquilo que lhe inspira.
                  <br/>
                  Vestir a transformação e a confiança de criar sua própria história!
                </strong>
              </p>
              <img src="/img/sabrine-fabiano.jpg" width="500"/>
              <p>
              </p>
              <p>
                “Com o passar do tempo fui descobrindo que o mundo era cheio de conexões e a vida cheia de ciclos. Construindo aos pouquinhos um sonho entre um ciclo e outro encontrei o Fabiano. Descobrimos que nós dois acreditamos num mundo feito de três partes essenciais, o ambiente, o corpo e a mente: nosso triângulo de equilíbrio. Surgiu aí uma nova conexão e o meu sonho virou o dele também.  Minha paixão pela moda trouxe o meu sonho até aqui e ele foi modelado a partir daquele equilíbrio.Nós trabalhamos muito para poder fazer com que tudo que acreditamos se torne a sua SAFIE de agora. Aproveite!
                Com carinho, Sabrine e Fabiano. "
              </p>
            </div>
          </div>
        </div>

      </div>
    );
  }

}

module.exports = AboutUs;
