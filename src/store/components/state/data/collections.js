const options = {
  measurements: null,
  color: null
};

const larguraOmbroAOmbro = {
  name: 'Largura Ombro a Ombro',
  description: 'Largura de um ombro ao outro.'
};

const larguraOmbro = {
  name: 'Largura do Ombro',
  description: 'Largura do ombro.'
};

const larguraCostas = {
  name: 'Largura das Costas',
  description: 'Largura das Costas.'
};

const alturaBusto = {
  name: 'Altura do Busto',
  description: 'Altura do Busto.'
};

const circunferenciaBusto = {
  name: 'Circunferência do Busto',
  description: 'Circunferência do Busto.'
};

const circunferenciaCoxa = {
  name: 'Circunferência da Coxa',
  description: 'Circunferência da Coxa.'
};

const circunferenciaCintura = {
  name: 'Circunferência da Cintura',
  description: 'Circunferência da Cintura.'
};

const circunferenciaQuadril = {
  name: 'Circunferência do Quadril',
  description: 'Circunferência do Quadril.'
};

const larguraBraco = {
  name: 'Largura do Braço',
  description: 'Largura do Braço'
};

const punho = {
  name: 'Punho',
  description: 'Circunferência do Punho.'
};


const mangaComprida = {
  name: 'Comprimento da Manga Comprida',
  description: 'Comprimento da Manga Comprida.'
};

const mangaCurta = {
  name: 'Comprimento da Manga Curta',
  description: 'Comprimento da Manga Curta.'
};


const comprimentoFrente = {
 name: 'Comprimento da Frente',
  description: 'Comprimento da Frente.'
};

const alturaCintura = {
  name: 'Altura até a Cintura',
  description: 'Altura até a Cintura.'
};


const alturaPerna = {
  name: 'Altura da Perna',
  description: 'Altura da Perna'
};

const alturaFrente = {
  name: 'Altura da Frente',
  description: 'Altura da Frente'
};

const alturaEntrePernas = {
  name: 'Altura entre as Pernas',
  description: 'Altura entre as Pernas.'
};

const tornozelo = {
  name: 'Tornozelo',
  description: 'Circunferência do Tornozelo.'
};

const alturaJoelho = {
  name: 'Altura do Joelho',
  description: 'Altura do Joelho.'
};

const preto = {
  name: 'Preto',
  hex: '#000000'
};

const branco = {
  name: 'Branco',
  hex: '#ffffff'
};

const rose = {
  name: 'Rosê',
  hex: '#f5c2a2'
};

const azulClaro = {
  name: 'Azul Claro',
  hex: '#bdc6e9'
};

const lilas = {
  name: 'Lilás',
  hex: '#f5f0de'
};

const marrom = {
  name: 'Marrom',
  hex: '#96533C'
};

const roxo = {
  name: 'Roxo',
  hex: '#663145'
};

const cinza = {
  name: 'Cinza',
  hex: '#666666'
};


const collections = {
  continua: [
    {
      id: 'camisa-basic',
      code: 'CC1',
      name: 'Camisa Basic',
      description: `Camisa Clássica com bolso.
Tecido de Tricoline com boa elasticidade, garantindo maior conforto e qualidade.
Tecido com ausência de toxidade para a pele e o meio ambiente, boas práticas ambientais ao longo da cadeia produtiva e processo produtivo transparente.
Botões frontais.
Punhos com abotoadura.
Material: 65% Algodão / 30% Poliamida / 5% Lastol.`,
      price: 167.9,
      weight: 124,
      measurements: {
        larguraOmbroAOmbro: larguraOmbroAOmbro,
        larguraOmbro: larguraOmbro,
        larguraCostas: larguraCostas,
        alturaBusto: alturaBusto,
        circunferenciaBusto: circunferenciaBusto,
        circunferenciaCintura: circunferenciaCintura,
        circunferenciaQuadril: circunferenciaQuadril,
        larguraBraco: larguraBraco,
        punho: punho,
        mangaComprida: mangaComprida,
        comprimentoFrente: comprimentoFrente
      },
      defaultColor: branco,
      colors: {
        branco: branco,
        azulClaro: azulClaro
      },
      options: options,
      pictures: {
        main: 1,
        product: 3,
        paths: {
          1: '/img/colecoes/continua/camisa-basic/camisa-basic.jpg',
          2: '/img/colecoes/continua/camisa-basic/pantalona.jpg',
          3: '/img/colecoes/continua/camisa-basic/Safie stills-021.jpg',
          4: '/img/colecoes/continua/camisa-basic/Safie stills-022.jpg'
        }
      }
    },
    {
      id: 'macacao',
      code: 'CC2',
      name: 'Macacão',
      description: `Macacão com frente única e ajustado ao corpo, parte frontal dupla para maior conforto.
Malha encorpada com alta elasticidade.
Ausência de toxidade para a pele e o meio ambiente, boas práticas ambientais ao longo da cadeia produtiva e processo produtivo transparente.
Sem necessidade de botões ou zíper.
Material : 81% Liocel / 15% Poliamida / 4% Elastano`,
      price: 269.9,
      weight: 494,
      measurements: {
        larguraOmbroAOmbro: larguraOmbroAOmbro,
        larguraOmbro: larguraOmbro,
        circunferenciaBusto: circunferenciaBusto,
        circunferenciaCintura: circunferenciaCintura,
        circunferenciaQuadril: circunferenciaQuadril,
        circunferenciaCoxa: circunferenciaCoxa,
        alturaBusto: alturaBusto,
        alturaCintura: alturaCintura,
        alturaPerna: alturaPerna,
        alturaEntrePernas: alturaEntrePernas,
        tornozelo: tornozelo
      },
      defaultColor: preto,
      colors: {
        roxo: roxo,
        lilas: lilas,
        preto: preto
      },
      options: options,
      pictures: {
        main: 1,
        product: 3,
        paths: {
          1: '/img/colecoes/continua/macacao/macacao.jpg',
          2: '/img/colecoes/continua/macacao/macacao-2.jpg',
          3: '/img/colecoes/continua/macacao/Safie stills-008-2.jpg',
          4: '/img/colecoes/continua/macacao/Safie stills-011-3.jpg'
        }
      }
    },
    {
      id: 'shorts-simple',
      code: 'CC3',
      name: 'Shorts Simple',
      description: `O Shorts Simple é aquela peça coringa que não pode faltar no closet.
Malha encorpada com alta elasticidade.
Ausência de toxidade para a pele e o meio ambiente, boas práticas ambientais ao longo da cadeia produtiva e processo produtivo transparente.
Ziper frontal.
Material : 81% Liocel / 15% Poliamida / 4% Elastano`,
      price: 129.9,
      weight: 168,
      measurements: {
        circunferenciaCintura: circunferenciaCintura,
        circunferenciaQuadril: circunferenciaQuadril,
        circunferenciaCoxa: circunferenciaCoxa,
        alturaJoelho: alturaJoelho
      },
      defaultColor: preto,
      colors: {
        roxo: roxo,
        lilas: lilas,
        preto: preto
      },
      options: options,
      pictures: {
        main: 1,
        product: 3,
        paths: {
          1: '/img/colecoes/continua/shorts-simple/shorts-simple.jpg',
          2: '/img/colecoes/continua/shorts-simple/shorts-simple-2.jpg',
          3: '/img/colecoes/continua/shorts-simple/shorts-simple-still.jpg',
          4: '/img/colecoes/continua/shorts-simple/shorts-simple-still-back.jpg'
        }
      }
    },
    {
      id: 'vestido-simple',
      code: 'CC4',
      name: 'Vestido Simple',
      description: `Vestido atemporal para usar na praia ou no shopping, de salto ou rasteirinha, esse é aquele vestido para qualquer hora.

Tecido de Tricoline com a elasticidade certa para garantir maior conforto.
Ausência de toxidade para a pele e o meio ambiente, boas práticas ambientais ao longo da cadeia produtiva e processo produtivo transparente.
Botões frontais.
Acompanha cinto.
Bolso Lateral.
Martigale com botão nas mangas.
Material : 65% Algodão / 30% Poliamida / 5% Lastol.`,
      price: 230,
      weight: 312,
      measurements: {
        larguraOmbroAOmbro: larguraOmbroAOmbro,
        larguraOmbro: larguraOmbro,
        circunferenciaBusto: circunferenciaBusto,
        circunferenciaCintura: circunferenciaCintura,
        circunferenciaQuadril: circunferenciaQuadril,
        alturaPerna: alturaPerna,
        larguraBraco: larguraBraco
      },
      defaultColor: branco,
      colors: {
        branco: branco,
        azulClaro: azulClaro
      },
      options: options,
      pictures: {
        main: 1,
        product: 3,
        paths: {
          1: '/img/colecoes/continua/vestido-simple/vestido-simple.jpg',
          2: '/img/colecoes/continua/vestido-simple/vestido-simple-2.jpg',
          3: '/img/colecoes/continua/vestido-simple/vestido-simple-still.jpg',
          4: '/img/colecoes/continua/vestido-simple/vestido-simple-still-back.jpg'
        }
      }
    },
    {
      id: 'vestido-blazer',
      code: 'CC5',
      name: 'Vestido Blazer',
      description: `Vestido com cara de alfaiataria, é o pretinho clássico mas nada básico de cada closet.

Malha encorpada com alta elasticidade.
Ausência de toxidade para a pele e o meio ambiente, boas práticas ambientais ao longo da cadeia produtiva e processo produtivo transparente.
Botões frontais.
Recortes ajustados.
Material : 81% Liocel / 15% Poliamida / 4% Elastano`,
      price: 320,
      weight: 542,
      measurements: {
        larguraOmbroAOmbro: larguraOmbroAOmbro,
        larguraOmbro: larguraOmbro,
        larguraCostas: larguraCostas,
        alturaBusto: alturaBusto,
        circunferenciaBusto: circunferenciaBusto,
        circunferenciaCintura: circunferenciaCintura,
        circunferenciaQuadril: circunferenciaQuadril,
        larguraBraco: larguraBraco,
        alturaJoelho: alturaJoelho
      },
      defaultColor: preto,
      colors: {
        preto: preto,
        roxo: roxo,
        lilas: lilas
      },
      options: options,
      pictures: {
        main: 1,
        product: 3,
        paths: {
          1: '/img/colecoes/continua/vestido-blazer/vestido-blazer.jpg',
          2: '/img/colecoes/continua/vestido-blazer/vestido-blazer-2.jpg',
          3: '/img/colecoes/continua/vestido-blazer/Safie stills-016.jpg',
          4: '/img/colecoes/continua/vestido-blazer/Safie stills-018.jpg'
        }
      }
    },
    {
      id: 'blusa-fio',
      code: 'CC6',
      name: 'Blusa Fio',
      description: `Blusinha de malha coringa para qualquer look.

Frente Dupla.
Levemente Transparente.
Malha que lembra tricot, levinha e confortável.
Malha sustentável.
Material: 96% Viscose / 4% Elastano`,
      price: 67.30,
      weight: 60,
      measurements: {
        alturaBusto: alturaBusto,
        alturaFrente: alturaFrente,
        larguraCostas: larguraCostas,
        circunferenciaCintura: circunferenciaCintura,
        circunferenciaQuadril: circunferenciaQuadril,
        comprimentoFrente: comprimentoFrente
      },
      defaultColor: cinza,
      colors: {
        cinza: cinza
      },
      options: options,
      pictures: {
        main: 1,
        product: 3,
        paths: {
          1: '/img/colecoes/continua/blusa-fio/blusa-fio.jpg',
          2: '/img/colecoes/continua/blusa-fio/shorts-simple.jpg',
          3: '/img/colecoes/continua/blusa-fio/blusa-fio-still.jpg',
          4: '/img/colecoes/continua/blusa-fio/blusa-fio-still-back.jpg'
        }
      }
    },
    {
      id: 'kimono',
      code: 'CC7',
      name: 'Kimono',
      description: `Kimono nada comum, plissado com tecido estruturado que lembra courino.

Sem Fechamento.
Não possui forro.
O tecido dessa peça é sustentável.
Material: 100% Poliester`,
      price: 185.50,
      weight: 383,
      measurements: {
        larguraOmbroAOmbro: larguraOmbroAOmbro,
        larguraOmbro: larguraOmbro,
        circunferenciaBusto: circunferenciaBusto,
        alturaBusto: alturaBusto,
        circunferenciaQuadril: circunferenciaQuadril,
        mangaComprida: mangaComprida,
        larguraBraco: larguraBraco,
        alturaJoelho: alturaJoelho
      },
      defaultColor: branco,
      colors: {
        cinza: branco
      },
      options: options,
      pictures: {
        main: 1,
        product: 2,
        paths: {
          1: '/img/colecoes/continua/kimono/kimono.jpg',
          2: '/img/colecoes/continua/kimono/Safie-010a.jpg',
          3: '/img/colecoes/continua/kimono/Safie stills-066.jpg'
        }
      }
    },
    {
      id: 'bomber-jacket',
      code: 'CC8',
      name: 'Bomber Jacket',
      description: `Bomber jacket levinha.

Acompanha faixa.
Tecido Transparente.
O tecido dessa peça é sustentável.
Material: 100% Poliester`,
      price: 225,
      weight: 170,
      measurements: {
        larguraOmbroAOmbro: larguraOmbroAOmbro,
        larguraOmbro: larguraOmbro,
        circunferenciaBusto: circunferenciaBusto,
        circunferenciaCintura: circunferenciaCintura,
        circunferenciaQuadril: circunferenciaQuadril,
        comprimentoFrente: comprimentoFrente,
        larguraBraco: larguraBraco,
        mangaComprida: mangaComprida
      },
      defaultColor: cinza,
      colors: {
        cinza: cinza
      },
      options: options,
      pictures: {
        main: 1,
        product: 4,
        paths: {
          1: '/img/colecoes/continua/bomber-jacket/bomber-jacket.jpg',
          2: '/img/colecoes/continua/bomber-jacket/bomber-jacket-2.jpg',
          3: '/img/colecoes/continua/bomber-jacket/Safie stills-052.jpg',
          4: '/img/colecoes/continua/bomber-jacket/Safie stills-058.jpg'
        }
      }
    },
    {
      id: 'calca-pantalona',
      code: 'CC9',
      name: 'Calça Pantalona',
      description: `Calça Pantalona atemporal caimento leve e confortalvel.

Tecido acetinado, levemente brilhante e toque macio.
Não possui forro.
O tecido dessa peça é sustentável.
Material: 100% Poliester`,
      price: 129.7,
      weight: 197,
      measurements: {
        circunferenciaCintura: circunferenciaCintura,
        circunferenciaQuadril: circunferenciaQuadril,
        circunferenciaCoxa: circunferenciaCoxa,
        alturaEntrePernas: alturaEntrePernas,
        alturaPerna: alturaPerna
      },
      defaultColor: preto,
      colors: {
        preto: preto
      },
      options: options,
      pictures: {
        main: 1,
        product: 3,
        paths: {
          1: '/img/colecoes/continua/pantalona/pantalona.jpg',
          2: '/img/colecoes/continua/pantalona/Safie stills-070.jpg',
          3: '/img/colecoes/continua/pantalona/Safie stills-071.jpg'
        }
      }
    },
    {
      id: 'colete',
      code: 'CC10',
      name: 'Colete',
      description: `Colete longo com corte de alfaiataria.

Tecido texturizado e leve.
Não possui forro.
Possui bolsos laterais.
Botões Frontais.
O tecido dessa peça é sustentável.
Material: 100% Algodão`,
      price: 195.5,
      weight: 336,
      measurements: {
        larguraOmbroAOmbro: larguraOmbroAOmbro,
        larguraOmbro: larguraOmbro,
        alturaBusto: alturaBusto,
        circunferenciaBusto: circunferenciaBusto,
        circunferenciaCintura: circunferenciaCintura,
        circunferenciaQuadril: circunferenciaQuadril,
        alturaPerna: alturaPerna
      },
      defaultColor: preto,
      colors: {
        preto: preto
      },
      options: options,
      pictures: {
        main: 1,
        product: 3,
        paths: {
          1: '/img/colecoes/continua/colete/colete.jpg',
          2: '/img/colecoes/continua/colete/colete-2.jpg',
          3: '/img/colecoes/continua/colete/Safie stills-076.jpg',
          4: '/img/colecoes/continua/colete/Safie stills-080.jpg'
        }
      }
    },
    {
      id: 'blusa-black',
      code: 'CC12',
      name: 'Blusa Black',
      description: `Blusa Black tem uma modelagem confortável e simples, combinando com qualquer ocasião.

Tecido acetinado, levemente brilhante e toque macio.
Não possui forro.
O tecido dessa peça é sustentável.
Material: 100% Poliéster`,
      price: 100,
      weight: 83,
      measurements: {
        larguraOmbroAOmbro: larguraOmbroAOmbro,
        larguraOmbro: larguraOmbro,
        larguraCostas: larguraCostas,
        alturaBusto: alturaBusto,
        circunferenciaBusto: circunferenciaBusto,
        circunferenciaCintura: circunferenciaCintura,
        circunferenciaQuadril: circunferenciaQuadril,
        comprimentoFrente: comprimentoFrente,
        mangaCurta: mangaCurta
      },
      defaultColor: preto,
      colors: {
        preto: preto
      },
      options: options,
      pictures: {
        main: 1,
        product: 3,
        paths: {
          1: '/img/colecoes/continua/blusa-black/blusa-black.jpg',
          2: '/img/colecoes/continua/blusa-black/Safie stills-050.jpg',
          3: '/img/colecoes/continua/blusa-black/Safie stills-051.jpg'
        }
      }
    }
  ],
  barcelona: [
    {
      id: 'camisa-laco',
      code: 'CB1',
      name: 'Camisa Laço',
      description: `A Camisa Laço transformou o básico em algo novo, as costas abertas e o laço deixam tudo mais charmoso.

Tecido de Tricoline com boa elasticidade, garantindo maior conforto e qualidade.
Ausência de toxidade para a pele e o meio ambiente, boas práticas ambientais ao longo da cadeia produtiva e processo produtivo transparente.
Botões frontais.
Frente única.
Material : 65% Algodão / 30% Poliamida / 5% Lastol.`,
      price: 149.9,
      weight: 104,
      measurements: {
        larguraOmbroAOmbro: larguraOmbroAOmbro,
        larguraOmbro: larguraOmbro,
        larguraCostas: larguraCostas,
        alturaBusto: alturaBusto,
        circunferenciaBusto: circunferenciaBusto,
        circunferenciaCintura: circunferenciaCintura,
        circunferenciaQuadril: circunferenciaQuadril,
        larguraBraco: larguraBraco,
        comprimentoFrente: comprimentoFrente,
        mangaCurta: mangaCurta
      },
      defaultColor: azulClaro,
      colors: {
        branco: branco,
        azulClaro: azulClaro
      },
      options: options,
      pictures: {
        main: 1,
        product: 4,
        paths: {
          1: '/img/colecoes/barcelona/camisa-laco/camisa-laco-1.jpg',
          2: '/img/colecoes/barcelona/camisa-laco/camisa-laco-2.jpg',
          3: '/img/colecoes/barcelona/camisa-laco/camisa-laco-3.jpg',
          4: '/img/colecoes/barcelona/camisa-laco/camisa-laco-1/Safie stills-027.jpg',
          5: '/img/colecoes/barcelona/camisa-laco/camisa-laco-1/Safie stills-028.jpg'
        }
      }
    },
    {
      id: 'pantacourt',
      code: 'CB2',
      name: 'Pantacourt',
      description: `Pantacourt a calça da temporada, com modelagem cintura alta e corte até a canela, garante um estilo único.

Tecido acetinado e brilhante, com caimento estruturado.
Ziper Invisivel lateral.
O tecido dessa peça é sustentável.
Material : 60% Algodão / 38% Poliester / 2% Elastano.`,
      price: 190,
      weight: 284,
      measurements: {
        circunferenciaCoxa: circunferenciaCoxa,
        circunferenciaCintura: circunferenciaCintura,
        circunferenciaQuadril: circunferenciaQuadril,
        alturaPerna: alturaPerna,
        alturaEntrePernas: alturaEntrePernas,
        tornozelo: tornozelo
      },
      defaultColor: branco,
      colors: {
        branco: branco
      },
      options: options,
      pictures: {
        main: 1,
        product: 3,
        paths: {
          1: '/img/colecoes/barcelona/pantacourt/pantacourt.jpg',
          2: '/img/colecoes/barcelona/pantacourt/Safie stills-092.jpg',
          3: '/img/colecoes/barcelona/pantacourt/Safie stills-095.jpg'
        }
      }
    },
    {
      id: 'saia-gotic',
      code: 'CB3',
      name: 'Saia Gòtic',
      description: `A Saia Gòtic foi inspirada no histórico bairro gótico de barcelona, que leva esse nome devido a sua arquitetura medieval. Porém, assim como Barcelona a saia trás uma estrutura e um corte moderno.

Malha encorpada com alta elasticidade.
Forro em renda.
Ziper Costas.
Material : 81% Liocel / 15% Poliamida / 4% Elastano | Renda upcycling: 100% Poliamida`,
      price: 199.9,
      weight: 237,
      measurements: {
        circunferenciaCoxa: circunferenciaCoxa,
        circunferenciaCintura: circunferenciaCintura,
        circunferenciaQuadril: circunferenciaQuadril,
        alturaJoelho: alturaJoelho
      },
      defaultColor: preto,
      colors: {
        preto: preto
      },
      options: options,
      pictures: {
        main: 1,
        product: 2,
        paths: {
          1: '/img/colecoes/barcelona/saia-gotic/saia-gotic.jpg',
          2: '/img/colecoes/barcelona/saia-gotic/Safie stills-107.jpg',
          3: '/img/colecoes/barcelona/saia-gotic/Safie stills-109.jpg'
        }
      }
    },
    {
      id: 'shorts-summer',
      code: 'CB4',
      name: 'Shorts Summer',
      description: `Shorts Summer, é assim mesmo bem verão, levinho e delicado.

Elástico na cintura.
Levemente Transparente.
Malha que lembra tricot.
A malha dessa peça é sustentável.
Material: 96% Viscose / 4% Elastano | Renda upcycling: 100% Poliamida`,
      price: 85.5,
      weight: 93,
      measurements: {
        circunferenciaCoxa: circunferenciaCoxa,
        circunferenciaCintura: circunferenciaCintura,
        circunferenciaQuadril: circunferenciaQuadril,
        alturaJoelho: alturaJoelho
      },
      defaultColor: cinza,
      colors: {
        cinza: cinza
      },
      options: options,
      pictures: {
        main: 1,
        product: 2,
        paths: {
          1: '/img/colecoes/barcelona/shorts-summer/shorts-summer.jpg',
          2: '/img/colecoes/barcelona/shorts-summer/Safie stills-085.jpg',
          3: '/img/colecoes/barcelona/shorts-summer/Safie stills-086.jpg'
        }
      }
    },
    {
      id: 'vestido-lady-like',
      code: 'CB5',
      name: 'Vestido Lady Like',
      description: `O Vestido Lady like é inspirado no fim de tarde na capital da catalunha e pelo estilo que leva esse mesmo nome.

Tecido de brilho suave com boa elasticidade.
Tule transparente no decote.
Sem necessidade de botões ou zíper.
O tecido dessa peça é sustentável.
Material : 92% Poliamida 8% Elastano.`,
      price: 258.9,
      weight: 348,
      measurements: {
        larguraOmbroAOmbro: larguraOmbroAOmbro,
        larguraOmbro: larguraOmbro,
        circunferenciaBusto: circunferenciaBusto,
        circunferenciaCintura: circunferenciaCintura,
        alturaBusto: alturaBusto,
        alturaCintura: alturaCintura,
        larguraBraco: larguraBraco,
        mangaCurta: mangaCurta,
        alturaJoelho: alturaJoelho
      },
      defaultColor: rose,
      colors: {
        rose: rose
      },
      options: options,
      pictures: {
        main: 1,
        product: 2,
        paths: {
          1: '/img/colecoes/barcelona/vestido-lady-like/vestido-lady-like.jpg',
          2: '/img/colecoes/barcelona/vestido-lady-like/Safie stills-060.jpg',
          3: '/img/colecoes/barcelona/vestido-lady-like/Safie stills-061.jpg'
        }
      }
    },
    {
      id: 'calca-rose',
      code: 'CB6',
      name: 'Calça Rosê',
      description: `Calça Skinny de corte clássico.

Tecido de brilho suave com boa elasticidade.
Corte duplo na parte de trás, garantindo maior conforto.
Zíper frontal.
Bolsos laterais.
O tecido dessa peça é sustentável.
Material : 92% Poliamida 8% Elastano.`,
      price: 152,
      weight: 263,
      measurements: {
        circunferenciaCintura: circunferenciaCintura,
        circunferenciaQuadril: circunferenciaQuadril,
        circunferenciaCoxa: circunferenciaCoxa,
        alturaPerna: alturaPerna,
        alturaEntrePernas: alturaEntrePernas,
        tornozelo: tornozelo
      },
      defaultColor: rose,
      colors: {
        rose: rose
      },
      options: options,
      pictures: {
        main: 1,
        product: 2,
        paths: {
          1: '/img/colecoes/barcelona/calca-rose/calca-rose.jpg',
          2: '/img/colecoes/barcelona/calca-rose/Safie stills-097.jpg',
          3: '/img/colecoes/barcelona/calca-rose/Safie stills-099.jpg'
        }
      }
    },
    {
      id: 'camisa-seda',
      code: 'CB7',
      name: 'Camisa Seda',
      description: `Camisa de seda, com modelagem simples e recorte abertura nas costas.

Tecido leve, brilhante e toque muito macio.
Abertura com botão nas costas.
O tecido dessa peça é sustentável.
Material: 60% linho 40% seda`,
      price: 129.73,
      weight: 60,
      measurements: {
        larguraOmbroAOmbro: larguraOmbroAOmbro,
        larguraOmbro: larguraOmbro,
        larguraCostas: larguraCostas,
        alturaBusto: alturaBusto,
        circunferenciaBusto: circunferenciaBusto,
        circunferenciaCintura: circunferenciaCintura,
        circunferenciaQuadril: circunferenciaQuadril,
        mangaCurta: mangaCurta,
        comprimentoFrente: comprimentoFrente
      },
      defaultColor: marrom,
      colors: {
        marrom: marrom
      },
      options: options,
      pictures: {
        main: 1,
        product: 2,
        paths: {
          1: '/img/colecoes/barcelona/camisa-seda/blusa-seda.jpg',
          2: '/img/colecoes/barcelona/camisa-seda/Safie stills-034.jpg',
          3: '/img/colecoes/barcelona/camisa-seda/Safie stills-035.jpg'
        }
      }
    },
    {
      id: 'saia-lapis',
      code: 'CB8',
      name: 'Saia Lapis',
      description: `A Saia Lápis é um clássico e por isso é super versátil em qualquer guarda-roupa.

Tecido acetinado e brilhante, com caimento estruturado.
Ziper Invisivel lateral.
Fenda na frente.
O tecido dessa peça é sustentável.
Material : 60% Algodão / 38% Poliester / 2% Elastano.`,
      price: 170,
      weight: 165,
      measurements: {
        circunferenciaCintura: circunferenciaCintura,
        circunferenciaQuadril: circunferenciaQuadril,
        circunferenciaCoxa: circunferenciaCoxa,
        alturaJoelho: alturaJoelho
      },
      defaultColor: rose,
      colors: {
        rose: rose
      },
      options: options,
      pictures: {
        main: 1,
        product: 3,
        paths: {
          1: '/img/colecoes/barcelona/saia-lapis/saia-lapis.jpg',
          2: '/img/colecoes/barcelona/saia-lapis/saia-lapis-2.jpg',
          3: '/img/colecoes/barcelona/saia-lapis/Safie stills-103.jpg',
          4: '/img/colecoes/barcelona/saia-lapis/Safie stills-104.jpg'
        }
      }
    },
    {
      id: 'macacao-gaudi',
      code: 'CB9',
      name: 'Macacão Gaudi',
      description: `O Macacão Gaudi é uma peça especial, foi inpirada no estilo do renomado arquiteto espanhol Antoni Gaudi.

Malha encorpada com alta elasticidade.
Bolsos laterais.
Pingente nas costas.
Ausência de toxidade para a pele e o meio ambiente, boas práticas ambientais ao longo da cadeia produtiva e processo produtivo transparente.
Fechamento por colchetes de gancho na gola.
Material : 81% Liocel / 15% Poliamida / 4% Elastano`,
      price: 365.5,
      weight: 690,
      measurements: {
        larguraOmbroAOmbro: larguraOmbroAOmbro,
        circunferenciaBusto: circunferenciaBusto,
        circunferenciaCintura: circunferenciaCintura,
        circunferenciaQuadril: circunferenciaQuadril,
        circunferenciaCoxa: circunferenciaCoxa,
        alturaBusto: alturaBusto,
        alturaCintura: alturaCintura,
        alturaEntrePernas: alturaEntrePernas,
        alturaPerna: alturaPerna,
        tornozelo: tornozelo
      },
      defaultColor: branco,
      colors: {
        branco: branco,
        lilas: lilas,
        roxo: roxo,
        preto: preto
      },
      options: options,
      pictures: {
        main: 2,
        product: 4,
        paths: {
          1: '/img/colecoes/barcelona/macacao-gaudi/macacao-gaudi-1.jpg',
          2: '/img/colecoes/barcelona/macacao-gaudi/macacao-gaudi-2.jpg',
          3: '/img/colecoes/barcelona/macacao-gaudi/macacao-gaudi-costas.jpg',
          4: '/img/colecoes/barcelona/macacao-gaudi/macacao-gaudi-still.jpg',
          5: '/img/colecoes/barcelona/macacao-gaudi/macacao-gaudi-still-back.jpg'
        }
      }
    },
    {
      id: 'vestido-fluid',
      code: 'CB10',
      name: 'Vestido Fluid',
      description: `O Vestido Fluid, tem movimento e caimento suave, assim como as águas que dançam nas fontes da Plaza de Espanha em Barcelona.

Tecido de brilho suave, sua trama é bem aberta tornando-o muito transparente. Ideal para ser usado com sobreposição de outras peças.
Fendas laterais
O tecido dessa peça é sustentável.
Material : 100% Poliester`,
      price: 153,
      weight: 47,
      measurements: {
        larguraOmbro: larguraOmbro,
        larguraOmbroAOmbro: larguraOmbroAOmbro,
        circunferenciaBusto: circunferenciaBusto,
        circunferenciaQuadril: circunferenciaQuadril,
        alturaBusto: alturaBusto,
        alturaJoelho: alturaJoelho
      },
      defaultColor: branco,
      colors: {
        branco: branco
      },
      options: options,
      pictures: {
        main: 1,
        product: 3,
        paths: {
          1: '/img/colecoes/barcelona/vestido-fluid/vestido-fluid.jpg',
          2: '/img/colecoes/barcelona/vestido-fluid/vestido-fluid-2.jpg',
          3: '/img/colecoes/barcelona/vestido-fluid/Safie stills-029.jpg',
          4: '/img/colecoes/barcelona/vestido-fluid/Safie stills-032.jpg'
        }
      }
    },
    {
      id: 'blusa-capa',
      code: 'CB11',
      name: 'Blusa Capa',
      description: `A Capa Montjuïc, foi inspirada nos paredões do castelo medieval de Montjuïc onde se tem uma visão linda da cidade, assim como de todo colo a mostra nessa peça.

Malha encorpada com alta elasticidade.
Fechamento com laço interno na parte das costas.
Ausência de toxidade para a pele e o meio ambiente, boas práticas ambientais ao longo da cadeia produtiva e processo produtivo transparente.
Material : 81% Liocel / 15% Poliamida / 4% Elastano`,
      price: 240,
      weight: 356,
      measurements: {
        larguraOmbro: larguraOmbro,
        larguraOmbroAOmbro: larguraOmbroAOmbro,
        larguraCostas: larguraCostas,
        circunferenciaCintura: circunferenciaCintura,
        circunferenciaQuadril: circunferenciaQuadril,
        comprimentoFrente: comprimentoFrente
      },
      defaultColor: roxo,
      colors: {
        roxo: roxo,
        lilas: lilas,
        preto: preto
      },
      options: options,
      pictures: {
        main: 1,
        product: 3,
        paths: {
          1: '/img/colecoes/barcelona/blusa-capa/blusa-capa.jpg',
          2: '/img/colecoes/barcelona/blusa-capa/blusa-capa-2.jpg',
          3: '/img/colecoes/barcelona/blusa-capa/Safie stills-023.jpg',
          4: '/img/colecoes/barcelona/blusa-capa/Safie stills-025.jpg'
        }
      }
    },
    {
      id: 'camiseta-metalic',
      code: 'CB12',
      name: 'Camiseta Metalic',
      description: `Camiseta inspirada na estrutura de aço em formato de peixe construída pelo arquiteto Frank Gehry na praia de barcelona.

Malha de Algodão orgânico.
Material 100% Algodão / Barra e Gola de tecido upcycling : 100% Poliester.`,
      price: 112,
      weight: 116,
      measurements: {
        larguraOmbro: larguraOmbro,
        larguraOmbroAOmbro: larguraOmbroAOmbro,
        larguraCostas: larguraCostas,
        circunferenciaCintura: circunferenciaCintura,
        circunferenciaQuadril: circunferenciaQuadril,
        larguraBraco: larguraBraco,
        mangaCurta: mangaCurta,
        comprimentoFrente: comprimentoFrente
      },
      defaultColor: branco,
      colors: {
        branco: branco
      },
      options: options,
      pictures: {
        main: 1,
        product: 2,
        paths: {
          1: '/img/colecoes/barcelona/camiseta-metalic/camiseta-metalic.jpg',
          2: '/img/colecoes/barcelona/camiseta-metalic/Safie stills-064.jpg',
          3: '/img/colecoes/barcelona/camiseta-metalic/Safie stills-065.jpg'
        }
      }
    }
  ],
  capsula: [
    {
      id: 'colete-miro',
      code: 'CCP1',
      name: 'Colete Miró',
      description: `Camiseta inspirada na estrutura de aço em formato de peixe construída pelo arquiteto Frank Gehry na praia de barcelona.

Malha de Algodão orgânico.
Material 100% Algodão / Barra e Gola de tecido upcycling : 100% Poliester.`,
      price: 357,
      weight: 494,
      measurements: {
        larguraOmbro: larguraOmbro,
        larguraOmbroAOmbro: larguraOmbroAOmbro,
        larguraCostas: larguraCostas,
        circunferenciaCintura: circunferenciaCintura,
        circunferenciaQuadril: circunferenciaQuadril,
        larguraBraco: larguraBraco,
        mangaCurta: mangaCurta,
        comprimentoFrente: comprimentoFrente
      },
      defaultColor: branco,
      colors: {
        branco: branco
      },
      options: options,
      pictures: {
        main: 1,
        product: 2,
        paths: {
          1: '/img/colecoes/capsula/colete-miro/colete-miro.jpg',
          2: '/img/colecoes/capsula/colete-miro/Safie stills-036.jpg',
          3: '/img/colecoes/capsula/colete-miro/Safie stills-041.jpg'
        }
      }
    }
  ]
};





module.exports = {
  'barcelona': [{
      id: 'saia-lapis',
      name: 'SAIA LÁPIS URBAN',
      description: 'A SAIA LÁPIS URBAN é confeccionada em tecido encorpado e flexível com toque de viscose. O modelo saia lápis se adapta facilmente em diferentes silhuetas, valorizando e modelando as curvas do corpo. Seu comprimento é até os joelhos, caimento ajustado e elegância, sem igual. A peça é detalhada por víes e fenda discreta da parte frontal. Ideal para look no trabalho e jantares à noite.',
      price: 230.9,
      weight: 100,
      measurements: {
        cintura: {
          name: 'Cintura',
          description: 'Medida da cintura',
          value: 80
        },
        pernas: {
          name: 'Pernas',
          description: 'Medida das pernas',
          value: 123
        }
      },
      defaultColor: {
        name: 'Preto',
        hex: '#000000'
      },
      colors: {
        preto: {
          name: 'Preto',
          hex: '#000000'
        }
      },
      options: {
        measurements: null,
        color: null
      },
      pictures: {
        main: 1,
        product: 2,
        paths: {
          1: '/img/demo/saia-lapis-look-01.jpg',
          2: '/img/demo/saia-lapis-detalhe.jpg',
          3: '/img/demo/saia-lapis-look-02.jpg',
          4: '/img/demo/saia-lapis-look-03.jpg'
        }
      }
    },
    {
      id: 'blazer-soho',
      name: 'Blazer soho',
      description: 'Blazer oversized, manga longa, 3 bolsos falsos e 1 fenda posterior. Abotoamento frontal em botões de pressão.',
      price: 1130.8,
      weight: 300,
      measurements: {
        ombros: {
          name: 'Ombros',
          description: 'Distância entre os ombros',
          value: 60
        },
        bracos: {
          name: 'Braços',
          description: 'Comprimento dos braços',
          value: 102
        },
        comprimento: {
          name: 'Comprimento',
          description: 'Altura da peça, medida da altura do ombro até a cintura',
          value: 95
        }
      },
      defaultColor: {
        name: 'Preto',
        hex: '#000000'
      },
      colors: {
        preto: {
          name: 'Preto',
          hex: '#000000'
        },
        cinza: {
          name: 'Cinza',
          hex: '#666666'
        }
      },
      pictures: {
        main: 1,
        product: 2,
        paths: {
          1: '/img/demo/blazer-look-01.jpg',
          2: '/img/demo/blazer-detalhe.jpg',
          3: '/img/demo/blazer-look-02.jpg'
        }
      },
      options: {
        measurements: null,
        color: null
      }
    },
    {
      id: 'calca-noelle',
      name: 'calca noelle',
      description: 'Calça reta com cós com passantes. Possui 4 bolsos sendo os dois posteriores falsos. Fechamento frontal em zíper e botões.',
      price: 522,
      weight: 220,
      measurements: {
        cintura: {
          name: 'Cintura',
          description: 'Medida da cintura',
          value: 75
        },
        quadril: {
          name: 'Quadril',
          description: 'Medida do quadril',
          value: 88
        },
        pernas: {
          name: 'Pernas',
          description: 'Comprimento das pernas',
          value: 110
        }
      },
      defaultColor: {
        name: 'Salmão',
        hex: '#EEA682'
      },
      colors: {
        salmao: {
          name: 'Salmão',
          hex: '#EEA682'
        }
      },
      pictures: {
        main: 1,
        product: 2,
        paths: {
          1: '/img/demo/calca-look-01.jpg',
          2: '/img/demo/calca-detalhe.jpg',
          3: '/img/demo/calca-look-02.jpg'
        }
      },
      options: {
        measurements: null,
        color: null
      }
    },
    {
      id: 'camisa-alabama',
      name: 'CAMISA ALABAMA',
      description: 'Camisa cropped, gola de ponta, manga longa, punho fechado em botão, 2 bolsos e barra com faixa para amarração. Abotoamento frontal.',
      price: 397,
      weight: 80,
      measurements: {
        ombros: {
          name: 'Ombros',
          description: 'Largura dos ombros',
          value: 50
        },
        bracos: {
          name: 'Braços',
          description: 'Comprimento dos braços',
          value: 99
        }
      },
      defaultColor: {
        name: 'Cinza',
        hex: '#666666'
      },
      colors: {
        preto: {
          name: 'Preto',
          hex: '#000000'
        },
        cinza: {
          name: 'Cinza',
          hex: '#666666'
        }
      },
      pictures: {
        main: 1,
        product: 2,
        paths: {
          1: '/img/demo/camisa-look-01.jpg',
          2: '/img/demo/camisa-detalhe.jpg',
          3: '/img/demo/camisa-look-02.jpg'
        }
      },
      options: {
        measurements: null,
        color: null
      }
    },
    {
      id: 'camiseta-pop',
      name: 'TOP POP NO STYLE',
      weight: 90,
      description: 'Top reto em malha, decote arredondado, manga curta e 2 fendas laterais. Estampa frontal: "NAH POP NO STYLE AS STRICTLY ROOTS".',
      price: 144,
      measurements: {
        ombros: {
          name: 'Ombros',
          description: 'Largura dos ombros',
          value: 50
        }
      },
      defaultColor: {
        name: 'Azul',
        hex: '#a8c9ff'
      },
      colors: {
        salmao: {
          name: 'Salmão',
          hex: '#EEA682'
        },
        azul: {
          name: 'Azul',
          hex: '#a8c9ff'
        }
      },
      pictures: {
        main: 1,
        product: 2,
        paths: {
          1: '/img/demo/camiseta-look-01.jpg',
          2: '/img/demo/camiseta-detalhe.jpg',
          3: '/img/demo/camiseta-look-02.jpg',
          4: '/img/demo/camiseta-look-03.jpg'
        }
      },
      options: {
        measurements: null,
        color: null
      }
    },
    {
      id: 'casaco-mirage',
      name: 'CASAQUETO MIRAGE',
      description: 'Casaqueto oversized em tricot, manga longa. Possui bordado posterior. Fechamento frontal por abotoamento.',
      price: 1244,
      weight: 260,
      measurements: {
        ombros: {
          name: 'Ombros',
          description: 'Largura dos ombros',
          value: 50
        },
        bracos: {
          name: 'Braços',
          description: 'Comprimento dos braços',
          value: 99
        },
        comprimento: {
          name: 'Comprimento',
          description: 'Altura da peça, medida da altura do ombro até a cintura',
          value: 95
        }
      },
      defaultColor: {
        name: 'Bege',
        hex: '#ffffe0'
      },
      colors: {
        bege: {
          name: 'Bege',
          hex: '#ffffe0'
        }
      },
      pictures: {
        main: 1,
        product: 2,
        paths: {
          1: '/img/demo/casaco-look-01.jpg',
          2: '/img/demo/casaco-detalhe.jpg',
          3: '/img/demo/casaco-look-02.jpg',
          4: '/img/demo/casaco-look-03.jpg'
        }
      },
      options: {
        measurements: null,
        color: null
      }
    },
    {
      id: 'macacao-xai-xai',
      name: 'macacao xai xai',
      weight: 400,
      description: 'Top reto em seda, gola alta fechada em colchete e manga longa. Levemente transparente.',
      price: 822,
      measurements: {
        ombros: {
          name: 'Ombros',
          description: 'Largura dos ombros',
          value: 50
        },
        bracos: {
          name: 'Braços',
          description: 'Comprimento dos braços',
          value: 99
        },
        quadril: {
          name: 'Quadril',
          description: 'Medida do quadril',
          value: 88
        },
        pernas: {
          name: 'Pernas',
          description: 'Comprimento das pernas',
          value: 110
        }
      },
      defaultColor: {
        name: 'Bege',
        hex: '#ffffe0'
      },
      colors: {
        bege: {
          name: 'Bege',
          hex: '#ffffe0'
        },
        preto: {
          name: 'Preto',
          hex: '#000000'
        }
      },
      pictures: {
        main: 1,
        product: 2,
        paths: {
          1: '/img/demo/macacao-look-01.jpg',
          2: '/img/demo/macacao-detalhe.jpg',
          3: '/img/demo/macacao-look-02.jpg'
        }
      },
      options: {
        measurements: null,
        color: null
      }
    },
    {
      id: 'vestido-elliot',
      name: 'vestido elliot',
      description: 'Vestido curto estilo kimono e decote V. Sem fechamento. Acompanha faixa no mesmo tecido para amarração.',
      price: 689.6,
      weight: 220,
      measurements: {
        ombros: {
          name: 'Ombros',
          description: 'Largura dos ombros',
          value: 50
        },
        bracos: {
          name: 'Braços',
          description: 'Comprimento dos braços',
          value: 99
        },
        quadril: {
          name: 'Quadril',
          description: 'Medida do quadril',
          value: 88
        },
        pernas: {
          name: 'Pernas',
          description: 'Comprimento das pernas',
          value: 110
        }
      },
      defaultColor: {
        name: 'Salmão',
        hex: '#EEA682'
      },
      colors: {
        salmao: {
          name: 'Salmão',
          hex: '#EEA682'
        },
        preto: {
          name: 'Preto',
          hex: '#000000'
        }
      },
      pictures: {
        main: 3,
        product: 2,
        paths: {
          1: '/img/demo/vestido-look-01.jpg',
          2: '/img/demo/vestido-detalhe.jpg',
          3: '/img/demo/vestido-look-02.jpg'
        }
      },
      options: {
        measurements: null,
        color: null
      }
    }
  ]
};
