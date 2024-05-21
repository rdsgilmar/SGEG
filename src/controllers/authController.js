const authServices = require('../services/authServices');

const register = async (req, res) => {
    try {
        const { email, senha } = req.body;
        const token = await authServices.register(email, senha);
        res.send({ token });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, senha } = req.body;
        const token = await authServices.login(email, senha);

        // Redirecionar para o dashboard
        res.redirect('/dashboard');
    } catch (error) {
        console.error(error);
        res.status(401).send({ message: error.message });
    }
};


const renderRegisterPage = (req, res) => {
    res.render('pages/register');
};

module.exports = {
    register,
    login,
    renderRegisterPage
};

