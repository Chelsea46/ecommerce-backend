const express = require('express');
const router = express.Router();
const createProduct = require('../controllers/createProduct');
const updateProduct = require('../controllers/updateProduct');
const deleteProduct = require('../controllers/deleteProduct');

router.post('/product/create', createProduct);
router.put('/product/edit/:id', updateProduct);
router.delete('/product/delete/:id', deleteProduct);

module.exports = router;