# Bootcamp中のメモ

## マークダウンテキスト

会社でも見れるようにしたいし、会社ではRedmineに記載していく方が知識の共有になるから、できる限りマークダウンで記載する癖をつけたい。
以下のサイトでは、おすすめのショートカットが紹介されている

https://digitor.jp/textbook/vscode-markdown/

ちなみにアドインは以下のMarkdown All in Oneを入れた

![alt text](image.png)

マークダウンの書き方は以下のサイトに記載されているので確認すること

https://code.visualstudio.com/docs/languages/markdown

### エンティティコード

例えば、HTMLのタグをHTMLやマークダウン内で書こうとすると表示されないが
エンティティコードで表現すれば、表示可能
エンティティコードは&amp;と;で囲んで表示することができる
以下で表示できる
https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references



### ソースコードの書き方

Shift + @で入力できる`を使用して
以下のように記載すれば、入力可能

&DiacriticalGrave;&DiacriticalGrave;&DiacriticalGrave; html

（ソースコード）

&DiacriticalGrave;&DiacriticalGrave;&DiacriticalGrave;


htmlと記載されているところで言語の指定をすることができるので、
指定も忘れずに記載すること
これを使えば、以下のように書ける

``` html
<!DOCTYPE html>
<html>
    <head>
        
    </head>

    <body>
            <p>test</p>
            <a href="#">
    </body>

</html>
```

### ブロックとインライン

そもそも、HTMLのタグは
* ブロック要素
* インライン要素

の二つに分かれる。

例えば、
&lt;p&gt;はブロック要素で
&lt;a&gt;はインライン要素
なので、一つの段落の中のまとまりの中にリンクをつけることができている

逆に、リンクを一つのブロックとして分けたいとき
&lt;div&gt;要素を使うことで、ブロック要素にすることができる

ちなみに、インライン要素で文章を分けたいときには、
&lt;span&gt;を使うことで、インラインのまま文章を分けることができる


### セマンティック要素

全部divタグを使えば、ブロック要素で分けられるが
わかりやすくHTMLを分けようぜというのが、セマンティックの考え方

セマンティックな要素は以下の項目
* &lt;section&gt;:大段落のようなもの
* &lt;article&gt;:記事を書くときによく使われる
* &lt;nav&gt;:いわゆるナビゲーションリンクを表現するときに使う。文書内リンク用
* &lt;main&gt;:bodyの主要のものを記載する場所
* &lt;header&gt;ヘッダーを表すときに使う
* &lt;footer&gt;フッターを表すときに使う
* &lt;aside&gt;:よくサイドバーを作るときに使われる
* &lt;summary&gt;まとめるときに使われる
* &lt;time&gt;時間を表現するときに使われる
* &lt;figure&gt;図を表現するときに使われる。この要素の中に&lt;figcaption&gt;を使えば、画像の説明をつけることもできる。

こういった分け方をしておけば、クローラーやスクリーンリーダーは読み取りやすくなるので、検索結果の上位になりやすいらしい

書き方に正解はないが、以下のセンスのよさそうな人が作っているサイトでは、
書き方を紹介しているので、迷ったら確認すること

https://shu-naka-blog.com/html/tag01/


### Emmet

これを使えば、HTMLを素早く書けるようになるらしい

チートシートは[こちら](https://docs.emmet.io/cheat-sheet/)




