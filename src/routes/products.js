const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Danh sách sản phẩm
router.get('/', productController.index);

// Form thêm sản phẩm
router.get('/add', productController.showAddForm);

// Xử lý POST thêm sản phẩm
router.post('/add', productController.addProduct);

module.exports = router;
