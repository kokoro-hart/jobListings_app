# 都道府県別 - 求人・求職者表示APP
[RESAS API](https://opendata.resas-portal.go.jp/ "RESAS API")を使用し、指定地域に関する求人・求職者数を表示するアプリケーションです。

https://user-images.githubusercontent.com/84849551/200839275-d6e8c401-db95-48a0-b2f1-58106b4971d5.mp4


<br>

## 注意点
RESAS APIを使用する場合、利用登録(無料)を行い、API Keyを発行する必要があります。  
このリポジトリ内ではセキュリティ上API Keyを格納したファイルは.gitignoreに追加しております。  
ローカルでの動作確認を行う際は、`src/js/jobListings/**`内に`apikey.ts`を追加し、以下のように任意のAPI Keyを設定してください。
```typescript:src/js/jobListings/apikey.ts
// RESAS APIキー
export const config: {
  apiKey: string;
} = {
  apiKey: '任意のAPI Key',
};
```

## 開発開始時
```
$ npm run server
```
- http://localhost:3000 でローカルサーバーが起動。
- Pug || HTML,Sass,TypeScriptのコンパイル、babelによるjsのトランスパイル、ESLint、Prettier,画像圧縮.etc
- 詳しくはwebpack.config.jsを参照

## 納品時

```
$ npm run build
```
- minify

## その他コマンド
```
$ npm run dev // developmentモードで出力
$ npm run lint // ESLintとPrettierを実行する
```