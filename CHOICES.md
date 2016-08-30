# Escolhas e Definições

## Provedor de Hospedagem
O provedor de hospedagem será responsável por fornecer os serviços de hospedagem e execução do aplicativo, do suporte técnico do ambiente de hospedagem e de endereços de email utilizando o domínio da loja. Deve ser definido na etapa final do projeto.

> TODO: Definir provedor

## Provedor de Pagamentos
O provedor de pagamentos será responsável por realizar as transações entre o site e as operadoras de cartão de crédito ou bancos.  Toda a segurança das transações financeiras efetuadas pelo site será assegurada por este provedor. Deve ser definido depois que o protótipo já estiver funcional, na mesma etapa em que o mecanismo de persistência de dados será definido.

> TODO: Definir provedor

## Persistência de Dados
Banco de dados a ser utilizado, podendo ser um banco de dados relacional comum ou um NoSql. Deve ser suportado pelo provedor de hospedagem escolhido, então o provedor de hospedagem deve ser levado em consideração na decisão do mecanismo de persistência de dados.

> TODO: Definir mecanismo de persistência de Dados

## CSS Framework

Para a loja deve se utilizado um framework css que forneça um grid (preferencialmente aninhável) e estilos básicos de tipografia e de forms. O framework não pode depender de javascript algum, e caso no framework exista algum tipo de componente que use javascript deve ser possível utilizar o resto do framework sem fazer referência a javascript algum.

O framework também não deve depender de compilações (sass/less), bastando fazer a referencia ao(s) arquivo(s) css do framework. Devem ser priorizados os frameworks que fazem uso de semantica para definir os elementos HTML a serem afetados pelos estilos. Boa nomenclatura das classes CSS também é um fator importante que deve ser considerado na escolha.

> A preocupação com javascript reside no grande número de scripts que já são enviados ao client por parte do React. Para evitar conflitos e diminuir o memory footprint do client deve ser utilizado o mínimo de javascript possível.

### Frameworks
#### Skeleton CSS - http://getskeleton.com/

##### Tamanho (Kb)
O Skeleton é composto por dois arquivos css: o `normalize.css` (7.6Kb) e o `skeleton.css` (11.1Kb). Juntos eles somam 18.7Kb.

##### Grid
Contempla um grid de 12 colunas, com uma largura máxima de 960px que pode ser alterada via CSS.


* Colunas do grid -
* Tipografia -
* Formulários -
* Sass/Less -


- https://www.muicss.com/
- http://getuikit.com/
- http://getkickstart.com/
- http://tuktuk.tapquo.com/
- https://github.com/jslegers/cascadeframeworklight
- https://imperavi.com/kube/docs/
- http://semantic-ui.com/
- http://getbootstrap.com/
