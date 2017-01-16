import actionTypes from './actionTypes.js';
import actionFactory from './actionFactory.js';
import modelReducer from './modelReducer.js';

let home = {
  // initialState: null,
  // connect: null,
  // reducer: null
};

home.initialState = {
  subscribePopupOn: false,
  footer: {
    policies: [
      {
        name: 'Central de Atendimento',
        items: [
          {
            title: 'Fale Conosco',
            route: '/fale-conosco'
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
            route: '/politicas/trocas'
          }, {
            title: 'Prazos de Entrega',
            route: '/politicas/entregas'
          }, {
            title: 'Pagamentos',
            route: '/politicas/pagamentos'
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
  }
};

home.dismissSubscribePopup = actionFactory.simpleActionCreator(actionTypes.DISMISS_SUBSCRIBE_POPUP);

home.actionTypeMapping = [];
home.actionTypeMapping[actionTypes.DISMISS_SUBSCRIBE_POPUP] = state => {
  return Object.assign({}, state, {
    subscribePopupOn: !state.subscribePopupOn
  });
};


home.reducer = (state = home.initialState, action) => {
  return modelReducer(home, state, action);
};


module.exports = home;
