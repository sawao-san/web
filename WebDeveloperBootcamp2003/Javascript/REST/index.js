const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', "ejs");

let comments = [
    {
        id: uuid(),
        username: 'Sawao',
        comment: 'Hello, everyone'
    },
    {
        id: uuid(),
        username: 'Motch',
        comment: 'Hello!!!!'
    },
    {
        id: uuid(),
        username: 'Mori',
        comment: 'How are you?'
    },
    {
        id: uuid(),
        username: 'Goto',
        comment: "I'm not so bad."
    }
]

// GET /comments
app.get('/comments', (req, res) => {

    res.render('comments/index', { comments });
})



// POST /comments
app.post('/comments', (req, res) => {
    console.log(req.body);
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() });
    res.redirect('/comments');
})

// GET /comments/new - display the page for form
app.get('/comments/new', (req, res) => {

    res.render('comments/new');
})

// GET /comments/show - display the page for detail
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment });
})


app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newComment = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newComment;
    res.redirect('/comments');
    // res.send('PATCH TEST');
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment });
})

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id); //削除対象のコメントがなくなったコメント配列が取得できる
    res.redirect('/comments');
})

// app.get('/tacos', (req, res) => {
//     res.send('GET /tacos response');
// })

// app.post('/tacos', (req, res) => {
//     const { meat, qty } = req.body;
//     res.send(`${qty} ${meat} どうぞ`);
// })

app.listen(port, () => {
    console.log(`port:${port}で受付中`)
})

