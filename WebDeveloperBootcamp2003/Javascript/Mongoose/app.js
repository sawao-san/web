const mongoose = require('mongoose');

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

// const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' });

// データの作成
// Movie.insertMany([
//     { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
//     { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
//     { title: 'The Iron Gian', year: 1999, score: 7.5, rating: 'PG' },
//     { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
//     { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
// ]).then(data => {
//     console.log('成功！！！');
//     console.log(data);
// })

// データの参照

// Movie.find()
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log('findできませんでした');
//         console.log(err);
//     });

// Movie.findById('66d43e6561c56567de2e0573')
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log('findできませんでした');
//         console.log(err);
// })

//データを更新する
// Movie.updateOne({ title: 'Amadeus' }, { year: 1800 })
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log('findできませんでした');
//         console.log(err);
//     })

// Movie.updateMany({ title: { $in: ['Amadeus', 'Stand By Me'] } }, { score: 10 })
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log('findできませんでした');
//         console.log(err);
//     })

// Movie.findOneAndUpdate({ title: 'The Iron Gian' }, { title: 'The Iron Giant' })
//     .then(m => {
//         console.log(m);
//     })
//     .catch(err => {
//         console.log('findできませんでした');
//         console.log(err);
//     })

Movie.findOneAndDelete({ title: 'Alien' })
    .then(m => console.log(m));