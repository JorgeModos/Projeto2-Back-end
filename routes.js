const express = require('express');
const router = express.Router();
const authController = require('./controllers/authController');

router.get('/', authController.showLogin);
router.post('/login', authController.login);
router.get('/dashboard', authController.checkAuth, authController.showDashboard)
router.get('/logout', authController.logout);

module.exports = router;
