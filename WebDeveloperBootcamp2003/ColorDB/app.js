const path = require('path');
const express = require('express');
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//dummy data

let colorCodes = [
    {
        id: uuid(),
        code: 'NH-1',
        name: 'black',
        status: 'mastered',
        creator: 'sawao',
        updated: '2024/2/24',
        comment: ''
    },
    {
        id: uuid(),
        code: 'R-1',
        name: 'Red',
        status: 'Approved',
        creator: 'Mori',
        updated: '2024/2/21',
        comment: ''
    },
    {
        id: uuid(),
        code: 'B-1',
        name: 'Blue',
        status: 'Development',
        creator: 'sawao',
        updated: '2024/2/24',
        comment: ''
    },
    {
        id: uuid(),
        code: 'J-7',
        name: 'White',
        status: 'Development',
        creator: 'sawao',
        updated: '2024/2/24',
        comment: ''
    }
]

//GET /ColorCodes
app.get('/ColorCodes', (req, res) => {
    res.render('ColorCodes/index', { colorCodes });
})

//POST /ColorCodes
app.post('/ColorCodes', (req, res) => {
    console.log(req.body);
    const { name, code, status, creator, updated, comment } = req.body;
    id = uuid();
    colorCodes.push({ id, name, code, status, creator, updated, comment })

    res.redirect('/ColorCodes');
})


//GET /ColorCodes/new
app.get('/ColorCodes/new', (req, res) => {
    res.render('ColorCodes/new');
})

//Show /ClorCodes/:id
app.get('/ColorCodes/:id', (req, res) => {
    const { id } = req.params;
    const colorCode = colorCodes.find(c => c.id === id);
    console.log(colorCode);
    res.render('ColorCodes/show', { colorCode });
})

//GET /ColorCodes/:id/edit
app.get('/ColorCodes/:id/edit', (req, res) => {
    const { id } = req.params;
    const colorCode = colorCodes.find(c => c.id === id);
    res.render('ColorCodes/edit', { colorCode });
})

//PUT /ColorCodes/:id
app.put('/ColorCodes/:id', (req, res) => {
    const { id } = req.params;
    const foundColorCode = colorCodes.find(c => c.id === id);
    const newColorCode = req.body;
    foundColorCode.name = newColorCode.name;
    foundColorCode.status = newColorCode.status;
    foundColorCode.comment = newColorCode.comment;

    res.redirect('/ColorCodes');
    // res.render('ColorCodes/edit', colorCode);
})

//DELETE /ClorCodes/
app.delete('/ColorCodes/:id', (req, res) => {
    const { id } = req.params;
    colorCodes = colorCodes.filter(c => c.id !== id);
    res.redirect('/ColorCodes');
})



app.listen(port, (req, res) => {
    console.log(`ポート${port}で受付中`);
})