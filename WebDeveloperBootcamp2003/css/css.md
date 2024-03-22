# CSSについて

## CSSの概要

``` css
selector {
    property:value;
}

```
のように記載する。

プロパティは大量にあるので、MDNで調べて使うようにすること。

[MDN](https://developer.mozilla.org/ja/docs/Web/CSS/Reference)はこちら

## テキストプロパティ

* text-align:文字の水平方向の配置を決める
  * center⇒真ん中
  * right⇒右寄せ
  
* font-weight：文字の太さを表す
  * Bold=700
  * Normal=400
  * サポートされていない値を指定すると、対応するフォントの中で一番近いフォントを表示してくれる
  
* text-decoration：テキストに線を表現できる
  * Underline：下線
  * none:aタグ等にもともとついている下線を失くす
  
* line-height：一行の高さを設定できる
  * 

* letter-spacing：文字と文字の間隔（横幅）を変更するためのプロパティ

* font-size:フォントのサイズ
  * px:最も使われる絶対単位
        ⇒絶対単位はレスポンシブなウェブサイトでは非推奨

* font-family:フォントの種類の変更ができる
  * [ブラウザで対応しているか/OS毎にどれだけ使える人がいるかを表したサイト](https://www.cssfontstack.com/)
  * フォントが無い場合もテキストは表示される。
  * fontは,区切りで指定もできる。

* text-transform: テキストをすべて大文字にしたりできる

## セレクタについて

* ユニバーサルセレクタ：全ての要素を対象にする
``` css
    * {
        color: blank;
    }
```

* 要素型セレクタ：タグの要素名で指定する
``` css
    h1 {
        color: white
    }
```

* セレクタ―リスト：, 区切りで要素を指定する方法
``` css



    h1, h2 {
        color: white
    }
```
* IDセレクタ：IDによって指定する
``` css
    #signup {
        color: test
    }

```

* 子孫セレクタ:要素とその子孫要素（何階層下でもいい）を半角区切りで指定することで、特定の要素の中の子要素だけを指定することができる。大きいサイトになると必須
``` css
  section span a {
    color : white;
  }

```

* 隣接セレクタ：同じ親要素の子要素で、その直後の要素を選択できる
  ⇒以下の場合は。h1と同じ階層で、直後のpを選択することができる。
``` css
  h1 + p {
    background-color: black;
  }
```

* 直下セレクタ：直下の要素だけを指定することができる
``` css
footer > a {
  color: black;
}
```

* 属性セレクタ:属性を指定して、スタイルを設定できる
* 
``` css
input[type="text"]{
  color: red;
}
```
   ⇒加えて、以下のように記載すると、aタグのhref属性に"google"を含む要素を指定することができる
``` css
a[href*=google] {
    color: red;
}
```

## おすすめサイト

https://coolors.co/palettes/trending
⇒色のパレットを表示しているサイト