var React = require('react');
var PolicyCard = require('./PolicyCard.jsx');
var CreditCards = require('./CreditCards.jsx');

var Footer = React.createClass({

  propTypes: {
    policies: React
      .PropTypes
      .arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        items: React
          .PropTypes
          .arrayOf(React.PropTypes.shape({title: React.PropTypes.string.isRequired, route: React.PropTypes.string}))
          .isRequired
      }))
      .isRequired
  },

  getDefaultProps: function () {
    return {
      policies: [
        {
          name: 'Central de Atendimento',
          items: [
            {
              title: 'Fale Conosco',
              route: ''
            }, {
              title: 'atendimento@safie.com.br'
            }, {
              title: 'Telefone: (47) 3321-6698'
            }, {
              title: 'De segunda a sexta das 10 às 17'
            }
          ]
        }, {
          name: 'Informações',
          items: [
            {
              title: 'Meus pedidos',
              route: '/meus-pedidos'
            }, {
              title: 'Trocas e Devoluções',
              route: '/politica-de-trocas'
            }, {
              title: 'Prazos de Entrega',
              route: '/prazos'
            }, {
              title: 'Pagamentos',
              route: '/pagamentos'
            }
          ]
        }, {
          name: 'Pagamentos e Segurança',
          items: [
            {
              title: 'Cartão de Crédito'
            }, {
              title: 'Parcelamento em até 5x sem juros'
            }, {
              title: 'Parcela mínima de R$ 300,00.'
            }
          ]
        }
      ]
    };
  },

  render: function () {
    return (
      <div className="footer-band">
        <div className="container">
          <div className="row">
            <div className="two columns politica">
              <PolicyCard policy={this.props.policies[0]}/>
            </div>
            <div className="two columns politica">
              <PolicyCard policy={this.props.policies[1]}/>
            </div>
            <div className="three columns politica">
              <PolicyCard policy={this.props.policies[2]}/>
              <CreditCards />
            </div>
            <div className="five columns"></div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Footer;
