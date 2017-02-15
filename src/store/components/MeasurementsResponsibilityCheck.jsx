import React from 'react';

class MeasurementsResponsibilityCheck extends React.Component {

  constructor() {
    super();
  }

  render() {

    return (
      <article>

        <h2>Termo de Responsabilidade</h2>

        <p>Visando atender melhor as suas necessidades, nós desejamos fazer uma peça exclusiva para o seu corpo. Para que isso aconteça corretamente, vamos fazer um acordo?</p>
        <p>
          Ao aceitar o nosso termo de responsabilidade, você declara que:
          <ol>
            <li>Todas as informações que forneci são verdadeiras.</li>
            <li>Tenho consciência que a peça escolhida será produzida a partir das informações por mim preenchidas, não sendo permitidas alterações após a compra. Além disso, sei que possíveis erros nas medidas fornecidas serão de minha responsabilidade.</li>
            <li>Li as recomendações contidas na área "MEDIDAS" deste site, e consigo aferir minhas medidas corretamente.</li>
          </ol>
          <p>Ah! Mais uma coisa, suas medidas estão salvas na área MY SAFIE. Certifique-se que elas estão atualizadas e de acordo com seu corpo no momento presente.</p>
          <p>Para mais esclarecimentos, leia as "Políticas & Termos de uso".</p>
          <p>Se você ainda estiver com duvidas, por favor, não hesite em nos contatar!</p>
          <p>Boas compras!</p>
        </p>
      </article>
    );
  }
}

MeasurementsResponsibilityCheck.propTypes = {
  confirmMeasurements: React.PropTypes.func
};


module.exports = MeasurementsResponsibilityCheck;
