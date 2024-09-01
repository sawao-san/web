const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//     try {
//         await mongoose.connect('mongodb://127.0.0.1:270017/test');
//         console.log('DBに接続できました！！！');
//     } catch (error) {
//         handleError('エラーが発生しました');
//     }
// }

//promiseを使って接続する方法（asyncとawaitを使うと説明書に書いてあったら以下の書き方をすればいい
mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        console.log("コネクションOK");
    })
    .catch(err => {
        console.log('コネクションエラー');
        console.log(err);
    })

//スキーマ定義
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema); //Movie用のクラス作成

const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' });

// データの取得
Movie.insertMany([
    { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
    { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
    { title: 'The Iron Gian', year: 1999, score: 7.5, rating: 'PG' },
    { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
    { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
]).then(data => {
    console.log('成功！！！');
    console.log(data);
})

