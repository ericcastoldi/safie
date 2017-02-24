import React from 'react';


class UnderstandSafie extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className="safie-funciona">
        <h5>Como a SAFIE funciona</h5>
        <hr className="linha-metade" />
        <div className="limpar">
        </div>

        <p>
          A SAFIE acredita que uma roupa especial pode mudar a confiança de uma pessoa. Por isso nosso processo de produção é todo
                pensado para garantir a sua experiência com cada peça de roupa. Nós criamos uma coleção para você escolher
                sua peça favorita e receber seu pedido com as suas medidas, feito especialmente para o seu corpo. Na SAFIE
                você também pode customizar alguns detalhes da roupa escolhida para ela ficar ainda mais com a sua cara,
                é só nos descrever no campo observações na sacola de compras.
              </p>
        <p>
          Aqui no site você também encontra um guia de como tirar suas medidas bem certinhas para nos enviar e também um tutorial de
                como aproveitar melhor tudo que está disponível em nosso site.
              </p>
        <p>
          Nós nos preocupamos com a sustentabilidade dos nossos processos e do impacto que geramos na natureza e tudo que fazemos é
                pensado para reduzir os riscos para o meio ambiente. Você pode acompanhar junto com a descrição de cada peça
                o que foi preciso para que ela fosse criada com o menor impacto possível.
              </p>
        <p>
          Caso você queira conhecer melhor os materiais com os quais trabalhamos é só solicitar nosso mostruário para ficar por dentro
                de quais tecidos e cores estão disponíveis logo abaixo.
              </p>
        <p>
          Esperamos que sua experiência <strong>SAFIE</strong> seja incrível!
            </p>
      </div>

    );
  }
}

module.exports = UnderstandSafie;
