const express = require('express');
const router = express.Router();
const pool = require('../config/db');

router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM products LIMIT 10');
    res.render('index', { products: rows });
  } catch (err) {
    res.render('index', { error: err.message, products: [] });
  }
});

module.exports = router;