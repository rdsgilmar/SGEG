const express = require('express');
const router = express.Router();

// Rota de inicialização do sistema
router.get('/', (req, res) => {
    console.log('Rota do login acessada.');
    res.render('pages/login');
});

router.get('/cadastro', (req, res) => {
    console.log('Rota do cadastro acessada.');
    res.render('pages/cadastro');
});

router.get('/loading', (req, res) => {
    console.log('Rota do loading acessada.');
    res.render('pages/loading');
});

router.get('/dashboard', (req, res) => {
    console.log('Rota do dashboard acessada.');
    res.render('pages/dashboard');
});

// Exportando módulo router
module.exports = router;
