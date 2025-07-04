const { conectar } = require('./conexao');

async function findUser(username, password) {
  const db = await conectar();
  return await db.collection('users').findOne({ username, password });
}

module.exports = { findUser };