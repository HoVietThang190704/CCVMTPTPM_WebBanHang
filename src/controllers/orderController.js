const Product = require('../models/productModel');

exports.renderOrderPage = async (req, res) => {
  try {
    const products = await Product.getAll();
    res.render('order', { products });
  } catch (err) {
    res.render('order', { error: err.message, products: [] });
  }
};
