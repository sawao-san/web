const fs = require('fs');

const dirName = process.argv[2] || 'Project'; //引数がundifinedであればProject

// // Create ./tmp/a/apple, regardless of whether ./tmp and ./tmp/a exist.
// fs.mkdir('tmp/a/apple', { recursive: true }, (err) => {
//     console.log('in callback');
//     if (err) throw err;
// });
// console.log('out of callback');

const templateHTML =
    `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>

<body>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="app.js"></script>
</body>

</html>`

try {
    fs.mkdirSync(dirName);
    fs.writeFileSync(`${dirName}/index.html`, templateHTML);
    fs.writeFileSync(`${dirName}/style.css`, '');
    fs.writeFileSync(`${dirName}/app.js`, '');
}
catch (e) {
    console.log('問題が発生しました');
}
