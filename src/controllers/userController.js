const User = require('../models/userModel');
exports.renderUsers = async (req, res) => {
  try {
    const users = await User.getAll();
    res.render('users', { users }); 
  } catch (err) {
    res.status(500).send("Lỗi server");
  }
};
