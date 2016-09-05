var React = require('react');
var PolicyItem = require('./PolicyItem.jsx');

var PolicyCard = React.createClass({
  propTypes: {
    policy: React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      items: React.PropTypes.arrayOf(
       React.PropTypes.shape({
          title: React.PropTypes.string.isRequired,
          route: React.PropTypes.string
        })
      ).isRequired
    }).isRequired
  },

  getDefaultProps: function() {
    return {
      name: 'Central de Atendimento',
      items: [
        {
          title: 'Fale Conosco',
          route: ''
        },
        {
          title: 'atendimento@safie.com.br'
        },
        {
          title: 'Telefone: (47) 3321-6698'
        },
        {
          title: 'De segunda a sexta das 10 às 17'
        }
      ]
    };
  },


  renderPolicies: function(){
    return this.props.policy.items.map(function(item, index){
      return (
        <li key={index}>
          <PolicyItem item={item} />
        </li>
      );
    });
  },

  render: function(){

    var renderedPolicies = this.renderPolicies();

    return (
      <div className="politicas">
        <h6>{this.props.policy.name}</h6>
        <ul>
          {renderedPolicies}
        </ul>
      </div>
    );
  }
});

module.exports = PolicyCard;
