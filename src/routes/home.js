const express = require('express');
const router = express.Router();
const pool = require('../db');

// home page, optionally list products from database
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM products LIMIT 10');
    res.render('index', { products: rows });
  } catch (err) {
    // if database doesn't exist or other connection issue, show a friendly message
    res.render('index', { error: err.message, products: [] });
  }
});

module.exports = router;