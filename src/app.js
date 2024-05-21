const express = require('express');
const app = express();
const hand = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');

const router = require('./routes/routes'); // Correção aqui, mantenha como 'router'

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', hand.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(express.static('src/public'));

app.use('/', router); // Corrigido para usar 'router'

app.listen(3000, () => {
    console.log('Servidor rodando com sucesso!!!');
});





