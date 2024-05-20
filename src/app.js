const express = require('express');
const hand = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');

// const flash = require('connect-flash');
//////////
const routes = require('./routes/routes');
const authController = require('./controllers/auth');
//////////
const app = express();
//////////////
app.engine('handlebars', hand.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// app.use(flash());
app.use(bodyParser.json());
app.use(express.static('src/public'));
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', routes);
app.listen(3000, () => { console.log('Servidor rodando com sucesso!!!') });




