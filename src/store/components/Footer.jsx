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
/*
<div class="links-rodape">
<h4>Central de Atendimento</h4>
<p><a href="http://crisbarros.com.br/contato">Fale Conosco</a></p>
<p><a href="mailto:atendimento@crisbarros.com.br">atendimento@crisbarros.com.br</a></p>
<p><strong>Telefone:</strong> (11) 4210-0170<br>De segunda a sexta das 10 as 17h</p>
</div>
<div class="links-rodape">
<h4>Informações</h4>
<p><a href="http://crisbarros.com.br/sales/order/history/">Meus Pedidos</a></p>
<p><a href="http://crisbarros.com.br/trocas-e-devolucoes">Trocas e Devoluções</a></p>
<p><a href="http://crisbarros.com.br/central-de-atendimento#politica-de-entrega">Prazos de Entrega</a></p>
<p><a href="http://crisbarros.com.br/central-de-atendimento#politica-de-pagamentos">Pagamentos</a></p>
</div>
<div class="links-rodape">
<h4>Pagamentos e Segurança</h4>
<p><strong>Cartão de Crédito:</strong></p>
<p><a href="#">Parcelamento em até 5x sem juros.<br>Parcela mínima de R$ 300,00.</a></p>
<p><img title="Formas de Pagamento" src="http://crisbarros.com.br/skin/frontend/default/ma_sahara_fashion14/images/icon-bandeiras.gif" alt="Formas de Pagamento" draggable="true"></p>
</div>

*/
  render: function () {
    return (
      <div className="footer-band">
        <div className="container">
          <div className="row">
            <div className="twelve columns">
              <div className="politica">
                <PolicyCard policy={this.props.policies[0]}/>
              </div>
              <div className="politica">
                <PolicyCard policy={this.props.policies[1]}/>
              </div>
              <div className="politica">
                <PolicyCard policy={this.props.policies[2]}/>
                <CreditCards />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Footer;
