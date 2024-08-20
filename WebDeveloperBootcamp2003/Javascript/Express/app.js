const express = require("express");
const app = express();  //expressを実行し、appという変数に返す
const port = 3000;

// app.use((req, res) => {
//     console.log("リクエストを受け付けました");
//     // console.log(req);
//     // res.send('リクエストを受けたので、レスポンスを返します');
//     res.send({ color: 'red' });
// })

app.listen(port, () => {
    console.log(`リクエストをポート${port}で待機中...`);
})

app.get('/cats', (req, res) => {
    console.log("/catにリクエストが来ました！");
    res.send(`<h1>ニャー</h1>`)
})

app.post('/cats', (req, res) => {
    res.send(`<h1>postにリクエストが来ました</h1>`)
})

app.get('/dogs', (req, res) => {
    console.log("/catにリクエストが来ました！");
    res.send(`<h1>わんわん</h1>`)
})

app.get('/', (req, res) => {
    res.send("ここはホームページです");
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>${subreddit} subredditのページ</h1>`);
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>${subreddit} subreddit Post ID: ${postId}のページ</h1>`);
})


app.get('/search', (req, res) => {

    const { q } = req.query;
    if (!q) {
        res.send(`<h1>No query, No results</h1>`);
    }
    else {
        console.log("test");
        res.send(`<h1>「${q}」の検索結果</h1>`);
    }
})

app.get('*', (req, res) => {
    res.send("そんなパスはしらない");
})