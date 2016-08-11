# Visão do Produto
Portal de e-commerce para venda de coleções de peças de vestuário feminino feitas sob medida para as clientes do site.

## Partes envolvidas
Até o fim do projeto as seguintes partes estarão envolvidas no desenvolvimento desempenhando as funções especificadas:
- **Patrocinadora:** realizando os investimentos e o aceite ou não-aceite das entregas.
- **Desenvolvedor:** realizando a construção do site e resolvendo as quaisquer outras demandas técnicas do projeto.
- **Provedor de Domínio:** disponibilizando domínio escolhido para acesso ao site. _(Provedor a ser definido)_
- **Provedor de Hospedagem:** disponibilizando o servidor onde o site ficará hospedado e os endereços de email com o domínio do site. _(Provedor a ser definido)_
- **Provedor de transações financeiras:** possibilitando a realização de transações financeiras via bancos ou cartões de crédito. ex: PagSeguro. _(Provedor a ser definido)_
- **Correios:** disponibilizando informações de rastreamento de carga e de preços de entrega por CEP.

## Funcionalidades Principais
- O **Cliente** do site pode criar uma conta, pesquisar e ver detalhes de coleções e peças, realizar a compra de peças e consultar o andamento e o histórico das compras efetuadas.
- O **Administrador** do site pode alterar o conteúdo dinâmico do site, criar coleções, criar peças, definir quais coleções e peças estão ativas, consultar as compras feitas no site, alterar o status das compras feitas no site e consultar um resumo financeiro das compras feitas no site.

# Detalhamento
O portal será composto por dois sites: a loja e a área administrativa. Abaixo segue uma visão geral do mapa de ambos os sites.

- **Loja**
    - **Funcionalidades principais**
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
    - **Áreas de conteúdo dinâmico e destaques:**
        - **Destaques:**
            - Pop-up grande na homepage ao entrar no site: lançamentos ou promoções.
            - Banner na homepage passando fotos de peças: lançamentos ou promoções.
            - Aparecem por tempo determinado e configurável.
            - Podem ser ativadas e desativadas.
            - Deve suportar imagem e videos.
        - **Áreas de conteúdo**
            - Como se medir
            - Políticas de entrega
            - Formas de pagamento (?)
            - Área de Entre em Contato (?)
            - Podem ser ativadas e desativadas.
            - Deve suportar texto, imagem e videos.

- **Área administrativa**
    - **Home:** Resumo de vendas
    - **Manutenção de coleções:** listagem, novo, atualizar, ativar/desativar a exibição no site.
    - **Manutenção de produtos:** listagem, novo, atualizar, ativar/desativar a exibição no site.
    - **Manutenção dos clientes:** listagem, novo, atualizar.
    - **Manutenção dos pedidos:** listagem, atualizar dados, atualizar o status do pedido.
    - **Manutenção das áreas dinamicas do site:** listagem, novo, atualizar, ativar/desativar a exibição no site.

# Desenvolvimento
O desenvolvimento deve ser dividido nas fases de Preparação, Prototipação, Construção e Implantação. O controle dos itens a serem trabalhados e das datas de entrega será feito através da ferramenta GitHub - https://github.com - que também será a ferramenta que fará o controle dos códigos fonte de todo o projeto.

## Preparação
Existem alguns requisitos técnicos a serem resolvidos no início do projeto, como por exemplo a configuração de um ambiente de testes para que seja possível acessar o site a qualquer momento durante o desenvolvimento. A fase de preparação leva cerca de duas semanas, e ao fim desse período temos como entrega um link para o ambiente de testes e podemos iniciar a fase de prototipação.

## Prototipação
Na fase de prototipação serão construídas as páginas descritas no tópico de **Detalhamento** e as transições entre estas páginas, utilizando dados fictícios. Serão feitos ciclos semanais de construção e validação, onde será acordado entre a Patrocinadora e o Desenvolvedor o que será construído e durante a semana os itens construídos serão disponibilizados no ambiente de testes. Ao fim da semana é marcada uma reunião para discutir os itens construídos e definir quais serão os próximos passos.

Ao fim da fase de Prototipação teremos no ambiente de testes um portal totalmente funcional, porém utilizando dados fictícios e estáticos.

## Construção
A fase de Construção transforma o protótipo no produto final. Nesta fase são resolvidas as necessidades de banco de dados, integração com os serviços dos Correios (rastreamento e consulta de valor de frete por CEP), integração com os serviços de transações financeiras, etc.

Da mesma forma que na fase de Prototipação, serão feitos ciclos semanais de construção e validação, onde será acordado entre a Patrocinadora e o Desenvolvedor o que será trabalhado e ao fim da semana é marcada uma reunião para discutir os itens construídos e definir quais serão os próximos passos.

Ao fim da fase de Construção, teremos o produto final, totalmente funcional no ambiente de testes.

## Implantação
Com o produto finalizado e funcional, na fase de implantação é feita a aquisição do domínio, o contrato do fornecedor de hospedagem e a instalação do portal (site da loja e site administrativo) no ambiente disponibilizado pelo fornecedor de hospedagem.

Esta fase deve durar até 2 semanas, e após a implantação o site está pronto para ser divulgado e aberto para compras.

# Investimento
O investimento no projeto envolve os custos operacionais dos provedores de serviços envolvidos e o investimento no desenvolvimento do projeto em si. O investimento total do desenvolvimento do projeto é de R$599, além dos custos operacionais com provedores de serviços.

Para cada provedor a ser contratado para o projeto, será feita uma pesquisa e um orçamento por parte do Desenvolvedor para que então a Patrocinadora faça a decisão do provedor de serviço a ser utilizado.
