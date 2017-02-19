# Menu

## Contato
Criar página com formulário de contato (ao clicar em "Contato" no menu o usuário deve ser redirecionado para essa página).

No formulário de contato devem existir os campos Nome, email, telefone e texto de contato. Incluir nesta página também as informações da Safie: email para contato, telefone e horário de funcionamento.    

Para exibição das mensagens de sucesso e de falha deve ser criado um componente React de exibição de resultados, recebendo uma prop `success (bool)` e uma `message (string)`. Esse mesmo componente deve ser utilizado para exibir as falhas e os sucessos dos formulários de Contato, Novidades, Login, Cadastro, Endereços, Medidas (My Safie), Medidas (Tela do produto) e Cálculo de Frete. Também devem ser feitas melhorias nas validações dessas rotinas.

> Remover o item "Contato" do menu enquanto esta página não tiver sido criada.

## Pesquisa

Abaixo do menu deve ser criado um campo de pesquisa onde deve ser possível pesquisar por todas as peças do site, tanto por nome quanto pela descrição da peça.

Deve ser criada uma tela com os resultados de pesquisa, nos moldes da listagem da sacola de compras.

> Enquanto a tela de resultados de pesquisa não tiver sido criada, o campo de pesquisa deve ficar oculto.

## ~~Sacola de compras~~

~~Abaixo do menu deve ser criado um link para a sacola de compras, com o mesmo formato da sacola da Quick Bag.~~

# Home
-   ~~Ajustar o ícone do PagSeguro~~
-   Implementar envio de email da área "Receba as novidades"
-   Ajustar link "Quero entender como a SAFIE funciona" (quando a página "Como a Safie funciona" estiver concluída)*
-   Ajustar link "Ajustes e Devoluções" (quando a página com a política de ajustes estiver concluída)*
-   Ajustar link "Prazos de Entrega" (quando a página com a política de prazos de entrega estiver concluída)*
-   Ajustar link "Pagamentos" (quando a página com a política de pagamentos estiver concluída)*
-   ~~Criar barra de "Entrega em todo o Brasil" no topo do site com um cinza mais claro que o da versão instalada.~~

## Receba as novidades

Ao entrar nome e email no formulário "Receba as novidades" deve ser disparado um email para contato@safie.com.br com o título "Safie.com.br - Maria deseja receber as novidades da Safie!" e com o conteúdo "Maria deseja receber as novidades da Safie! Seu e-mail é maria@gmail.com. Adicione Maria à sua lista de contatos de e-mail!". O site também deve exibir uma mensagem de sucesso abaixo do formulário de "Receba as novidades" com o texto "E-mail cadastrado com sucesso!"

Caso a cliente não informe seu nome ou seu e-mail, ou ainda caso informe um e-mail inválido, o site deve exibir uma mensagem de erro abaixo do formulário "Receba as novidades" com a mensagem "Precisamos de seu nome e seu e-mail para enviarmos as novidades da Safie!"

Caso ocorra algum erro inesperado ao tentar cadastrar o e-mail para receber as novidades, o site deve exibir uma mensagem de erro com a mensagem "Ops! Algo inesperado ocorreu :( Por favor tente novamente!"

## Políticas (Ajustes, Entrega, Pagamentos e Como Funciona)

Devem ser criadas as páginas de políticas da Safie, para que posteriormente sejam vinculadas aos links do rodapé da Home.

-   Criar página contendo o texto de política de troca*
-   Criar página contendo o texto de política de pagamentos*
-   Criar página contendo o texto de política de entrega*
-   Criar página "Como a Safie Funciona"*

# ~~Painel usuário atual~~

~~Ao clicar no link "Sair", o usuário deve ser redirecionado para a coleção Capsula.~~

# Login

-   ~~Criar validação garantindo que caso o usuário JÁ esteja logado, ao tentar acessar a tela de login o usuário seja redirecionado para o My Safie.~~
-   ~~Centralizar o link "Esqueci minha senha"~~ e ajustar para que ele aponte para a página "Esqueci minha senha".

> Enquanto a funcionalidade "Esqueci minha senha" não estiver implementada o link deve ficar oculto.

## Esqueci minha senha

Criar um formulário com um campo para informar o e-mail cadastrado e um botão "Criar uma nova senha". Ao clicar nesse botão deve ser verificado se existe um usuário com o email informado:

-   Caso exista, a senha desse usuário deve ser resetada e deve ser enviado um e-mail de notificação com a nova senha. O site deve então exibir a mensagem "Senha alterada com sucesso! A nova senha foi enviada para seu e-mail de cadastro." e um botão ou link para a tela de login.
-   Caso NÃO exista, deve ser exibida a mensagem "Não foi encontrado nenhum usuário com este endereço de email, deseja se cadastrar?" e um botão ou link apontando para a tela de cadastro.

## Login com o facebook

-   Ajustar as URLs de redirecionamento do facebook para tornar o processo de autenticação com o facebook mais suave.

# Cadastro de Usuários

-   ~~Criar validação garantindo que caso o usuário JÁ esteja logado, ao tentar acessar a tela de cadastro o usuário seja redirecionado para o My Safie.~~
-   ~~Centralizar o link de termos e privacidade~~ e ajustar para que ele aponte para a página de termos de uso da Safie.
-   ~~Remover a mensagem "Cadastro realizado com sucesso" que sempre aparece mesmo quando não foi realizada ação alguma no formulário~~ (alterar para que seja utilizado o novo componente de exibição de mensagens de sucesso e de erro).

## Termos de Uso*

-   Criar página com os Termos de Uso da Safie.*

# Listagem das Peças

-   Definir imagens e textos conceituais da coleção Barcelona.

## Informações necessárias de cada peça
-   Nome da peça
-   Descrição da peça
-   Coleção a que a peça pertence
-   Preço da peça
-   Peso da peça
-   Medidas necessárias para produzir a peça
-   Cores (para as peças que tem opção de várias cores)
-   Cor padrão/Cor predominante
-   Fotos da peça com modelo
-   Foto somente da peça com fundo branco

# Página principal das peças

Ajustar os links de email, facebook e instagram para ações reais de compartilhamento da peça e suas informações.

~~Adicionar um link no popup das medidas que abra em outra aba a imagem do manequim com a indicação de cada medida.~~

# Sacolas de compras

> ~~**Criar um componente com o ícone da sacola de compras e a contagem de produtos na lateral**~~

## Sacola Principal

-   Ajustar erro da cor selecionada nas peças da sacola
-   ~~Colocar link para as peças (ao clicar na foto vai para a pagina de detalhes da peça)~~
-   Criar botão para editar/corrigir as medidas de uma peça da sacola. Ao clicar no botão deve ser aberto o formulário de medidas.
-   Criar botão para editar/corrigir as cores de uma peça da sacola. Ao clicar no botão deve ser aberto um pop-up com o seletor de cores.
-   ~~Criar botão "Continuar comprando" ao lado do botão "Finalizar compra". Ao clicar no botão o usuário deve ser redirecionado para a coleção conceito.~~
-   ~~Criar validação no botão "Finalizar Compra", garantindo que só pode ser finalizada uma compra que tenha todas as medidas informadas.~~
-   ~~Criar popup com mensagem de confirmação de que todas as medidas foram informadas e que  as informações dadas são verdadeiras ao clicar no "Finalizar compra" (caso todas as medidas tenham sido informadas corretamente)~~
-   ~~Ao final do processo de "Finalizar Compra" o usuário deve ser redirecionado:~~
  * ~~Caso NÃO esteja logado, deve ser redirecionado para o login. Após se cadastrar ou fazer o login o usuário será redirecionado para o My Safie onde ele pode clicar novamente em "Finalizar Compra".~~
  * ~~Caso ESTEJA logado, deve ser redirecionado para a tela de checkout.~~
-   ~~Formatar valor total da compra corretamente~~
-   Implementar o cálculo de frete

## Quick Bag

-   ~~Ajustar altura da Quick Bag~~
-   ~~Ajustar abertura/fechamento da quickbag ao clicar no "x" dos itens e no link da sacola.~~
-   Colocar link para as peças (ao clicar na foto vai para a pagina de detalhes da peça)
-   Adicionar painel com o valor total da compra (devidamente formatado)
-   Ajustar case da fonte, deixando o nome de todos os produtos da sacola em uppercase.

> No futuro deve ser implementado o drag and drop de peças para a sacola.

# Checkout

~~Criar tela de Checkout de acordo com o modelo da pasta Frontend.~~

> ~~Validar com a Sabrine se os botões "Adicionar novo endereço" e "Realizar pagamento" estão corretos (na minha versão estão com cantos arredondados e o botão de endereço aparece diferente de todos os demais botões do site).~~

## Resumo do pedido

Listar os produtos da sacola de compras. Caso já tenha sido feito um cálculo de frete, deve ser exibido o quadro "Frete" com o valor do frete. Caso ainda não tenha sido feito o cálculo de frete, o quadro não deve ser exibido.

Exibir também o total a pagar, devidamente formatado.

## Endereço da entrega

Listar os endereços do usuário logado. Caso não existam endereços deve ser exibida a mensagem "Nenhum endereço encontrado. Cadastre o endereço em que você deseja receber sua encomenda da Safie!".

Ao selecionar um endereço de entrega o frete deve ser recalculado e o novo frete deve ser exibido no quadro "Frete" da área "Resumo do Pedido"

## Realizar pagamento

Ao clicar no botão "Realizar pagamento" deve ser verificado se existe um endereço de entrega selecionado e se o frete foi devidamente calculado. Em caso positivo deve ser acionado o PagSeguro, enviando as informações de peças, peso e endereço de entrega.
Depois que o PagSeguro retornar um sinal de que o pagamento foi efetuado, o site deve:
-   Gerar um pedido, a ser exibido posteriormente na área My Safie
-   Ao gerar o pedido, a sacola de compras deve ser resetada.
-   Enviar um e-mail para o usuário informando que a compra foi efetuada com sucesso
-   Enviar um email para a administração da Safie para que seja providenciado o início da produção do pedido
-   Finalmente o usuário então deve ser redirecionado para a tela de agradecimento pela compra.

> Definir formato, textos e assuntos dos e-mails.

O pedido a ser gerado deve ter as seguintes informações:
-   Número de pedido gerado automaticamente
-   Peças do pedido e opções das peças (cor e medidas)
-   Endereço de entrega
-   Valor do frete
-   Valor total
-   Status (Em produção, Enviado)

No caso de alguma falha na comunicação com o PagSeguro o site deve redirecionar o usuário para uma página de falha explicando que houve um problema e pedindo para que tente efetuar a compra novamente. A sacola de compras deve permanecer inalterada nesse caso.

> Ao fim da implementação do pagamento deve ser ajustado o quadro "Meus pedidos" do My Safie.

# Agradecimento

~~Criar a tela de Agradecimento de acordo com o modelo da pasta Frontend. 
Ao clicar no botão "Acompanhar meu pedido" o usuário deve ser redirecionado para o My Safie.~~

Adicionar um vídeo promocional no painel inferior.

> Validar com a Sabrine qual será o vídeo a ser exibido no painel inferior no lugar da imagem.

# My Safie

-   ~~Colocar link nos itens circulares~~
-   ~~Adicionar validação para que o usuário seja redirecionado para a tela de login caso ele tente acessar a página /my-safie sem estar logado no site.~~

## Minhas Medidas

Implementar o cadastro de medidas da cliente, definindo como será o vínculo das medidas com a cliente e com as peças em questão de relacionamentos de banco de dados.

Criar campos diretamente no painel de medidas, visando evitar o uso excessivo de popups, e criar um botão para salvar as medidas.

> Validar com a Sabrine se será feito algum ajuste por parte do Diego nessa tela.


## Meus Pedidos

Listar os 5 últimos pedidos feitos pela cliente.

> Esse painel será implementado após a implementação do processo de compra. Nesse painel serão exibidos os pedidos gerados pelo processo de compra.


## Meus Endereços

-   Criar botão para editar um endereço já existente.

## Minha Sacola

-   Ajustar posicionamento do botão de exclusão de item da sacola.
-   Ajustar case da fonte, deixando o nome de todos os produtos da sacola em uppercase.
-   Formatar corretamente o valor total da compra

> Validar com a Sabrine se iremos exibir o valor do frete na My Bag
