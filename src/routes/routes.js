const express = require('express');
const router = express.Router();
const authController = require('../controllers/autth');

///ROTA DE INCIALIZAÇÃO DO SISTEMA
router.get('/', (req, res) => {
    console.log('Rota principal acessada.');
    res.render('pages/login');
});

// Rotas de autenticação
app.post('/register', authController.register);
app.post('/login', authController.login);

//////////////Exportando modulo router
module.exports = router;