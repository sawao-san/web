# 非同期JSとAPIについて

## promise

### 構文

Promiseは以下のように記載する。
基本的に、タイムアウトを待ったりするときに使われるっぽくて、
例えば、時間以内に応答があれば、resolveとなり、thenが実行されることになる。
rejectは失敗したときの反応となって、それに反応してcatchが実行される

resolve関数の引数が以下のようにthenの引数のdataとなる。
もしくは、resolve関数の引数に設定した文字列がdataに代入される


```javascript
new promise((resolve, reject) => {
    //この{}内が同期処理
    if(x > 100) {
        resolve()   //ここで第一引数の関数が実行される
    }
    else{
        reject()    //ここで第二引数の関数が実行される
    }
})
    .then((data) => {
        //非同期処理（resolveを待つ）
    })
    .catch((err) => {
        //非同期処理(rejectを待つ)
    })
    .finally(() => {
        //非同期処理（then, または catchを待つ）
    }) 
```


### Status

Promiseには以下の三つのステータスが存在する
* pending:初期の状態、または、処理待ちの状態
* fullfilled:処理が成功して完了した状態
* rejected:処理が失敗した状態

## Async

Asyncな関数は必ず自動的にPromiseを返す
関数が値を返せば、Promiseはその値でresolveをする
関数がthrowした場合は、Promiseはそのエラーでrejectする。


```javascript
async function sing() {
    return "result";
}

//もちろんアロー関数でもできるので、以下のようにも記載できる
const sing = async () => {
    return "result";
}
```

これを使うと、このasync関数の中でawaitを使うことができる


### asyncとawaitとfetchを使ったAPIの呼び方

```javascript
const loadStarWarsPeople = async () => {
    const res = await fetch('https://swapi.dev/api/people/1/');
    const data = await res.json();
    console.log(data);
}
```