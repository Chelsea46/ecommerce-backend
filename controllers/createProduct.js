const asyncHandler = require('express-async-handler');
const db = require('../config/db');

const createProduct = asyncHandler(async (req, res) => {
    const product = {
        name: req.body.title,
        type: req.body.type,
        size: req.body.size,
        color: req.body.color,
        gender: req.body.gender,
        description: req.body.description,
        image: req.body.image,
        recycled: req.body.recycled,
        organic: req.body.organic,
        price: req.body.price
    };

    db.query('INSERT INTO items SET ?', product, (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).json({ success: false, message: 'Failed to add product' });
        } else {
            console.log(result);
            res.status(200).json({ success: true, message: 'Product created successfully' });
        }
    });
});

module.exports = createProduct;
