'use strict'

const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

// app.get('/', (req, res) => {
//     let salida = {
//         name: 'Luis',
//         age: 20,
//         url: req.url
//     };
//     // res.send('Hello World')
//     res.send(salida);
// });
// app.get('/data', (req, res) => {
//     res.send(`Hello data. URL: ${req.url}`);
// });

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});