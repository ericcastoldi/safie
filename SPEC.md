# Especificação
Portal de _e-commerce_ para venda de coleções de peças de vestuário feminino feitas sob medida para as clientes do site.

## Funcionalidades Principais
- O **Cliente** do site pode criar uma conta, definir suas medidas, pesquisar e ver detalhes de coleções e peças, realizar a compra de peças e consultar o andamento e o histórico das compras efetuadas.
- O **Administrador** do site pode alterar o conteúdo dinâmico do site, criar coleções, criar peças, definir quais coleções e peças estão ativas, consultar as compras feitas no site, alterar o status das compras feitas no site e consultar um resumo financeiro das compras feitas no site.

## Detalhamento
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
