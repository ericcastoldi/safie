module.exports = {
  home: {
    subscribePopupOn: true,
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
  },
  bag: {
    quickBagOpened: false
  },
  menu: {
    mobileMenuOpened: false,
    items: [
      {
        title: 'Home',
        route: '/'
      },
      {
        id: 'colecoes',
        expanded: false,
        title: 'Coleções',
        items: [
          {
            title: 'Safie Conceito',
            route: '/colecoes/safie-conceito'
          },
          {
            title: 'Barcelona',
            route: '/colecoes/barcelona'
          },
          {
            title: 'Coleções Cápsula',
            route: '/colecoes/capsula'
          }
        ]
      },
      {
        id: 'mysafie',
        expanded: false,
        title: 'My Safie',
        items: [
          {
            title: 'Medidas',
            route: '/medidas'
          },
          {
            title: 'Login',
            route: '/login'
          }
        ]
      },
      {
        title: 'Sobre Nós',
        route: '/sobre'
      },
      {
        title: 'Contato',
        route: '/contato'
      }
    ]
  },
  product: {
    measuresPopupOpen: false,
    current: {},
    options: {
      measures: null,
      color: null
    }
  },
  products: []
};
