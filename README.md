# Safie  [![Build Status](https://travis-ci.org/ericcastoldi/safie.svg?branch=master)](https://travis-ci.org/ericcastoldi/safie) [![Issue Count](https://codeclimate.com/github/ericcastoldi/safie/badges/issue_count.svg)](https://codeclimate.com/github/ericcastoldi/safie) [![Code Climate](https://codeclimate.com/github/ericcastoldi/safie/badges/gpa.svg)](https://codeclimate.com/github/ericcastoldi/safie)

Portal de e-commerce para venda de peças de vestuário feminino feitas sob medida para as clientes do site.

## Tecnologias

### Frontend

- ReactJS
- Redux
- React Router
- Gulp
- Babel

### Backend

- NodeJS
- ExpressJS
- PassportJS
- MongoDB

## Start da aplicação

Antes de startar a aplicação garantir que o MongoDB está em execução. No Linux o comando é `service mongod start`. Já no Windows deve ser disparado o executável `C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe` (esse caminho muda de acordo com a versão do Mongo instalada na máquina).

Em seguida basta instalar as dependências, e para startar em modo desenvolvimento basta executar o script npm `launch`:

```
$ npm install
$ npm run launch
```

Em produção está sendo usado o `pm2` para servir a aplicação como serviço no linux:

```
$ npm install pm2 -g
$ pm2 start app.js
```

## Pendências

### Cruciais para o lançamento do site

#### Correções e Ajustes

- **Redirecionamentos do login e cadastro:** Ao realizar login e fazer cadastro a cliente é redirecionada corretamente para a página "My Safie". No entanto, após realizar o Login caso a cliente entre manualmente na tela de login ou cadastro (escrevendo a url na barra do navegador ou clicando em algum link direto) ela conseguirá acessoar a página de login e/ou cadastro. Isso é indesejável pois ela já está autenticada.
- **Alterar ordem das coleções no menu**
  - 1 - Contínua; 
  - 2 - Barcelona; 
  - 3 - Cápsula;
- **Receba as novidades**: Ao entrar nome e email no formulário "Receba as novidades" deve ser disparado um email para contato@safie.com.br com o título "Safie.com.br - Maria deseja receber as novidades da Safie!" e com o conteúdo "Maria deseja receber as novidades da Safie! Seu e-mail é maria@gmail.com. Adicione Maria à sua lista de contatos de e-mail!". O site também deve exibir uma mensagem de sucesso abaixo do formulário de "Receba as novidades" com o texto "E-mail cadastrado com sucesso!" Caso a cliente não informe seu nome ou seu e-mail, ou ainda caso informe um e-mail inválido, o site deve exibir uma mensagem de erro abaixo do formulário "Receba as novidades" com a mensagem "Precisamos de seu nome e seu e-mail para enviarmos as novidades da Safie!" Caso ocorra algum erro inesperado ao tentar cadastrar o e-mail para receber as novidades, o site deve exibir uma mensagem de erro com a mensagem `"Ops! Algo inesperado ocorreu :( Por favor tente novamente!"`
- **Login com o facebook**: Ajustar as URLs de redirecionamento do facebook para tornar o processo de autenticação com o facebook mais suave.
- **Medidas**: Atualizar automaticamente as medidas da cliente ao fechar uma compra, utilizando as medidas informadas nas peças compradas. Exibir as medidas da cliente no painel correspondente da área My Safie.
- Enviar um e-mail para a cliente quando ela se cadastrar no site, dando boas vindas.
- Enviar um e-mail para a cliente quando ela fizer uma compra informando que a compra foi efetuada com sucesso.
- Enviar um email para a administração da Safie para que seja providenciado o início da produção do pedido
- Adicionar fotos conceito na coleção Barcelona
- Atualizar fotos das coleções pelas novas fotos redimensionadas 
- Ajustar links dos ícones de compartilhamento em redes sociais
- Ajustar textos incorretos nas peças
- Fazer o vínculo do endereço safie.com.br com o IP do servidor GoDaddy (ou outro servidor que venha a ser utilizado)
- Alterar a configuração do PagSeguro para fazer transações reais, deixando de utilizar o ambiente de sandbox.

### Desejáveis nas primeiras sprints pós lançamento

#### Contato

Criar página com formulário de contato (ao clicar em "Contato" no menu o usuário deve ser redirecionado para essa página).

No formulário de contato devem existir os campos Nome, email, telefone e texto de contato. Incluir nesta página também as informações da Safie: email para contato, telefone e horário de funcionamento.    

> Remover o item "Contato" do menu enquanto esta página não tiver sido criada.

#### Pesquisa

Abaixo do menu deve ser criado um campo de pesquisa onde deve ser possível pesquisar por todas as peças do site, tanto por nome quanto pela descrição da peça.

Deve ser criada uma tela com os resultados de pesquisa, nos moldes da listagem da sacola de compras.

> Enquanto a tela de resultados de pesquisa não tiver sido criada, o campo de pesquisa deve ficar oculto.

#### Esqueci minha senha

Criar um formulário com um campo para informar o e-mail cadastrado e um botão "Criar uma nova senha". Ao clicar nesse botão deve ser verificado se existe um usuário com o email informado:

- Caso exista, a senha desse usuário deve ser resetada e deve ser enviado um e-mail de notificação com a nova senha. O site deve então exibir a mensagem "Senha alterada com sucesso! A nova senha foi enviada para seu e-mail de cadastro." e um botão ou link para a tela de login.
- Caso NÃO exista, deve ser exibida a mensagem "Não foi encontrado nenhum usuário com este endereço de email, deseja se cadastrar?" e um botão ou link apontando para a tela de cadastro.

#### Sacola Principal

Caso a cliente adicione um produto na sacola de compras e não informe as medidas, buscar automaticamente do cadastro da cliente as medidas que ela já tem no perfil.

#### Quick Bag

- Adicionar painel com o valor total da compra (devidamente formatado)
- Implementar o drag and drop de peças para a sacola.

#### My Bag (sacola do My Safie)

- Adicionar painel com o preço do frete. Originalmente havia sido pensado em não ter esta informação, mas fica confuso para a cliente ver que as vezes  o preço total da compra é maior que a soma das roupas quando o preço do frete não está explícito no mesmo contexto.

#### Agradecimento

Adicionar um vídeo promocional no painel inferior da página de agradecimento.

#### Minhas Medidas

Alterar o painel de medidas do My Safie, tornando as medidas editáveis.
Criar inputs diretamente no painel de medidas, e criar um botão para salvar as medidas.

#### Meus Endereços

Criar botão para editar um endereço já existente.


### Pendências para finalização do portal

Para finalização do portal deve ser desenvolvida ainda a área administrativa, visando dar controle completo de todo o conteudo da loja.

#### Área administrativa

- **Home:** Resumo de vendas
- **Manutenção de coleções:** listagem, novo, atualizar, ativar/desativar a exibição no site.
- **Manutenção de produtos:** listagem, novo, atualizar, ativar/desativar a exibição no site.
- **Manutenção dos clientes:** listagem, novo, atualizar.
- **Manutenção dos pedidos:** listagem, atualizar dados, atualizar o status do pedido.
