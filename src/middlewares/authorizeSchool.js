// Middleware de autorização
const authorizeSchool = (req, res, next) => {
    // Verificar se o usuário está autenticado
    if (!req.user) {
        return res.status(401).json({ message: 'Usuário não autenticado.' });
    }

    // Verificar se o usuário pertence à escola correspondente
    if (req.user.school !== req.params.schoolId) {
        return res.status(403).json({ message: 'Acesso não autorizado.' });
    }

    // Se o usuário passar nas verificações, continuar para a próxima rota
    next();
};
