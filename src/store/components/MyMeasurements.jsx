import React from 'react';


class MyMeasurements extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div className='minhas-medidas'>
        <div className='six columns'>
          <table>
            <tbody>
              <tr>
                <td>
                  Busto
                </td>
                <td>
                  <span className='medida'>70cm</span>
                </td>
              </tr>
              <tr>
                <td>
                  Cintura
                </td>
                <td>
                  <span className='medida'>66cm</span>
                </td>
              </tr>
              <tr>
                <td>
                  Quadris
                </td>
                <td>
                  <span className='medida'>82cm</span>
                </td>
              </tr>
              <tr>
                <td>
                  Ombro a Ombro
                </td>
                <td>
                  <span className='medida'>62cm</span>
                </td>
              </tr>
              <tr>
                <td>
                  Comprimento Frente
                </td>
                <td>
                  <span className='medida'>89cm</span>
                </td>
              </tr>
              <tr>
                <td>
                  Largura Costas
                </td>
                <td>
                  <span className='medida'>65cm</span>
                </td>
              </tr>
              <tr>
                <td>
                  Comprimento manga curta
                </td>
                <td>
                  <span className='medida'>26cm</span>
                </td>
              </tr>
              <tr>
                <td>
                  Comprimento manga Comprida
                </td>
                <td>
                  <span className='medida'>93cm</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='six columns'>
          <table>
            <tbody>
              <tr>
                <td>
                  Largura do braço
                </td>
                <td>
                  <span className='medida'>29cm</span>
                </td>
              </tr>
              <tr>
                <td>
                  Largura da coxa
                </td>
                <td>
                  <span className='medida'>44cm</span>
                </td>
              </tr>
              <tr>
                <td>
                  Comprimento da perna
                </td>
                <td>
                  <span className='medida'>102cm</span>
                </td>
              </tr>
              <tr>
                <td>
                  Altura do Joelho
                </td>
                <td>
                  <span className='medida'>47cm</span>
                </td>
              </tr>
              <tr>
                <td>
                  Largura do Tornozelo
                </td>
                <td>
                  <span className='medida'>23cm</span>
                </td>
              </tr>
              <tr>
                <td>
                  Altura gancho
                </td>
                <td>
                  <span className='medida'>22cm</span>
                </td>
              </tr>
              <tr>
                <td>
                  Altura do Busto
                </td>
                <td>
                  <span className='medida'>24cm</span>
                </td>
              </tr>
              <tr>
                <td>
                  Altura da cintura
                </td>
                <td>
                  <span className='medida'>33cm</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

module.exports = MyMeasurements;
