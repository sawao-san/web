# REST入門

## GET VS POST

HTMLだと、GETとPOSTしか送信することができない

### GET

情報の取得に使用
データはクエリストリングで送られる
なので、URLを見れば、送信しているデータが一目瞭然
送れるデータの量に注意（確か2000文字）

### POST

データをサーバーに送信するときに使用
書き込み/作成/更新に使用
データはクエリストリングではなく、リクエストボディで送信する
どんな種類のデータでも送れる

## PUT VS PATCH




### PUT

PUTメソッドは対象リソースの現在の表現の全体を、リクエストのペイロードで置き換える

### PATCH

PATCHメソッドは、リソースを部分的に変更するために使用

expressのマニュアルだと以下のページ
基本的なメソッドは個別にページがあるが、まとめられている
https://expressjs.com/en/4x/api.html#app.METHOD

## method-override

ejsからmethodを送るには、
method-override
というパッケージを使う必要がある
https://www.npmjs.com/package/method-override

まず、jsファイルで以下を記載
```javascript
var express = require('express')
var methodOverride = require('method-override')
var app = express()
 
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
```

次に、フォーム側で、以下のように記載すると、
HTMLでformとして記載していたとしても、deleteのように扱ってくれる
```javascript
<form method="POST" action="/resource?_method=DELETE">
  <button type="submit">Delete resource</button>
</form>
```

## リクエストボディのパース

formで投げたデータをparseしてくれる呪文が以下
```javascript
app.use(express.urlencoded({extended: true}));
```

## RESTとは
REpresentational State Transfer

RESTとは、分散システムにおいて、複数のソフトウェアを連携させるのに適した設計原則の一つ

基本的には、クライアントとサーバーがどのようにコミュニケ―ションをとり、与えられたソースに対してどうCRUD操作を行うべきかというガイドライン

### RESTの主な考え方

サーバーサイドのデータをCRUD可能なリソースとして扱うこと

### アプローチ方法

アプリケーション内のURLやHTTPメソッドをフォーマットするところ

ROY Thormas Fieldingさんが最初に提唱した

## その他

### UUID

Universal Unique IDentifier
https://www.npmjs.com/package/uuid

```javascript
const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
```