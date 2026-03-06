const db = require('../config/db');

exports.getAll = async () => {
  const [rows] = await db.execute('SELECT * FROM products');
  return rows;
};

// You can add more product-related methods here if needed, e.g., getById, create, etc.