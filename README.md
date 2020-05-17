# Blog Pessoal

> Sistema simplificado de blog pessoal.

## Instalação

Você deverá ter em sua máquina os seguinte itens:

- [Git](http://git-scm.com/)
- [Node.js](http://nodejs.org/) 10.0.0 (ou superior)

1. Faça um Fork ou clone este repositório.

2. Instale as dependências do projeto:

   ```sh
   npm install
   ```

   ou se você usa yarn:

   ```sh
   yarn
   ```

## Execução

Para início da aplicação, execute:

#### `Desenvolvimento:`

```sh
npm start
```

ou se você usa yarn:

```sh
yarn start
```

_OBS:. A aplicação iniciará no endereço `localhost:8080` (Caso nada esteja sendo executado nessa porta)_

#### `Produção:`

```sh
npm run build
```

ou se você usa yarn:

```sh
yarn build
```

_OBS:. Isso irá criar o arquivo de `build (bundle.js)` minificado, e a pasta public conterá os arquivos para produção._
_OBS2:. Quando feito o build é dado um `warning` sobre o tamanho do bundle, preferi não quebrar o bundle em vários arquivos para ter um arquivo único de saída._

## Testes:

_Os testes estão localizados na pasta `./src/__tests__`._

Use o comando abaixo para executar os testes:

```sh
npm test
```

ou se você usa yarn:

```sh
yarn test
```

## Páginas

### `Home:`

> A aplicação é composta unicamente pela página `Home`, nela é possível ver as 3 postagens mais recentes, listar todas as postagens, filtrar as postagens por autor e ordenar as postagens por mais recentes ou mais antigas.

#
