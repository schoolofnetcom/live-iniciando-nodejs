const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.json({ msg: 'hello from express'});
});

app.get('/michelle', (req, res) => {
    return res.send({ msg: 'rota da michelle' });
});

app.get('/template', (req, res) => {
    return res.render('index', {
        msg: 'Template engine EJS'
    });
});

app.post('/send', require('./service'));

app.listen(3000, () => console.log('Express has been started'));