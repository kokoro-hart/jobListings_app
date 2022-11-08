# 都道府県別 - 求人・求職者表示APP
RESAS_APIを使用し、指定地域に関する求人・求職者数を表示するアプリケーションです。

## 開発開始時
```
$ npm i
$ npm run server
```
- http://localhost:3000 でローカルサーバーが起動。
- Pug || HTML,Sass,TypeScriptのコンパイル、babelによるjsのトランスパイル、ESLint、Prettier,画像圧縮.etc
- 詳しくはwebpack.config.jsを参照

## 納品時

```
$ npm run build
```
- distフォルダ直下に納品時ファイルを生成

## その他コマンド
```
$ npm run dev // developmentモードで出力
$ npm run lint // ESLintとPrettierを実行する
```