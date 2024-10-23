const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

// Inisialisasi aplikasi
const app = express();
dotenv.config();

// Middleware untuk parsing JSON
app.use(express.json());

// Route API
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Konek database
const db = require('./config/db');
db.connect();

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});

