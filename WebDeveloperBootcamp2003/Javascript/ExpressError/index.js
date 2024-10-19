const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const port = 3000;

const mongoose = require('mongoose');

const Product = require('./models/product');

const AppError = require('./AppError')

mongoose.connect('mongodb://127.0.0.1:27017/farmStand2')
    .then(() => {
        console.log("MongoDB コネクションOK");
    })
    .catch(err => {
        console.log('MongoDB コネクションエラー');
        console.log(err);
    });

const categories = ['果物', '野菜', '乳製品'];

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

//引数：fn=関数
//返り値：function(req, res, next)=関数
function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(e => next(e));
    }
}

app.get('/products', wrapAsync(async (req, res, next) => {
    const products = await Product.find({});
    // console.log(products);
    res.render('products/index', { products });
}))

app.post('/products', wrapAsync(async (req, res, next) => {

    const newProduct = new Product(req.body);
    await newProduct.save();
    console.log(newProduct);
    res.redirect(`/products/${newProduct._id}`);

}))

app.get('/products/new', (req, res) => {

    res.render('products/new', { categories });
})

app.get('/products/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
        return next(new AppError("Idがおかしいです"), 404);    //asyncの関数内ではエラーを渡すためには、next内で渡さなければならない。returnで処理を終わらす
        // console.log("idテスト")
    }
    const product = await Product.findById(id);

    if (!product) {
        next(new AppError("商品が見つかりません", 404));    //asyncの関数内ではエラーを渡すためには、next内で渡さなければならない
    }
    //returnしない場合は、nextだけだと処理が進んでしまうので、エラーが発生しないときにだけ、表示するようにする。これをしないとサーバーがcrashする
    else {
        res.render('products/show', { product });
    }


}))


app.get('/products/:id/edit', wrapAsync(async (req, res, next) => {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
        throw new AppError("Idがおかしいです", 404);    //tryの中ならnextをここに書かなくても、catchの方で書けばいい
    }
    const product = await Product.findById(id);
    if (!product) {
        throw new AppError("商品が見つかりません", 404);
    }
    res.render('products/edit', { product, categories });
}))

app.put('/products/:id', wrapAsync(async (req, res, next) => {

    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/products/${product._id}`);

}))

const handleValidationErr = err => {
    console.log(err);
    return new AppError(`入力内容に誤りがあります...${err.message}`, 400);
}

//エラーの切り分け
app.use((err, req, res, next) => {
    if (err.name === "ValidationError") {
        err = handleValidationErr(err);
    }
    next(err);
})

//エラー処理
app.use((err, req, res, next) => {
    const { status = 500, message = '何か問題が発生しました' } = err;
    res.status(status).send(message);
})

app.listen(port, () => {
    console.log(`ポート:${port}で待ち受け中...`);
})