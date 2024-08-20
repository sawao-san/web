const path = require('path')
const express = require("express");
const { randomBytes } = require('crypto');
const app = express();

const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { rand: num })
})

app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    res.render('subreddit', { subreddit })

})

app.get('/cats', (req, res) => {
    const cats = [
        'タマ', 'トラ', 'モモ', 'ジジ'
    ];
    res.render('cats', { cats });
})

app.listen(port, () => {
    console.log(`port:${port}で受付中`)
})