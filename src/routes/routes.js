const express = require('express');
const router = express.Router();

///ROTA DE INCIALIZAÇÃO DO SISTEMA
router.get('/', (req, res) => {
    console.log('Rota principal acessada.');
    res.render('pages/login');
});

//////////////Exportando modulo router
module.exports = router;