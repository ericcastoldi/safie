# Preparação
**Entrega:** um link para o ambiente de testes e podemos iniciar a fase de prototipação.

Criar a estrutura inicial do projeto, definindo estrutura de diretórios de backend, frontend, testes, pipeline de integração contínua e um protótipo demonstrando as principais telas e o fluxo de navegação do site.

O backend deverá ser desenvolvido utilizando node.js e express.js, e o frontend deverá ser desenvolvido utilizando React, React Router e Redux.

Construir um esqueleto das páginas da loja, sem a parte administrativa. Definir todas as transições (links) entre páginas.  Todos os links devem ser resolvidos pelo react-router e todas as informações exibidas nas páginas devem vir da store redux mas podem ser estáticas. Desta forma as ações também não precisam alterar o estado.

Criar a estrutura inicial de testes unitários, de front e backend, mantendo a cobertura de código dentro do limite estabelecido.

Configurar os processos de DevOps, disparando build, testes com cobertura de código e deploy do commit feito.

## Páginas
- **Home:** página inicial com áreas de destaques, como promoções, lançamentos de coleções, etc.
- **Listagem de Peças:** página listando as peças de uma coleção ou de resultados de uma pesquisa.
- **Detalhes da Peça:** página principal de uma peça, com detalhes, fotos e botão para compra.
- **Carrinho de compras:** página listando os itens já adicionados ao carrinho, com cálculo de frete por CEP e com botão para fechar a compra.
- **Login | Cadastro de cliente:** após fechar a compra, caso o Cliente não esteja logado aparece a página para login ou novo cadastro.
- **Meus endereços:** após fechar a compra e com o Cliente logado, aparece a página para seleção de endereço de entrega ou cadastro de um novo endereço.
- **Pagamento:** página para realizar o pagamento. O pagamento será realizado utilizando os serviços de um provedor de pagamentos.
- **Compra concluída:** página de sucesso pela compra concluida, com links para a Home e para os Meus pedidos.
- **Meus pedidos:** página mostrando todas as compras já feitas pelo cliente no site, com possibilidade de acompanhamento de uma compra ainda em andamento (produção/entrega).
- **Detalhes do pedido:** página exibida ao selecionar um dos pedidos da área de Meus Pedidos, podendo acompanhar o status atual do pedido.

## Plano de atividades
### Estrutura do projeto e _pipeline_ de Integração Contínua
Inicializar o `package.json` do projeto definindo as dependências iniciais do projeto, que neste momento devem ser apenas os pacotes necessários para o funcionamento do expressjs, do babel, do react (e seus derivados) e do gulp. Inicializar também arquivos de configuração do editor e dos linters.

> Editor Config - http://editorconfig.org/

Iniciar a implementação do projeto criando o servidor http utilizando expressjs. Definir a estrutura de arquivos estáticos a serem servidos, bem como a folha de estilos inicial e a página _index_. Os arquivos estáticos devem ser servidos do diretório de deploy do projeto, ou seja, a estrutura de diretórios do deploy também deve ser definida neste momento.

Com isso deve ser alterado o `package.json`, definindo um script de "start" que inicialize a aplicação. Também deve ser criado o `gulpfile.js`, definindo uma task para copiar os arquivos estáticos para o diretório de deploy e outra task para limpar o diretório de deploy.

Criar o entry point dos componentes react, com os componentes `Provider` do pacote `react-redux` e `Router` do `react-router` e ajustar o servidor http para o devido funcionamento com o `react-router`.  Criar o componente principal da loja (`Safie.jsx`) contendo apenas uma string "hello world" para que seja possível validar a renderização. Inicializar o `.babelrc` com as configurações de transpile e ajustar o `gulpfile.js` para realizar o transpile dos componentes react na task de deploy da aplicação. Neste momento deve ser possível executar o projeto e visualizar os componentes react sendo renderizados.

Criar a estrutura de testes para os componentes react. Criar testes para o entry point e para o componente principal. Para cada componente react criado deverá ser criado um teste. O teste pode fazer apenas o mock dos módulos importados via `require`, inicializar os objetos dos pacotes de testes react e definir um teste para o método `render`.

> O teste do método `render` deve falhar sempre, a não ser que sejam implementados os devidos cenários de verificações e asserções.

Configurar projeto no Coveralls, no Travis e no Code Climate, para que seja avaliada a qualidade do produto a cada Pull Request. Alterar também o `README.md` para que exiba os badges de cobertura de código e de build.

Criar um template a englobar todas as páginas contendo _placeholders_ para topo e rodapé. O topo deverá conter o nome da loja e o rodapé não precisa ter conteúdo. As partes desse template deve ser implementadas utilizando componentes react e eles devem ser renderizados no componente principal da loja.

Definir um `initialState` básico a ser utilizado nas páginas _Listagem de Peças_ e _Detalhes da Peça_.  e realizar o envio desse `initialState` para o _client_ utilizando o servidor http, através da técnica de _server rendering_.

Criar a página de _Listagem de Peças_, apresentando uma _grid_ 3x5 de _placeholders_ com _captions_ representando as peças. Ao clicar nos placeholders deve ser disparada uma navegação para a página  _Detalhes da Peça_.

A página  _Detalhes da Peça_ deve conter um painel de exibição das fotos da peça, apresentando uma foto em destaque e _thumbnails_ das fotos disponíveis. Ao lado da foto em destaque devem aparecer um texto de detalhes da peça e um botão para compra.



Criar arquivos de configuração do Heroku e criar pipeline de continuous deployment para o projeto no Heroku. Alterar também o `README.md` para que exiba links para os ambientes.

### Desenvolvimento do protótipo

#### Home

> TODO: Detalhar conteúdo da Home.

#### Carrinho de compras

> TODO: Detalhar conteúdo do Carrinho de Compras.

#### Login | Cadastro de cliente (novo cadastro)

> TODO: Detalhar conteúdo da página de Login | Cadastro de cliente (novo cadastro).

#### Meu Cadastro

> TODO: Detalhar conteúdo da área de Meu Cadastro. A definição das medidas da cliente deve ser desenvolvida aqui.

#### Meus endereços

> TODO: Detalhar conteúdo da área de Meus endereços.

#### Pagamento

> TODO: Detalhar conteúdo da área de Pagamento.

#### Compra concluída

> TODO: Detalhar conteúdo da área de Compra concluída.

#### Meus pedidos

> TODO: Detalhar conteúdo da área de Meus Pedidos.

#### Detalhes do pedido

> TODO: Detalhar conteúdo da área de Detalhes do pedido.


### Ajustes Finais

> TODO: Detalhar ajustes finais. Verificar possíveis testes incompletos/instáveis e qualquer coisa fora do padrão, problemas de linter, minificação, formatação dos fontes como parte do processo de build, etc.
