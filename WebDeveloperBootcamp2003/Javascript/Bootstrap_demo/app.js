const path = require('path')
const express = require("express");
const app = express();
const redditData = require('./data.json');
// console.log(redditData);

const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));


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
    const data = redditData[subreddit];
    if (data) {
        res.render('subreddit', { ...data })    //name : data.name みたいな
    }
    else {
        res.render('notfound', { subreddit })
    }

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