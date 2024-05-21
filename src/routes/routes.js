const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Rota de inicialização do sistema
router.get('/', (req, res) => {
    console.log('Rota do login acessada.');
    res.render('pages/login');
});

// Rotas de autenticação
router.get('/register', authController.renderRegisterPage);
router.post('/register', authController.register);
router.post('/login', authController.login); // Nova rota para login

// Rota para a página de destino (dashboard)
router.get('/dashboard', (req, res) => {
    res.render('pages/dashboard');
});

// Exportando módulo router
module.exports = router;
