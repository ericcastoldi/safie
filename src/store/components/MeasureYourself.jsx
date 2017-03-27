import React from 'react';
import UnderstandSafie from './UnderstandSafie.jsx';
import main from './state/main.js';


class MeasureYourself extends React.Component {

  constructor(props) {
    super(props);

    this.toggleInfo = this.toggleInfo.bind(this);
  }

  toggleInfo() {
    this.props.toggleInfo();
  }

  render() {

    let cssClasses = ['tabela-medidas'];
    if (this.props.infoExpanded) {
      cssClasses.push('expanded');
    }

    return (
      <div className="container measure-yourself">
        <div className="row">
          <iframe src="https://www.youtube.com/embed/GPP8CgkjWMk?ecver=2" width="100%" height="460" frameBorder="0"></iframe>
          <div className="saiba-mais">
            <span>Saiba mais sobre as medidas</span>
            <hr />
            <i onClick={this.toggleInfo} className="fa fa-arrow-down" aria-hidden="true"></i>
          </div>
          <div className={cssClasses.join(' ')}>
            <h4>Tabela de Medidas</h4>
            <a target="blank" href="/img/medidas.jpg">
              <img src="/img/medidas.jpg" />
            </a>
            <h5>DICAS IMPORTANTES</h5>
            <p>
              <i className="fa fa-caret-up" aria-hidden="true"></i> Evite tirar suas medidas por cima de roupas muito grossas
                ou largas, para que o excesso de tecido não interfira na medida final.
              </p>
            <p>
              <i className="fa fa-caret-up" aria-hidden="true"></i> Deixe sempre o espaço de um dedo entre a fita métrica e
                sua pele, na parte de encontro da fita, evitando assim que a fita fique muito apertada no corpo.
              </p>
            <p>
              <i className="fa fa-caret-up" aria-hidden="true"></i> De preferência, tire suas medidas de pé, em uma posição
                ereta e tente ficar relaxado, não encolha sua barriga, nem tranque o ar nos pulmões, assim você evita que
                ocorram erros nas suas informações.
              </p>
            <p>
              <i className="fa fa-caret-up" aria-hidden="true"></i> Se houver possibilidade peça para que alguém te ajude.
              </p>
            <p className="alinhamento-centro">
              Lembre-se suas medidas ficarão salvas na área MY SAFIE, porém, pedimos que as atualize sempre que houver um espaço de tempo
                entre uma compra e outra, pois sabemos que nosso corpo está sempre em transformação, e nossas medidas podem
                mudar rapidamente. Contamos com você!
            </p>
            <div className="saiba-mais">
              <hr />
              <i onClick={this.toggleInfo} className="fa fa-arrow-up" aria-hidden="true"></i>
            </div>
          </div>
          <UnderstandSafie />
        </div>
        <div className="row">
          <div className="twelve columns">
            <div className="three columns">
              <iframe src="https://www.youtube.com/embed/1ywqjV7WA9k" width="100%" height="220" frameBorder="0"></iframe>
            </div>
            <div className="three columns">
              <img src="img/instagram3.jpg" width="100%" />
            </div>
            <div className="three columns">
              <img src="img/instagram2.jpg" width="100%" />
            </div>
            <div className="three columns">
              <img src="img/instagram1.jpg" width="100%" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MeasureYourself.propTypes = main.shape;


module.exports = main.connect(MeasureYourself);
