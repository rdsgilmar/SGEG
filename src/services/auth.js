const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (email, senha) => {
    // Verifique se o email já está em uso
    const existingUser = await User.findUserByEmail(email);
    if (existingUser) {
        throw new Error('Email já está em uso.');
    }

    // Crie um novo usuário
    await User.insertUser(email, senha);

    // Crie um token JWT
    const token = jwt.sign({ email }, 'sua-chave-secreta');

    return token;
};

const login = async (email, senha) => {
    // Busque o usuário no banco de dados
    const user = await User.findUserByEmail(email);
    if (!user) {
        throw new Error('Usuário não encontrado.');
    }

    // Compare a senha fornecida com a senha armazenada
    const isMatch = await bcrypt.compare(senha, user.senha);
    if (!isMatch) {
        throw new Error('Senha incorreta.');
    }

    // Crie um token JWT
    const token = jwt.sign({ email }, 'sua-chave-secreta');

    return token;
};

module.exports = {
    register,
    login
};
