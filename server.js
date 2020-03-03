const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// static files
app.use(express.static(path.join(__dirname, 'public')));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/home', (req, res) => {
    res.render('home');
});

app.get('/categorias', (req, res) => {
    var category = ['Matemáticas', 'Física', 'Química', 'Programación'];
    res.send(category);
});

app.get('/disponibles', (req, res) => {
    res.sendFile(__dirname + '/public/disponibles.html');
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});