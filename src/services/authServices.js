const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwtSecret = process.env.JWT_SECRET;

const register = async (email, senha) => {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
        throw new Error('Email já está em uso.');
    }

    const hashedPassword = await bcrypt.hash(senha, 10);
    await prisma.user.create({
        data: {
            email,
            password: hashedPassword
        }
    });

    const token = jwt.sign({ email }, jwtSecret);
    return token;
};

const login = async (email, senha) => {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
        throw new Error('Usuário não encontrado.');
    }

    const isMatch = await bcrypt.compare(senha, user.password);
    if (!isMatch) {
        throw new Error('Senha incorreta.');
    }

    const token = jwt.sign({ email }, jwtSecret);
    return token;
};

module.exports = {
    register,
    login
};


