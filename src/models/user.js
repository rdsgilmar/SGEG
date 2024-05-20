const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('sua-base-de-dados.sqlite');

const createUserTable = () => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      senha TEXT NOT NULL
    )
  `);
};

const insertUser = async (email, senha) => {
  const hashedPassword = await bcrypt.hash(senha, 10);
  await db.run(`INSERT INTO users (email, senha) VALUES (?, ?)`, [email, hashedPassword]);
};

const findUserByEmail = async (email) => {
  const result = await db.get(`SELECT * FROM users WHERE email = ?`, [email]);
  return result ? result : null;
};

module.exports = {
  createUserTable,
  insertUser,
  findUserByEmail
};


