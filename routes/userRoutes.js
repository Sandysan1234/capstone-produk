const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const userController = require('../controllers/userController');

// Route untuk mengambil profil pengguna (hanya untuk user yang sudah login)
router.get('/profile', verifyToken, userController.getUserProfile);

module.exports = router;
