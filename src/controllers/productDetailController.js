const productModel = require('../models/productModel');

exports.showDetail = async (req, res) => {
  try {
    const product = await productModel.getById(req.params.id);
    if (!product) {
      return res.status(404).send('Sản phẩm không tồn tại.');
    }
    res.render('products/productDetail', { product });
  } catch (err) {
    res.status(500).send(err.message);
  }
};