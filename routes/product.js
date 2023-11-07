const express = require('express');
const router = express.Router();
const createProduct = require('../controllers/createProduct');
const updateProduct = require('../controllers/updateProduct');
const deleteProduct = require('../controllers/deleteProduct');


router.post('/product/create', async (req, res) => {
  try {
    // Call the createProduct function to handle the creation logic
    await createProduct(req, res);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
});

router.put('/product/edit/:id', updateProduct);
router.delete('/product/delete/:id', deleteProduct);

module.exports = router;
