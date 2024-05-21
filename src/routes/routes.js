const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Rota de inicialização do sistema
router.get('/', (req, res) => {
    console.log('Rota do login acessada.');
    res.render('pages/login');
});

// Rotas de autenticação
router.post('/register', authController.register); // Use 'router' em vez de 'app'
router.post('/login', authController.login); // Use 'router' em vez de 'app'

// Exportando módulo router
module.exports = router;
