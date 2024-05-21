const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
// Importar o middleware de autorização
const authorizeSchool = require('../middlewares/authorizeSchool');
//
const dashboardController = require('../controllers/dashboardController');

// Rota de inicialização do sistema
router.get('/', (req, res) => {
    console.log('Rota do login acessada.');
    res.render('pages/login');
});

// Rotas de autenticação
router.get('/register', authController.renderRegisterPage);
router.post('/register', authController.register);
router.post('/login', authController.login); // Nova rota para login

// // Rota para a página de destino (dashboard)
// router.get('/dashboard', (req, res) => {
//     res.render('pages/dashboard');
// });



// Rota protegida
router.get('/dashboard/:schoolId', authorizeSchool, (req, res) => {
    // Aqui você pode acessar os dados da escola correspondente
    // A lógica de acesso aos dados da escola deve ser implementada aqui
    res.json({ message: 'Bem-vindo ao dashboard da escola.' });
});

// Rota para renderizar o dashboard
router.get('/dashboard', dashboardController.renderDashboard);

// Exportando módulo router
module.exports = router;
