# ejsを使ってみよう

## ejs

embedded javascriptの略
HTML の中にjavascriptを書くことができる
テンプレートを作ることができる

## テンプレート

テンプレートを使うことでウェブページにパターンを定義し、中身を動的に変更することができる。

例えば、ある検索語に対する検索結果を表示する「検索」テンプレートを定義することができる。

検索語が何なのか、検索結果がいくつあるのかは、事前にはわかりません。

リクエストされたときに、ウェブページはその場でテンプレートを使って動的に作成される

ejs以外にも、
nunjacksやpug、hundlebarsというのもテンプレートを作ることができるが
それぞれ、書き方が違う

ejsならjavascriptの構文を使えるので、他に構文を覚える必要がない。

## Expressでのテンプレートエンジンの使用

view engineを指定し、render関数を使えばいい
http://expressjs.com/ja/guide/using-template-engines.html

```javascript
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home');
})
```

render関数は、カレントディレクトリのviewフォルダ以下に存在するhomeとつくejsファイルを読みに行く。
※ejsファイルを読み込みに行くかはset関数の第二引数で決まる

### Viewsディレクトリの設定の変更

以下の関数で設定することができる

```javascript
app.set('views', path.join(__dirname, 'views'));
```
path.joinは、第一引数と第二引数を組み合わせてパスを作ることができる関数

__dirnameがnodejsの特別な変数で、今実行しているファイルの絶対パス


### 値の渡し方

ejsファイルではHTMLファイルを書けるが、以下のような書き方をすればjavascriptを埋め込むことができる

```javascript
<%=  Math.floor(Math.random() * 10) + 1; %>
```

ただ、ejsの中で、関数を使ったりしてしまうとわかりにくいので
基本的にはデータを渡して利用する。

どうやって渡すかというと
以下のようにrenderでviewを設定するときに、第二引数として、値を渡すことができる

以下の場合だとrand = numとして、ejsファイルで使用することができる

```javascript
app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { rand: num })
})
```

### 値を渡したくないとき(if文を渡さない場合)

ejsファイルの中で以下のように記載する
```javascript
<% if(num % 2 === 0) { %>
    偶数だよ
<% } %>
```