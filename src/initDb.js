/*
 * code-first database initialization
 * creates tables if they don't exist when the app starts
 */
const pool = require('./config/db');

async function init() {
  // products
  await pool.execute(`
    CREATE TABLE IF NOT EXISTS products (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      price DECIMAL(10,2) NOT NULL,
      category_id INT DEFAULT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB;
  `);

  // categories
  await pool.execute(`
    CREATE TABLE IF NOT EXISTS categories (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      description TEXT
    ) ENGINE=InnoDB;
  `);

  // users
  await pool.execute(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(50) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      email VARCHAR(100) NOT NULL UNIQUE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB;
  `);

  console.log('database tables ensured');
}

module.exports = { init };
