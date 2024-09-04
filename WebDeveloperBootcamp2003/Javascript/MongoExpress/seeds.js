//テスト用のデータをDBに投入するためのファイル

const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => {
        console.log("MongoDB コネクションOK");
    })
    .catch(err => {
        console.log('MongoDB コネクションエラー');
        console.log(err);
    });

// const P = new Product({
//     name: 'ルビーグレープフルーツ',
//     price: 198,
//     category: '果物'
// });

// P.save().then(p => {
//     console.log(p);
// }).catch(err => {
//     console.log(err);
// })

const seedProducts = [
    {
        name: 'ナス',
        price: 98,
        category: '野菜'
    },
    {
        name: 'カットメロン',
        price: 498,
        category: '果物'
    },
    {
        name: 'シャインマスカット',
        price: 1980,
        category: '果物'
    },
    {
        name: '種なしスイカのカット',
        price: 380,
        category: '果物'
    },
    {
        name: 'オーガニックセロリ',
        price: 198,
        category: '野菜'
    },
    {
        name: 'コーヒー牛乳',
        price: 298,
        category: '乳製品'
    }
]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })