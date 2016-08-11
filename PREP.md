# Preparação
**Entrega:** um link para o ambiente de testes e podemos iniciar a fase de prototipação.

Criar um servidor http utilizando o express js. Servir os arquivos estáticos e definir o initialState ainda no server na requisição do home. Realizar os ajustes necessários para o uso com o react-router.

Utilizando react, redux e react-router, construir um esqueleto das páginas da loja, sem a parte administrativa. Definir todas as transições (links) entre páginas.  Todos os links devem ser resolvidos pelo react-router e todas as informações exibidas nas páginas devem vir da store redux mas podem ser estáticas. Desta forma as ações também não precisam alterar o estado.

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
Iniciar a implementação criando o servidor http utilizando o express js. Definir a estrutura de arquivos estáticos a serem servidos, bem como a folha de estilos inicial e a página _index_. Os arquivos estáticos devem ser servidos do diretório de deploy do projeto, ou seja, a estrutura de diretórios do deploy também deve ser definida neste momento.


Definir um `initialState` básico para as páginas _Listagem de Peças_ e _Detalhes da Peça_ e realizar o envio desse `initialState` utilizando o servidor http, através da técnica de _server rendering_.

Criar um template inicial a englobar todas as páginas contendo _placeholders_ para topo e rodapé.

> TODO: DEFINIR CONTEÚDO DO TOPO E RODAPÉ

Criar a página de _Listagem de Peças_, apresentando uma _grid_ 3x5 de _placeholders_ com _captions_ representando as peças. Ao clicar nos placeholders deve ser disparada uma navegação para a página  _Detalhes da Peça_. Preferencialmente a listagem deve passar por parâmetro o produto selecionado para a tela de de detalhes.

> TODO: DEFINIR CONTEÚDO DOS DETALHES DA PEÇA

Para cada componente react criado para compor as páginas  _Listagem de Peças_ e _Detalhes da Peça_ deverá ser criado um teste. O teste pode fazer apenas o mock dos módulos importados via `require`, inicializar os objetos dos pacotes de testes react e definir um teste para o método `render`.

> O teste do método `render` deve falhar sempre, a não ser que sejam implementados os devidos cenários de verificações e asserções.
