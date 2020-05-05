# vue-ionic-sample

## これは何か

Vue(+TypeScript)に ionic/vue を使って Vue ベースのネイティブアプリをつくるサンプル

## Note⚠

- node_modules/@ionic/vue/node_modules/ionicons/dist/types/compoments.d.ts:63 を以下の通り修正しないと動かない
  - [参考](https://github.com/ionic-team/ionic/issues/20208)

```
interface HTMLIonIconElement extends HTMLStencilElement {}
```

## Project setup

```
yarn
```

## Compiles and hot-reloads for development

```
yarn serve
```

## Compiles and minifies for production

```
yarn build
```

## Deploy for ios(Build before that)

```
# First time
npx cap add ios
# From the second time
npx cap copy
```

## Check with XCode(Deploy before that)

```
npx cap open ios
```

## Run your unit tests

```
yarn test:unit
```

## Lints and fixes files

```
yarn lint
```
