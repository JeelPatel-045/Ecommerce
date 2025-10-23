const express = require('express');
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct, fetchProductsFromAPI } = require('../controllers/adminController');
const { authenticateToken, authorizeAdmin } = require('../middleware/auth');

const router = express.Router();

// checking authentication using token
router.use(authenticateToken);
// checking if user is admin or customer 
router.use(authorizeAdmin);

router.get('/products', getProducts);
router.get('/products/:id', getProductById);
router.post('/products', createProduct);

// Fetch products from URL and add to DB
router.post('/fetch-products', fetchProductsFromAPI);

module.exports = router;
