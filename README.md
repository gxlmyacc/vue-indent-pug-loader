# vue-indent-pug-loader 

this is a vue pug template loader that the first line has space indent.

## Install

```bash
npm install vue-indent-pug-loader --save-dev
```

or:

```bash
yarn add vue-indent-pug-loader --dev
```

## Usage

```js
// webpack config loaders
  {
    test: /\.pug$/,
    oneOf: [
      // this applies to <template lang="pug"> in Vue components
      { resourceQuery: /^\?vue/, use: ['vue-indent-pug-loader'] },
      // this applies to pug imports inside JavaScript
      { use: ['raw-loader', 'vue-indent-pug-loader'] }
    ]
  },
```