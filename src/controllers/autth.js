const authServices = require('../services/auth');

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
        res.send({ token });
    } catch (error) {
        console.error(error);
        res.status(401).send({ message: error.message });
    }
};

module.exports = {
    register,
    login
};
