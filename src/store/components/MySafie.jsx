/*eslint no-underscore-dangle: 1*/
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import mysafieActions from './state/mysafieActions.js';
import customerActions from './state/customerActions.js';

class MySafie extends React.Component {

  constructor(props){
    super(props);
  }


  componentDidMount() {
    this.props.fetchCurrentCustomer();
  }


  render() {

    if(!this.props.customer || !this.props.customer._id){
      browserHistory.push('/');
      return null;
    }

    const titleStyle = 'titulo-mysafie';
    const openedStyle = 'aberto titulo-mysafie';
    const boxStyle = 'ten columns cerca';
    const openedBoxStyle = 'ten columns aberto cerca';

    const measurementsBoxStyle = this.props.measurementsOpened ? openedBoxStyle : boxStyle;
    const measurementsTitleStyle = this.props.measurementsOpened ? openedStyle : titleStyle;

    const ordersBoxStyle = this.props.ordersOpened ? openedBoxStyle : boxStyle;
    const ordersTitleStyle = this.props.ordersOpened ? openedStyle : titleStyle;

    const addressesBoxStyle = this.props.addressesOpened ? openedBoxStyle : boxStyle;
    const addressesTitleStyle = this.props.addressesOpened ? openedStyle : titleStyle;

    const bagBoxStyle = this.props.bagOpened ? openedBoxStyle : boxStyle;
    const bagTitleStyle = this.props.bagOpened ? openedStyle : titleStyle;


    return (
      <div className="my-safie">
        <div className="container">
          <h2>My Safie</h2>
          <hr />
          <p className="boas-vindas">Olá, {this.props.customer.name}</p>
          <div className='row'>
            <div className='two columns'>
              <div
                className={measurementsTitleStyle}
                onClick={() => { this.props.toggleMeasurementsBox();}}>
                <p>Minhas Medidas</p>
              </div>
            </div>
            <div className={measurementsBoxStyle}>
              <div className='minhas-medidas'>
                <div className='six columns'>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          Busto
                        </td>
                        <td>

                        </td>
                      </tr>
                      <tr>
                        <td>
                          Cintura
                        </td>
                        <td>

                        </td>
                      </tr>
                      <tr>
                        <td>
                          Quadris
                        </td>
                        <td>

                        </td>
                      </tr>
                      <tr>
                        <td>
                          Ombro a Ombro
                        </td>
                        <td>

                        </td>
                      </tr>
                      <tr>
                        <td>
                          Comprimento Frente
                        </td>
                        <td>

                        </td>
                      </tr>
                      <tr>
                        <td>
                          Largura Costas
                        </td>
                        <td>

                        </td>
                      </tr>
                      <tr>
                        <td>
                          Comprimento manga curta
                        </td>
                        <td>

                        </td>
                      </tr>
                      <tr>
                        <td>
                          Comprimento manga Comprida
                        </td>
                        <td>

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

                        </td>
                      </tr>
                      <tr>
                        <td>
                          Largura da coxa
                        </td>
                        <td>

                        </td>
                      </tr>
                      <tr>
                        <td>
                          Comprimento da perna
                        </td>
                        <td>

                        </td>
                      </tr>
                      <tr>
                        <td>
                          Altura do Joelho
                        </td>
                        <td>

                        </td>
                      </tr>
                      <tr>
                        <td>
                          Largura do Tornozelo
                        </td>
                        <td>

                        </td>
                      </tr>
                      <tr>
                        <td>
                          Altura gancho
                        </td>
                        <td>

                        </td>
                      </tr>
                      <tr>
                        <td>
                          Altura do Busto
                        </td>
                        <td>

                        </td>
                      </tr>
                      <tr>
                        <td>
                          Altura da cintura
                        </td>
                        <td>

                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='two columns'>
              <div
                className={ordersTitleStyle}
                onClick={() => { this.props.toggleOrdersBox();}}>
                <p>Meus <br/> Pedidos</p>
              </div>
            </div>
            <div className={ordersBoxStyle}>
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
            </div>
          </div>
          <div className='row'>
            <div className='two columns'>
              <div
                className={addressesTitleStyle}
                onClick={() => { this.props.toggleAddressesBox();}}>
                <p>Meus <br /> enderecos</p>
              </div>
            </div>
            <div className={addressesBoxStyle}>
              <div className='my-address'>
                <div className='row'>
                  <div className='one columns'>
                    <input type='checkbox'/>
                  </div>
                  <div className='eleven columns'>
                    <div className='address'>
                      <p>Nome da cliente</p>
                      <p>Rua nome da rua,numero</p>
                      <p>Bairro</p>
                      <p>Cidade</p>
                      <p>22222-222</p>
                      <p>Brasil</p>
                      <i className="fa fa-times-circle-o" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='one columns'>
                    <input type='checkbox'/>
                  </div>
                  <div className='eleven columns'>
                    <div className='address'>
                      <p>Nome da cliente</p>
                      <p>Rua nome da rua,numero</p>
                      <p>Bairro</p>
                      <p>Cidade</p>
                      <p>22222-222</p>
                      <p>Brasil</p>
                      <i className="fa fa-times-circle-o" aria-hidden="true"></i>
                    </div>
                    <div className='new-address'>
                      <button className='new-address-button'><i className="fa fa-plus-square-o" aria-hidden="true"></i> Adicionar Novo endereco</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='two columns'>
              <div
                className={bagTitleStyle}
                onClick={() => { this.props.toggleBagBox();}}>
                <p>Meu<br/>carrinho</p>
              </div>
            </div>
            <div className={bagBoxStyle}>
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MySafie.propTypes = {
  customer: React.PropTypes.shape({
    _id: React.PropTypes.string,
    name: React.PropTypes.string
  }),
  measurementsOpened: React.PropTypes.bool,
  ordersOpened: React.PropTypes.bool,
  addressesOpened: React.PropTypes.bool,
  bagOpened: React.PropTypes.bool,
  toggleMeasurementsBox: React.PropTypes.func,
  toggleOrdersBox: React.PropTypes.func,
  toggleAddressesBox: React.PropTypes.func,
  toggleBagBox: React.PropTypes.func,
  fetchCurrentCustomer: React.PropTypes.func.isRequired
};
//
// DarkButton.defaultProps = {
//   disabled: false,
//   label: 'OK'
// };

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    toggleMeasurementsBox: mysafieActions.toggleMeasurementsBox,
    toggleOrdersBox: mysafieActions.toggleOrdersBox,
    toggleAddressesBox: mysafieActions.toggleAddressesBox,
    toggleBagBox: mysafieActions.toggleBagBox,
    fetchCurrentCustomer: customerActions.fetchCurrentCustomer
  }, dispatch);
};

const mapStateToProps = (state) => {
  return {
    customer: state.customer.current,
    measurementsOpened: state.mysafie.measurementsOpened,
    ordersOpened: state.mysafie.ordersOpened,
    addressesOpened: state.mysafie.addressesOpened,
    bagOpened: state.mysafie.bagOpened
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(MySafie);
