const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const port = 3000;

const mongoose = require('mongoose');

const Product = require('./models/product');

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

app.get('/products', async (req, res) => {
    const products = await Product.find({});
    // console.log(products);
    res.render('products/index', { products });
})

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    console.log(newProduct);
    res.redirect(`/products/${newProduct._id}`);
})

app.get('/products/new', (req, res) => {
    res.render('products/new', { categories });
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    console.log(product);
    res.render('products/show', { product });

})


app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    // console.log(product);
    res.render('products/edit', { product, categories });
})

app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/products/${product._id}`);

})


app.listen(port, () => {
    console.log(`ポート:${port}で待ち受け中...`);
})