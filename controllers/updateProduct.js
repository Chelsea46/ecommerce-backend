const asyncHandler = require('express-async-handler');
const db = require('../config/db');

const updateProduct = asyncHandler(async (req, res) => {
    const productId = req.params.id; 

    const existingProduct =  db.start.query('SELECT * FROM items WHERE id = ?', [productId]);

    if (!existingProduct) {
        return res.status(404).json({ success: false, message: 'Product not found' });
    }

    const updatedProductData = {
        name: req.body.title,
        type: req.body.type,
        size: req.body.size,
        color: req.body.color,
        gender: req.body.gender,
        description: req.body.description,
        image: req.body.image,
        recycled: req.body.recycled,
        organic: req.body.organic
    };

    try {
        db.start.query('UPDATE items SET ? WHERE id = ?', [updatedProductData, productId]);

        res.status(200).json({ success: true, message: 'Product updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Failed to update product', error: error.message });
    }
});

module.exports = updateProduct;
