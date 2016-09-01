# Entregas

## Contextualização

Durante o mês de Agosto foi executada a etapa de _Preparação_ do projeto. Nesta etapa foi criado o repositório de códigos do projeto, configurado um pipeline de Continuous Delivery contemplando a execução de testes automatizados com extração da porcentagem de cobertura de código do projeto e com o deploy de cada commit no Heroku mantendo sempre um ambiente de demonstração com o conteúdo da _master_ (o que já foi aprovado) e um ambiente de demonstração para cada funcionalidade ainda sendo desenvolvida. Além disso também foi construído parte do Protótipo para que seja possível ter uma visualização preliminar do site nos ambientes de demonstração.

> Precisamos ter uma nova reunião para que eu te explique exatamente _o que_ é esse _pipeline de Continuous Delivery_.

Durante os próximos três meses de trabalho - setembro, outubro e novembro - serão executadas as próximas etapas do desenvolvimento:  Prototipação, Construção e Implantação.

A **Prototipação** visa entregar um software funcional porém utilizando dados fictícios e fixos ("não alteráveis"). A **Construção** visa dar vida ao protótipo, tornando tudo dinâmico e tornando possível que sejam cadastrados os conteúdos do site, entregando ao fim o software totalmente funcional. Por final a **Implantação** visa realizar a instalação do software no Provedor de Hospedagem escolhido e efetuar quaisquer eventuais ajustes e correções finais.

## Cronograma de Entregas

### Setembro - Prototipação

Durante o mês de setembro serão desenvolvidas todas as páginas da loja e da área administrativa. A entrega desta fase é a loja e a área administrativa **por completo**, visando ser o mais fiel possível visualmente ao produto final. O caráter de protótipo se dá pelo fato de que nesta versão todas as informações (produtos, pedidos, clientes, sacola de compras, etc.) exibidas no site serão estáticas. Na prática nenhum botão realizará ação alguma e nenhuma informação cadastrada será salva. Assim podemos ter contato com o site de forma mais rápida facilitando o ciclo de construção e validação.

#### Protótipo da Loja - 2 semanas

- **Listagem de Peças:** página listando as peças de uma coleção ou de resultados de uma pesquisa. Parte desta página já foi desenvolvida na fase de Preparação, agora ela precisa ser aprimorada para exibir resultados de pesquisa e para se adaptar à identidade visual da marca Safie.
- **Detalhes da Peça:** página principal de uma peça, com detalhes, fotos e botão para compra. Parte desta página já foi desenvolvida na fase de Preparação, agora ela precisa ser aprimorada para ser exibida de forma mais confortável em dispositivos móveis. Atualmente a informação de medidas da cliente está nesta página mas não sei se isso seria o ideal no fluxo de compra. Seria interessante discutir com a equipe que está te auxiliando sobre como seria uma boa forma de obter as medidas das clientes (no momento da compra? no momento do cadastro de clientes? no momento do pagamento?).
- **Sacola de compras:** página listando os itens já adicionados ao carrinho, com cálculo de frete por CEP e com botão para fechar a compra. Parte desta página já foi desenvolvida na fase de Preparação, agora ela precisa ser finalizada para permitir o calculo do CEP, a totalização dos valores e a remoção de produtos da Sacola de Compras.
  - **Painel de Itens da Sacola:** Componente exibido em todas as páginas da loja, listando as peças que já foram adicionadas à sacola de compras, podendo minimizar e maximizar.
- **Login | Cadastro de cliente:** após fechar a compra, caso a Cliente não esteja autenticada aparece a página para login ou novo cadastro. O login deve oferecer opções de autenticação externas ao site (Google, Facebook, etc). No cabeçalho do site será exibido o nome da cliente autenticada.
  - **Esqueci minha Senha:** página para efetuar a troca de senha, permitindo que a cliente informe seu e-mail e então o sistema cria uma nova senha aleatória para a cliente e envia essa nova senha por e-mail para a cliente. Posteriormente a cliente pode alterar a senha gerada automaticamente por uma nova senha.
  - **Trocar de Senha:** página para efetuar a troca de senha, informando e-mail, senha atual e nova senha.
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
- **Manutenção dos compras:** listagem, atualizar dados, atualizar o status do pedido (em produção, postado na transportadora, etc.).


#### Protótipo das áreas de conteúdo e de destaque do site - 1 semana
- **Loja - Áreas de conteúdo e destaques:**
  - **Home:** criação da página inicial com áreas de destaques das coleçoes.
  - **Áreas de conteúdo:** criação do layout das áreas de conteúdo do site. Áreas abaixo:
      - Como se medir
      - Políticas de entrega
      - Formas de pagamento
      - Formulário de Contato
- **Área Administrativa - Manutenção das áreas de conteúdo do site:** listagem, novo, atualizar, ativar/desativar a exibição no site.

### Outubro - Construção
Durante o mês de outubro serão desenvolvidas as ações do site, tanto as disparadas automaticamente (como o envio de emails de notificação para as Clientes e para a Administradora do site) quanto as disparadas manualmente (como o cadastro de produtos por parte da Administradora e as compras e adições de itens à sacola de compras por parte das Clientes da loja). A entrega desta fase é a loja e a área administrativa completamente finalizadas.

#### Banco de Dados - 1 semana
Realizar uma pesquisa do banco de dados a ser utilizado no projeto, levando em consideração que o provedor de hospedagem escolhido futuramente deverá dar suporte ao banco de dados escolhido neste momento.

Realizar as conexões da loja e da área administrativa com o banco de dados, definindo as estruturas de dados a serem utilizadas por cada área do site:
- **Cadastros de Produtos:** criar as definições de banco de dados responsáveis por salvar, atualizar e buscar os produtos do site. Realizar as conexões da área administrativa com o banco de dados de forma que seja possível cadastrar novos produtos utilizando a área administrativa do site. Realizar as conexões de todas as páginas da loja que exibem informaçoes de produtos com o banco de dados, de forma que o site passe a exibir nas listagens e pesquisas os produtos cadastrados na área administrativa.
- **Cadastros de Clientes:** criar as definições de banco de dados responsáveis por salvar, atualizar e buscar as informações das Clientes do site. Realizar as conexões da área administrativa com o banco de dados de forma que seja possível para a Administradora do site consultar os dados de todas as Clientes cadastradas no site. Realizar as conexões de todas as páginas da loja que  exibem informaçoes de Clientes com o banco de dados.
- **Sacola de compras:** criar as definições de banco de dados responsáveis por salvar, atualizar e buscar as informações dos itens nas Sacolas de Compras das Clientes do site. Realizar as conexões do site com o banco de dados de forma que seja possível para incluir e excluir itens da Sacola de Compras mesmo sem realizar a autenticação no site.
- **Compras:**  criar as definições de banco de dados responsáveis por salvar, atualizar e buscar as informações das Compras das Clientes do site. Realizar as conexões da área administrativa com o banco de dados de forma que seja possível para a Administradora consultar as compras feitas no site e atualizar a situação das compras, e realizar as conexões da loja com o banco de dados de forma que seja possível para as Clientes consultar seu histórico de compras feitas no site.

#### Autenticação - 1 semana
- **Autenticação via e-mail:** criar um mecanismo de autenticação no site utilizando o endereço de e-mail da Cliente e uma senha como credenciais, permitindo a compra de peças no site.
- **Autenticação via Google e Facebook - OAuth:** criar um mecanismo para que seja possível o acesso das clientes ao site e a compra de peças no site sem a necessidade de cadastro, utilizando contas do Google e do Facebook.
- **Esqueci minha Senha:** a cliente informa seu e-mail e então o sistema cria uma nova senha aleatória para a cliente e envia essa nova senha por e-mail para a cliente. Posteriormente a cliente pode alterar a senha gerada automaticamente por uma nova senha.
- **Trocar de Senha:** com a cliente autenticada no site,  informando senha atual e nova senha o sistema efetua a atualização da senha da cliente.

#### Entregas e Notificações  - 1 semana
- **Cálculo de frete:** realizar o cálculo de frete de acordo com o endereço ou CEP da Cliente.
- **Rastreamento:** permitir o rastreamento das peças compradas por parte das clientes.
- **Envio de notificações via e-mail:** enviar mensagens via e-mail para as Clientes e para a Administradora dos site notificando das seguintes ações:
  - Novo cadastro de cliente efetuado
  - Esqueci minha senha
  - Troca de senha
  - Nova compra/pedido efetuada
  - Alteração de situação da compra (em produção, enviada, etc.)

> Para entregas será utilizado o serviço dos Correios ou será utilizada outra Transportadora? Dependendo da forma de entrega também muda o cálculo do frete e a forma de obter as informações de rastreamento, por isso estou reservando uma semana completa para essa etapa, para lidar com os imprevistos.

#### Áreas de Conteúdo - 1 semana
- Implementação das áreas dinâmicas
- **Áreas de conteúdo:** implementação da exibição na loja e da administração das áreas de conteúdo do site, dando suporte ao uso de texto, imagens e vídeos. Considerar uma blog engine para estas áreas. Exemplos de áreas:
    - Como se medir
    - Políticas de entrega
    - Formas de pagamento
    - Formulário de Contato


### Novembro - Fim da Construção e Implantação
Durante o mês de Novembro serão realizadas as atividades finais do projeto, finalizando a construção do Site, configurando e efetuando a instalação do site no provedor de hospedagem.

#### Finalização da Construção  - 2 semanas
Realizar a pesquisa e definição do provedor de pagamentos a ser utilizado (ex: PagSeguro) e adicionar a chamada ao provedor de pagamentos no fluxo de compra do site, permitindo assim que as Clientes realizem o pagamento das compras feitas no site.

#### Analytics - 1 semana
Inclusão do Google Analytics no projeto para que possamos ter informações de uso das Clientes do site, como por exemplo de que estado do Brasil o site está sendo mais acessado, se ele está sendo mais acessado via celular ou computador, etc. Essas informações podem ser utilizadas para definir estratégias de mercado para a loja.

#### Hospedagem - 1 semana
Realizar a pesquisa e definição do provedor de hospedagem a ser utilizado (ex: UolHost) e realizar o contrato do provedor definido. Configuração da rotina de backups do provedor de hospedagem como precaução para evitar a perda dos dados do site.
Criação dos scripts de deploy e seed de dados, configurando as etapas de instalação do site no provedor de hospedagem e configurar os dados iniciais a serem cadastrados automaticamente no site (os produtos iniciais, destaques, etc).

## Futuro
Após o lançamento do site vamos realizando algumas possíveis correções e melhorias no site. Neste momento também podemos explorar novas possibilidades e novas funcionalidades para a loja e podemos conversar sobre uma próxima etapa de construção de novas funcionalidades.
