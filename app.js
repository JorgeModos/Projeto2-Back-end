const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');
const routes = require('./routes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: 'segredo123',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 600000 }
}));

app.use(express.static(path.join(__dirname, 'views')));
app.use('/', routes);

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
