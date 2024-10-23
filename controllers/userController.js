const User = require('../models/user');

// Mendapatkan profil pengguna
exports.getUserProfile = async (req, res) => {
  try {
    // Cari user berdasarkan id yang ada di JWT token (diset di middleware verifyToken)
    const user = await User.findById(req.user._id).select('-password'); // Exclude password
    if (!user) return res.status(404).json({ error: 'User not found' });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving user profile' });
  }
};
