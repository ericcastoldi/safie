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
    quickBagOpened: false,
    items: {
      //   1475971773639: {
      //     options: {
      //       color: {
      //         name: 'Cinza',
      //         hex: '#666666'
      //       },
      //       measurements: {
      //         ombros: 123,
      //         bracos: 456,
      //         comprimento: 789
      //       }
      //     },
      //     product: {
      //       id: 'blazer-soho',
      //       name: 'Blazer soho',
      //       description: 'Blazer oversized, manga longa, 3 bolsos falsos e 1 fenda posterior. Abotoamento frontal em botões de pressão.',
      //       price: '1130,80',
      //       measurements: {
      //         ombros: null,
      //         bracos: null,
      //         comprimento: null
      //       },
      //       defaultColor: 'preto',
      //       colors: {
      //         preto: {
      //           name: 'Preto',
      //           hex: '#000000'
      //         },
      //         cinza: {
      //           name: 'Cinza',
      //           hex: '#666666'
      //         }
      //       },
      //       pictures: {
      //         main: 1,
      //         product: 2,
      //         paths: {
      //           1: '/img/demo/blazer-look-01.jpg',
      //           2: '/img/demo/blazer-detalhe.jpg',
      //           3: '/img/demo/blazer-look-02.jpg'
      //         }
      //       }
      //     }
      //   }
    }
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
  // TODO: Alterar para "productView" ou algo do genero e colocar as options dentro do current: {current: {product: {}, options: {}}}
  product: {
    measurementsPopupOpen: false,
    current: {},
    options: {
      measurements: null,
      color: null // TODO: Quando o initialState estiver vindo do server, essa color deve vir preenchida com a defaultColor do produto
    }
  },
  /// TODO: Alterar para objeto, contendo um array de "data" dentro ou algo do genero.
  products: []
};
