### Termos de acordos

Ao iniciar este projeto, você concorda com as diretrizes do Código de Ética e Conduta e do Manual da Pessoa Estudante da Trybe.

# Boas vindas ao repositório do projeto de Carrinho de Compras!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

---

## SUMÁRIO

- [Habilidades](#habilidades)
- [Entregáveis](#entregáveis)
  - [O que será desenvolvido](#o-que-será-desenvolvido)
    - [Protótipo do projeto](#protótipo-do-projeto)
- [Data de entrega](#data-de-entrega)
- [Desenvolvimento](#desenvolvimento)
  - [Antes de começar a desenvolver:](#antes-de-começar-a-desenvolver)
  - [Durante o desenvolvimento](#durante-o-desenvolvimento)
    - [ESLint e Stylelint](#eslint-e-stylelint)
    - [Cypress](#cypress)
    - [Cobertura de testes](#cobertura-de-testes)
    - [Pontos importantes para a implementação dos testes](#pontos-importantes-para-a-implementação-dos-testes)
- [Requisitos do projeto](#requisitos-do-projeto)
  - [API Shopping Cart](#api-shopping-cart)
  - [Observações técnicas](#observações-técnicas)
    - [1. Crie uma listagem de produtos](#1-crie-uma-listagem-de-produtos)
    - [2. Adicione o produto ao carrinho de compras](#2-adicione-o-produto-ao-carrinho-de-compras)
    - [3. Remova o item do carrinho de compras ao clicar nele](#3-remova-o-item-do-carrinho-de-compras-ao-clicar-nele)
    - [4. Carregue o carrinho de compras através do **LocalStorage** ao iniciar a página](#4-carregue-o-carrinho-de-compras-através-do-localstorage-ao-iniciar-a-página)
    - [5. Some o valor total dos itens do carrinho de compras](#5-some-o-valor-total-dos-itens-do-carrinho-de-compras)
    - [6. Crie um botão para limpar o carrinho de compras](#6-crie-um-botão-para-limpar-o-carrinho-de-compras)
    - [7. Adicione um texto de "carregando" durante uma requisição à API](#7-adicione-um-texto-de-carregando-durante-uma-requisição-à-api)
    - [8. Desenvolva testes para atingir 40% de cobertura](#8-desenvolva-testes-para-atingir-40-de-cobertura)
    - [9. Desenvolva testes para atingir 60% de cobertura](#9-desenvolva-testes-para-atingir-60-de-cobertura)
    - [10. Desenvolva testes para atingir 80% de cobertura](#10-desenvolva-testes-para-atingir-80-de-cobertura)
    - [11. Desenvolva testes para atingir 100% de cobertura](#11-desenvolva-testes-para-atingir-100-de-cobertura)
  - [Depois de terminar o desenvolvimento](#depois-de-terminar-o-desenvolvimento)
  - [Revisando um pull request](#revisando-um-pull-request)
- [Avisos finais](#avisos-finais)

---

## Habilidades

Nesse projeto, você será capaz de:

- Fazer requisições a uma API *(Application Programming Interface)* do Mercado Livre;
- Utilizar os seus conhecimentos sobre JavaScript, CSS e HTML;
- Trabalhar com funções assíncronas;
- Implementar testes unitários.

---

# Entregáveis

Para entregar o seu projeto você deverá criar um Pull Request neste repositório.

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/course/fundamentals/git) sempre que precisar!

## O que será desenvolvido

Nesse projeto vocês farão um **carrinho de compras** totalmente dinâmico! E o melhor: consumindo dados diretamente de uma **API!** Isso mesmo. Da sigla em inglês _Application Programming Interface_, uma API é um ponto de contato na internet com determinado serviço. Através de **requisições HTTP** a essa API é possível interagir com ela da forma como quem a criou planejou. Aqui usaremos a API do Mercado Livre para buscarmos produtos à venda.

### Protótipo do projeto

Seu projeto deve ter o comportamento parecido com o do gif abaixo quando finalizado, **não se preocupe em replicar o visual, o gif so ilustra o comportamento**:

![Project Gif](./prototipo.gif)

---

# Data de entrega

  - Projeto individual;
  - Serão `X` dias de projeto.
  - Data de entrega para avaliação final do projeto: `DD/MM/YYYY - 14:00h`.

---

# Desenvolvimento

⚠️ É importante que seus arquivos tenham exatamente estes nomes! ⚠️

O seu Pull Request deverá conter os arquivos `index.html`, `style.css` e `script.js`, que conterão seu código HTML, CSS e JavaScript, respectivamente.

Caso você faça o download de bibliotecas externas, utilize o diretório `libs` (a partir da raiz do projeto) para colocar os arquivos (*.css, *.js, etc...) baixados.

Você pode adicionar outros arquivos se julgar necessário. Qualquer dúvida, procure a monitoria.

## Antes de começar a desenvolver:

1. Clone o repositório
  * `git clone git@github.com:tryber/sd-0x-project-shopping-cart.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-0x-project-shopping-cart`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`

3. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora, crie uma branch onde você vai guardar os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-sobrenome-nome-do-projeto`
    * Exemplo: `git checkout -b maria-silva-shopping-cart`

4. Quando fizer mudanças, adicione-as ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (devem aparecer listados os novos arquivos em vermelho)
  * Adicione o novo arquivo ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (devem aparecer listados os arquivos em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'iniciando o projeto. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin maria-silva-shopping-cart`

6. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-0x-project-shopping-cart/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_, um título claro que o identifique, e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-0x-project-shopping-cart/pulls) e confira que o seu _Pull Request_ está criado

---

## Durante o desenvolvimento

* Faça `commits` das alterações que você fizer no código regularmente;

* Lembre-se de sempre após um ~~(ou alguns)~~ `commits` atualizar o repositório remoto (o famoso `git push`);

* Os comandos que você utilizará com mais frequência são:

  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_;

  2. `git add` _(para adicionar arquivos ao stage do Git)_;

  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_;

  4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_;

  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_.

---

### ESLint e Stylelint

Para garantir a qualidade do código, vamos utilizar neste projeto os linters `ESLint` e `Stylelint`.
Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível
e de fácil manutenção! Para rodá-los localmente no projeto, execute os comandos abaixo:

```bash
  npm run lint
  npm run lint:styles
```

Em caso de dúvidas, confira o material do course sobre [ESLint e Stylelint](https://app.betrybe.com/course/real-life-engineer/eslint).

⚠️ Lembre-se que o seu projeto só será avaliado se estiver passando pelos _checks_ do **linter**.

---

### Cypress

Cypress é uma ferramenta de teste de front-end desenvolvida para a web.
Você pode rodar o cypress localmente para verificar se seus requisitos estão passando, para isso execute um dos seguintes comandos:

Para executar os testes apenas no terminal:

```bash
npm test
```

Para executar os testes e vê-los rodando em uma janela de navegador:

```bash
npm run cypress:open
```

***ou***

```bash
npx cypress open
```

Após executar um dos dois comandos acima, será aberta uma janela de navegador e então basta clicar no nome do arquivo de teste que quiser executar (project.spec.js), ou para executar todos os testes clique em Run all specs

Você também pode assistir a [este](https://vimeo.com/539240375/a116a166b9) vídeo 😉🎙

**Para rodar o cypress é preciso ter rodado o comando npm install anteriormente.**

---

### Cobertura de testes

Neste projeto, você irá implementar testes para quatro funções e, para avaliá-los, será utilizado a cobertura de testes.

Essa cobertura avalia a eficácia dos testes implementados de acordo com os requisitos, determinando se cobrem o que foi pedido ou não.

**Será testado apenas as quatros funções pedidas, e não toda a aplicação!**

Conforme você for realizando o projeto, a porcentagem da cobertura irá aumentar. Será avaliado 40%, 60%, 80%, e, por fim, 100% dos testes.

Para executar a cobertura de testes, rode o comando abaixo:

```bash
npm run test:coverage
```

Verifique com `npm test` se todos os itens da cobertura dos testes estão passando corretamente. **Atenção**: cuidado com eventuais falso-positivos!

### Pontos importantes para a implementação dos testes

Disponibilizamos a API simulada para você implementar seus testes. Isso significa que será possível simular o consumo de todos os dados da API dentro do seu ambiente de testes, de forma segura e independente de fatores externos que possam ocorrer.

- As funções `fetchProducts` e `fetchItem` devem ser implementadas por você;
- O `window.fetch` está definido em todos os testes, ou seja, será possível usar a função `fetch` dentro do seu ambiente de testes sem precisar importar ou instalar bibliotecas;
- Utilize o `localStorage.getItem` e o `localStorage.setItem` normalmente no ambiente de teste, pois a simulação dele está pronta para ser chamada quando necessário.
- Para nosso ambiente de testes, o `fetch` está limitado a atender somente a configuração da API referente ao projeto;
- Deseja checar se uma função foi chamada? Ou se foi chamada com um argumento específico? Que tal dar uma olhada nos matchers da [documentação](https://jestjs.io/pt-BR/docs/expect#tohavebeencalled).

---

# Requisitos do projeto

## API Shopping Cart

O [manual da API do Mercado Livre](https://developers.mercadolivre.com.br/pt_br/itens-e-buscas) contém muitas informações sobre ela. Utilizaremos alguns dos _endpoints_, e a forma de uso está detalhada no primeiro requisito.

## Observações técnicas

A seguir, estão listados como será a avaliação do seu projeto e todos os requisitos que devem ser cumpridos. Leia-os atentamente e siga à risca o que for pedido. Em particular, **atente-se para os nomes de classes que alguns elementos de seu projeto devem possuir**. O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.

### 1. Crie uma listagem de produtos

Você deve criar uma listagem de produtos que devem ser consultados através da API do Mercado Livre.

Para isso, você terá de implementar a função `fetchProducts` que já está criada no arquivo `fetchProducts.js` que se encontra dentro da pasta `helpers`. Mas atenção, dentro do arquivo `fetchProducts.js` deve ser implementada **apenas** a função `fetchProducts`.

A função `fetchProducts` que você irá implementar, deve consumir o seguinte _endpoint_:

```javascript
"https://api.mercadolibre.com/sites/MLB/search?q=$QUERY"
```
Onde `$QUERY` deve ser o valor da sua busca. Para este trabalho, a busca deve ser **obrigatoriamente** o termo `computador`.

O retorno desse _endpoint_ será algo no formato `json`. Por exemplo, se for pesquisado "computador":
```json
{
    "site_id": "MLB",
    "query": "computador",
    "paging": {
        "total": 406861,
        "offset": 0,
        "limit": 50,
        "primary_results": 1001
    },
    "results": [
        {
            "id": "MLB1341925291",
            "site_id": "MLB",
            "title": "Processador Intel Core I5-9400f 6 Núcleos 128 Gb",
            "seller": {
                "id": 385471334,
                "permalink": null,
                "power_seller_status": null,
                "car_dealer": false,
                "real_estate_agency": false,
                "tags": []
            },
            "price": 899,
            "currency_id": "BRL",
            "available_quantity": 1,
            "sold_quantity": 0,
            "buying_mode": "buy_it_now",
            "listing_type_id": "gold_pro",
            "stop_time": "2039-10-10T04:00:00.000Z",
            "condition": "new",
            "permalink": "https://www.mercadolivre.com.br/processador-intel-core-i5-9400f-6-nucleos-128-gb/p/MLB13953199",
            "thumbnail": "http://mlb-s2-p.mlstatic.com/813265-MLA32241773956_092019-I.jpg",
            "accepts_mercadopago": true,
            "installments": {
                "quantity": 12,
                "amount": 74.92,
                "rate": 0,
                "currency_id": "BRL"
            },
            "address": {
                "state_id": "BR-SP",
                "state_name": "São Paulo",
                "city_id": "BR-SP-27",
                "city_name": "São José dos Campos"
            },
            "shipping": {
                "free_shipping": true,
                "mode": "me2",
                "tags": [
                    "fulfillment",
                    "mandatory_free_shipping"
                ],
                "logistic_type": "fulfillment",
                "store_pick_up": false
            },
            "seller_address": {
                "id": "",
                "comment": "",
                "address_line": "",
                "zip_code": "",
                "country": {
                    "id": "BR",
                    "name": "Brasil"
                },
                "state": {
                    "id": "BR-SP",
                    "name": "São Paulo"
                },
                "city": {
                    "id": "BR-SP-27",
                    "name": "São José dos Campos"
                },
                "latitude": "",
                "longitude": ""
            },
            "attributes": [
                {
                    "source": 1,
                    "id": "ALPHANUMERIC_MODEL",
                    "value_id": "6382478",
                    "value_struct": null,
                    "values": [
                        {
                            "name": "BX80684I59400F",
                            "struct": null,
                            "source": 1,
                            "id": "6382478"
                        }
                    ],
                    "attribute_group_id": "OTHERS",
                    "name": "Modelo alfanumérico",
                    "value_name": "BX80684I59400F",
                    "attribute_group_name": "Outros"
                },
                {
                    "id": "BRAND",
                    "value_struct": null,
                    "attribute_group_name": "Outros",
                    "attribute_group_id": "OTHERS",
                    "source": 1,
                    "name": "Marca",
                    "value_id": "15617",
                    "value_name": "Intel",
                    "values": [
                        {
                            "id": "15617",
                            "name": "Intel",
                            "struct": null,
                            "source": 1
                        }
                    ]
                },
                {
                    "name": "Condição do item",
                    "value_id": "2230284",
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Outros",
                    "source": 1,
                    "id": "ITEM_CONDITION",
                    "value_name": "Novo",
                    "value_struct": null,
                    "values": [
                        {
                            "id": "2230284",
                            "name": "Novo",
                            "struct": null,
                            "source": 1
                        }
                    ]
                },
                {
                    "id": "LINE",
                    "value_name": "Core i5",
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Outros",
                    "name": "Linha",
                    "value_id": "7769178",
                    "value_struct": null,
                    "values": [
                        {
                            "id": "7769178",
                            "name": "Core i5",
                            "struct": null,
                            "source": 1
                        }
                    ],
                    "source": 1
                },
                {
                    "id": "MODEL",
                    "value_struct": null,
                    "values": [
                        {
                            "id": "6637008",
                            "name": "i5-9400F",
                            "struct": null,
                            "source": 1
                        }
                    ],
                    "attribute_group_id": "OTHERS",
                    "name": "Modelo",
                    "value_id": "6637008",
                    "value_name": "i5-9400F",
                    "attribute_group_name": "Outros",
                    "source": 1
                }
            ],
            "differential_pricing": {
                "id": 33580182
            },
            "original_price": null,
            "category_id": "MLB1693",
            "official_store_id": null,
            "catalog_product_id": "MLB13953199",
            "tags": [
                "brand_verified",
                "good_quality_picture",
                "good_quality_thumbnail",
                "immediate_payment",
                "cart_eligible"
            ],
            "catalog_listing": true
        },
    ]
}
```
A lista de produtos que devem ser exibidos é o _array_ `results` no `JSON` acima.

Após ter implementado com sucesso a função `fetchProducts`, você deve utilizá-la dentro do arquivo `script.js`. **Não** é necessário importá-la, pois o script `fetchProducts.js` já está na estrutura do arquivo HTML, basta chamá-la no escopo principal do arquivo. A partir dos dados obtidos pela função `fetchProducts` você **deve** utilizar a função `createProductItemElement(product)` para criar os componentes _HTML_ referentes a um produto.

Adicione o elemento retornado da função `createProductItemElement(product)` como filho do elemento `<section class="items">`.

**Obs:** as variáveis `sku`, no código fornecido, se referem aos campos `id` retornados pela API.

Hora de testar a implementação da função `fetchProducts`. Dentro da pasta `tests`, que está localizada na raiz do projeto, abra o arquivo `fetchProducts.test.js` e implemente os seguintes testes:

1 - Teste se `fetchProducts` é uma função;

2 - Execute a função `fetchProducts` com o argumento "computador" e teste se `fetch` foi chamada;

3 - Teste se, ao chamar a função `fetchProducts` com o argumento "computador", a função `fetch` utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador";

4 - Teste se o retorno da função `fetchProducts` com o argumento "computador" é uma estrutura de dados igual ao objeto `computadorSearch`, que já está importado no arquivo.

5 - Teste se, ao chamar a função `fetchProducts` sem argumento, retorna um erro com a mensagem: `You must provide an url`. **Dica:** Lembre-se de usar o `new Error('mensagem esperada aqui')` para comparar com o objeto retornado da API.

Use o comando `npm test` para verificar se seus testes estão passando.

OBS: Você deve implementar os 5 requisitos, independente do que for suficiente para a cobertura de testes.

### 2. Adicione o produto ao carrinho de compras

Cada produto na página _HTML_ possui um botão com o nome `Adicionar ao carrinho!`.

Ao clicar nesse botão você deve realizar uma requisição. Para isso, acesse o arquivo `fetchItem.js`, que se encontra dentro da pasta `helpers`. Lá, você deverá implementar **apenas** a função `fetchItem`.

A função `fetchItem` que você irá implementar, deve consumir o seguinte _endpoint_:

```javascript
"https://api.mercadolibre.com/items/$ItemID"
```
onde `$ItemID` deve ser o valor `id` do item selecionado.

Quando colocado o id `MLB1341706310` retorno desse _endpoint_ será algo no formato:
```JSON
{
    "id": "MLB1341706310",
    "site_id": "MLB",
    "title": "Processador Amd Ryzen 5 2600 6 Núcleos 64 Gb",
    "subtitle": null,
    "seller_id": 245718870,
    "category_id": "MLB1693",
    "official_store_id": 1929,
    "price": 879,
    "base_price": 879,
    "original_price": null,
    "currency_id": "BRL",
    "initial_quantity": 0,
    "available_quantity": 0,
    "sold_quantity": 0,
    ...
    "warranty": "Garantia de fábrica: 3 anos",
    "catalog_product_id": "MLB9196241",
    "domain_id": "MLB-COMPUTER_PROCESSORS",
    "parent_item_id": null,
    "differential_pricing": null,
    "deal_ids": [],
    "automatic_relist": false,
    "date_created": "2019-10-15T18:13:00.000Z",
    "last_updated": "2019-12-20T18:06:54.000Z",
    "health": null,
    "catalog_listing": true
}
```
Preste atenção que o JSON deve conter apenas **um** item.

Após ter implementado com sucesso a função `fetchItem`, você deve utilizá-la dentro do arquivo `script.js`.  **Não** é necessário importá-la, pois o script `fetchProducts.js` já está na estrutura do arquivo HTML, basta chamá-la no escopo principal do arquivo. A partir dos dados obtidos pela função `fetchItem` você **deve** utilizar a função `createCartItemElement()` para criar os componentes _HTML_ referentes a um item do carrinho.

Adicione o elemento retornado da função `createCartItemElement(product)` como filho do elemento `<ol class="cart__items">`.

Hora de testar a implementação da função `fetchItem`. Dentro da pasta `tests`, que está localizada na raiz do projeto, abra o arquivo `fetchItem.test.js` e implemente os seguintes testes:

1 - Teste se `fetchItem` é uma função;

2 - Execute a função `fetchItem` com o argumento do item "MLB1615760527" e teste se `fetch` foi chamada;

3 - Teste se, ao chamar a função `fetchItem` com o argumento do item "MLB1615760527", a função `fetch` utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527";

4 - Teste se o retorno da função `fetchItem` com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto `item` que já está importado no arquivo.

5 - Teste se, ao chamar a função `fetchItem` sem argumento, retorna um erro com a mensagem: `You must provide an url`. **Dica:** Lembre-se de usar o `new Error('mensagem esperada aqui')` para comparar com o objeto retornado da API.

Use o comando `npm test` para verificar se seus testes estão passando.

OBS: Você deve implementar os 5 requisitos, independente do que for suficiente para a cobertura de testes.

### 3. Remova o item do carrinho de compras ao clicar nele

Ao clicar no **produto no carrinho de compra**, ele deve ser removido da lista.
Para isso, dentro do arquivo `script.js` você deve procurar pela função `cartItemClickListener(event)` e implementar a lógica necessária para realizar a remoção.

### 4. Carregue o carrinho de compras através do **LocalStorage** ao iniciar a página

Para completar esse requisito, você deve implementar duas funções dentro da pasta `helpers`: `saveCartItems` e `getSavedCartItems`.

A função `saveCartItems` deve salvar os itens do carrinho de compras no `localStorage`, em uma chave denominada `cartItems`. Todas as **adições** e **remoções** devem ser abordadas para que a lista esteja sempre atualizada.

Já a função `getSavedCartItems` deve recuperar os itens do carrinho de compras do `localStorage` quando carregamos a página.
Após ter implementado com sucesso as funções `saveCartItems` e `getSavedCartItems`, você deve utilizá-las dentro do arquivo `script.js`. 

**Atenção:** as funções já estão importadas no `index.html`, então você deve **apenas** implementá-las e chamá-las no escopo principal do arquivo `script.js`.

Além disso, implemente testes para as duas funções de acordo com as seguintes especificações:

> Para a função `saveCartItems`: implemente os testes no arquivo `saveCartItems.test.js` da pasta `tests` que está na raiz do projeto.

- Teste se, ao executar `saveCartItems` com o argumento `<ol><li>Item</li></ol>`, o método `localStorage.setItem` é chamado;

- Teste se, ao executar `saveCartItems` com o argumento `<ol><li>Item</li></ol>`, o método `localStorage.setItem` é chamado com dois parâmetros, sendo o primeiro 'cartItems' e o segundo sendo o valor passado como argumento para `saveCartItems`.

> Para a função `getSavedCartItems`: implemente os testes no arquivo `getSavedCartItems.test.js` da pasta `tests` que está na raiz do projeto.

- Teste se, ao executar `getSavedCartItems`, o método `localStorage.getItem` é chamado;

- Teste se, ao executar `getSavedCartItems`, o método `localStorage.getItem` é chamado com o 'cartItems' como parâmetro.

Use o comando `npm test` para verificar se seus testes estão passando.

OBS: Você deve implementar os 4 requisitos, independente do que for suficiente para a cobertura de testes.

**Atenção:** não altere a estrutura já implementada nos arquivos de testes, apenas adicione os testes dentro do bloco `describe`.



### 5. Some o valor total dos itens do carrinho de compras

Cada vez que se adicionar um item ao carrinho de compras, será necessário somar seus valores e apresentá-los na página principal do projeto. O elemento que tem como filho o preço total dos itens do carrinho deve ter, **obrigatoriamente**, a classe `total-price`.

Obs: Devemos tomar cuidado, pois estamos buscando os dados do produto em uma API. Portanto, é necessário garantir que a API já retornou as informações para somente depois realizar o cálculo da soma.

**Atenção:** ao criar novas funções para resolver este requisito, faça as implementações **sempre** dentro do arquivo `script.js`.

### 6. Crie um botão para limpar o carrinho de compras

Crie um botão para remover todos os itens do carrinho de compras. Ele deve, **obrigatoriamente**, ter a classe `empty-cart`.

**Atenção:** ao criar novas funções para resolver este requisito, faça as implementações **sempre** dentro do arquivo `script.js`.

### 7. Adicione um texto de "carregando" durante uma requisição à API

Uma requisição à API gasta um tempo e durante ele, ficamos sem saber se está tudo certo ou se algo deu errado.
Normalmente é utilizada alguma forma para mostrar a pessoa usuária que a requisição está em andamento.

* Crie um elemento que contenha o texto "carregando...", que deve ser exibido em algum lugar da página;
* Este elemento deve ser mostrado **apenas durante** a requisição à API;
* Este elemento deve **obrigatoriamente** ter a classe `loading`;

***spoiler-alert***: você pode criar uma função que adicione ao DOM o elemento com o texto "carregando" e outra para retirá-lo, o que acha?

**Atenção:** ao criar novas funções para resolver este requisito, faça as implementações **sempre** dentro do arquivo `script.js`.

### 8. Desenvolva testes para atingir 40% de cobertura

> Implemente os testes nos arquivos da pasta `tests` que está na raiz do projeto.

Foi pedido que você realize testes em determinadas funções, mas quem avalia os testes? Para isso se tem a cobertura de testes. Ela é muito importante para garantir que os requisitos testados estejam cobrindo o que se foi pedido.

**Não se esqueça de que a cobertura irá checar apenas as funções que estão sendo testadas, e não toda a aplicação!**

#### O que será avaliado

- Será avaliado se os testes implementados atigem 40% da cobertura de testes.

### 9. Desenvolva testes para atingir 60% de cobertura

> Implemente os testes nos arquivos da pasta `tests` que está na raiz do projeto.

**A cobertura de testes irá checar apenas as funções que estão sendo testadas, e não toda a aplicação!**

#### O que será avaliado

- Será avaliado se os testes implementados atigem 60% da cobertura de testes.

### 10. Desenvolva testes para atingir 80% de cobertura

> Implemente os testes nos arquivos da pasta `tests` que está na raiz do projeto.

**A cobertura de testes irá checar apenas as funções que estão sendo testadas, e não toda a aplicação!**

#### O que será avaliado

- Será avaliado se os testes implementados atigem 80% da cobertura de testes.

### 11. Desenvolva testes para atingir 100% de cobertura

> Implemente os testes nos arquivos da pasta `tests` que está na raiz do projeto.

**A cobertura de testes irá checar apenas as funções que estão sendo testadas, e não toda a aplicação!**

#### O que será avaliado

- Será avaliado se os testes implementados atigem 100% da cobertura de testes.

---

## Depois de terminar o desenvolvimento

Para sinalizar que o seu projeto está pronto para o _"Code Review"_ dos seus colegas, faça o seguinte:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-00`.

Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

---

## Revisando um pull request

Use o conteúdo sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os _Pull Requests_.

---

# Avisos finais

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário. Leva menos de 3 minutos!

Link: [FORMULÁRIO DE AVALIAÇÃO DE PROJETO](https://be-trybe.typeform.com/to/ZTeR4IbH)

O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?
