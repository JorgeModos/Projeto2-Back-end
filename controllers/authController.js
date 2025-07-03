const { conectar } = require('../models/conexao'); 

function showLogin(req, res) {
  res.sendFile('login.html', { root: './views' });
}

async function login(req, res) {
  const { username, password } = req.body;
  const db = await conectar();

  const user = await db.collection('users').findOne({ username, password });

  if (user) {
    req.session.user = user;
    res.redirect('/dashboard');
  } else {
    res.send('<script>alert("Usuário ou senha inválidos!"); window.location="/";</script>');
  }
}

function checkAuth(req, res, next) {
  if (req.session && req.session.user) {
    next();
  } else {
    res.redirect('/');
  }
}

function showDashboard(req, res) {
  res.sendFile('dashboard.html', { root: './views' });
}


function logout(req, res) {
  req.session.destroy(() => {
    res.redirect('/');
  });
}

module.exports = {
  showLogin,
  login,
  checkAuth,
  showDashboard,
  logout,
};
