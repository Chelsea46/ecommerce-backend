const asyncHandler = require('express-async-handler');
const db = require('../config/db');

const deleteProduct = asyncHandler(async (req, res) => {
    const productId = req.params.id;
    db.query('DELETE FROM items WHERE id = ?', [productId], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ success: false, message: 'Failed to delete product' });
        } else {
            res.status(200).json({ success: true, message: 'Product deleted successfully' });
        }
    });
});

module.exports = deleteProduct;
