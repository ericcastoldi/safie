# Entregas

## Contextualização

Durante o mês de Agosto foi executada a etapa de _Preparação_ do projeto. Nesta etapa foi criado o repositório de códigos do projeto, configurado um pipeline de Continuous Delivery contemplando a execução de testes automatizados com extração da porcentagem de cobertura de código do projeto e com o deploy de cada commit no Heroku mantendo sempre um ambiente de demonstração com o conteúdo da _master_ (o que já foi aprovado) e um ambiente de demonstração para cada funcionalidade ainda sendo desenvolvida. Além disso também foi construído parte do Protótipo para que seja possível ter uma visualização preliminar do site nos ambientes de demonstração.

> Precisamos ter uma nova reunião para que eu te explique exatamente _o que_ é esse _pipeline de Continuous Delivery_.

Durante os próximos três meses de trabalho - setembro, outubro e novembro - serão executadas as próximas etapas do desenvolvimento:  Prototipação, Construção e Implantação.

A **Prototipação** visa entregar um software funcional porém utilizando dados fictícios e fixos ("não alteráveis"). A **Construção** visa dar vida ao protótipo, tornando tudo dinâmico e tornando possível que sejam cadastrados os conteúdos do site, entregando ao fim o software totalmente funcional. Por final a **Implantação** visa realizar a instalação do software no Provedor de Hospedagem escolhido e efetuar quaisquer eventuais ajustes e correções finais.

## Cronograma de Entregas

### Setembro - Fase: Prototipação

Durante o mês de setembro serão desenvolvidas todas as páginas da loja e da área administrativa. A entrega desta fase é a loja e a área administrativa **por completo**, visando ser o mais fiel possível visualmente ao produto final. O caráter de protótipo se dá pelo fato de que nesta versão todas as informações (produtos, pedidos, clientes, sacola de compras, etc.) exibidas no site serão estáticas. Na prática nenhum botão realizará ação alguma e nenhuma informação cadastrada será salva. Assim podemos ter contato com o site de forma mais rápida facilitando o ciclo de construção e validação.

#### Protótipo da Loja - 2 semanas

- **Listagem de Peças:** página listando as peças de uma coleção ou de resultados de uma pesquisa. Parte desta página já foi desenvolvida na fase de Preparação, agora ela precisa ser aprimorada para exibir resultados de pesquisa e para se adaptar à identidade visual da marca Safie.
- **Detalhes da Peça:** página principal de uma peça, com detalhes, fotos e botão para compra. Parte desta página já foi desenvolvida na fase de Preparação, agora ela precisa ser aprimorada para ser exibida de forma mais confortável em dispositivos móveis. Atualmente a informação de medidas da cliente está nesta página mas não sei se isso seria o ideal no fluxo de compra. Seria interessante discutir com a equipe que está te auxiliando sobre como seria uma boa forma de obter as medidas das clientes (no momento da compra? no momento do cadastro de clientes? no momento do pagamento?).
- **Sacola de compras:** página listando os itens já adicionados ao carrinho, com cálculo de frete por CEP e com botão para fechar a compra. Parte desta página já foi desenvolvida na fase de Preparação, agora ela precisa ser finalizada para permitir o calculo do CEP, a totalização dos valores e a remoção de produtos da Sacola de Compras.
- **Login | Cadastro de cliente:** após fechar a compra, caso a Cliente não esteja autenticada aparece a página para login ou novo cadastro. O login deve oferecer opções de autenticação externas ao site (Google, Facebook, etc). No cabeçalho do site será exibido o nome da cliente autenticada.
- **Meus endereços:** após fechar a compra e com a Cliente autenticada, a Cliente então é redirecionada para a seleção de endereço de entrega ou cadastro de um novo endereço. Durante a seleção de endereço o frete deve ser recalculado.
- **Pagamento:** página para realizar o pagamento, apresentando o resumo do pedido com os valores de cada peça, o valor total das peças, o valor do frete e o valor total do pedido.
- **Compra concluída:** página de sucesso pela compra concluida, com links para a Home e para os Meus pedidos.
- **Meus pedidos:** página mostrando todas as compras já feitas pela cliente no site, com possibilidade de acompanhamento de uma compra ainda em andamento (produção/entrega).
- **Detalhes do pedido:** página exibida ao selecionar um dos pedidos da área de Meus Pedidos, podendo acompanhar o status atual do pedido.
- **Breadcrumb:** Aplicação de um _breadcrumb_ em toda a loja. Breadcrumbs são os componentes que mostram o caminho feito pela cliente até uma determinada parte do site, ex: "Home > Produtos > Produto Abc".
- **Menu responsivo:** Adaptação da exibição do menu principal do site em dispositivos móveis.

#### Protótipo da Área Administrativa da Loja - 1 semana

- **Login:** Página simples de autenticação na área administrativa.
- **Home:** Listagem dos últimos pedidos ainda não concluídos.
- **Manutenção de produtos:** listagem, novo, atualizar, ativar/desativar a exibição no site.
- **Manutenção dos clientes:** listagem, novo, atualizar.
- **Manutenção dos compras:** listagem, atualizar dados, atualizar o status do pedido (em produção, postado nos correios, etc.).


#### Protótipo das áreas de conteúdo e de destaque do site - 1 semana
- **Loja - Áreas de conteúdo e destaques:**
  - **Home:** criação da página inicial com áreas de destaques das coleçoes.
  - **Áreas de conteúdo:** criação do layout das áreas de conteúdo do site. Áreas abaixo:
      - Como se medir
      - Políticas de entrega
      - Formas de pagamento
      - Formulário de Contato
- **Área Administrativa - Manutenção das áreas de conteúdo do site:** listagem, novo, atualizar, ativar/desativar a exibição no site.

### Outubro - Fase: Construção
Durante o mês de outubro serão desenvolvidas as ações do site, tanto as disparadas automaticamente (como o envio de emails de notificação para as Clientes e para a Administradora do site) quanto as disparadas manualmente (como o cadastro de produtos por parte da Administradora e as compras e adições de itens à sacola de compras por parte das Clientes da loja). A entrega desta fase é a loja e a área administrativa completamente finalizadas.

#### Banco de Dados - 1 semana
Realizar uma pesquisa do banco de dados a ser utilizado no projeto, levando em consideração que o provedor de hospedagem escolhido futuramente deverá dar suporte ao banco de dados escolhido neste momento.

Realizar as conexões da loja e da área administrativa com o banco de dados, definindo as estruturas de dados a serem utilizadas por cada área do site:
- **Cadastros de Produtos:** criar as definições de banco de dados responsáveis por salvar, atualizar e buscar os produtos do site. Realizar as conexões da área administrativa com o banco de dados de forma que seja possível cadastrar novos produtos utilizando a área administrativa do site. Realizar as conexões de todas as páginas da loja que exibem informaçoes de produtos com o banco de dados, de forma que o site passe a exibir nas listagens e pesquisas os produtos cadastrados na área administrativa.
- **Cadastros de Clientes:** criar as definições de banco de dados responsáveis por salvar, atualizar e buscar as informações das Clientes do site. Realizar as conexões da área administrativa com o banco de dados de forma que seja possível para a Administradora do site consultar os dados de todas as Clientes cadastradas no site. Realizar as conexões de todas as páginas da loja que  exibem informaçoes de Clientes com o banco de dados.
- **Sacola de compras:** criar as definições de banco de dados responsáveis por salvar, atualizar e buscar as informações dos itens nas Sacolas de Compras das Clientes do site. Realizar as conexões do site com o banco de dados de forma que seja possível para incluir e excluir itens da Sacola de Compras mesmo sem realizar a autenticação no site.
- **Compras:**  criar as definições de banco de dados responsáveis por salvar, atualizar e buscar as informações das Compras das Clientes do site. Realizar as conexões da área administrativa com o banco de dados de forma que seja possível para a Administradora consultar as compras feitas no site e atualizar a situação das compras, e realizar as conexões da loja com o banco de dados de forma que seja possível para as Clientes consultar seu histórico de compras feitas no site.

- Implementação da autenticação e OAuth
- Implementação do rastreamento Correios
- Implementação de notificações via e-mail
- Implementação das áreas dinâmicas

### Novembro - Fases: Fim da Construção e Implantação
 - Finalização da construção
  - Pesquisa e definição do provedor de pagamentos
  - Implementação dos pagamentos
 - Criação dos scripts de deploy e seed de dados
 - Contratação do provedor de hospedagem
 - Definição dos Backups do provedor
 - Últimos ajustes da construção
 - Analytics


### Dezembro e Janeiro - Suporte
- Lançamento do site
- Correções de erros
- Ajustes e melhorias
