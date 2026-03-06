const db = require('../config/db');
exports.getAll = async () => {
  const [rows] = await db.execute('SELECT * FROM users');
  return rows;
};
