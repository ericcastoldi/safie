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
    policies: [{
      name: 'Central de Atendimento',
      items: [{
        title: 'Fale Conosco',
        route: '/fale-conosco'
      }, {
        title: 'contato@safie.com.br'
      }, {
        title: 'Telefone: (47) 3330-1680'
      }, {
        title: 'De segunda a sexta das 9 às 17'
      }]
    }, {
      name: 'Informações',
      items: [{
        title: 'Ajustes e Devoluções',
        route: '/politicas/#devolucoes'
      }, {
        title: 'Prazos de Entrega',
        route: '/politicas/#entrega'
      }]
    }, {
      name: 'Pagamentos e Segurança',
      items: [{
        title: 'Compre com toda a segurança do PagSeguro!'
      }]
    }]
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
