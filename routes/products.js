const express = require("express");
const router = express.Router();
const { ObjectId } = require('mongodb');


const Product = require("../models/products");

// @route GET api/products/getAllProducts
router.get("/getAllProducts", async (req, res) => {
    try {
        const products = await Product.find();

        if (products.length > 0) {
            return res.status(200).json(products);
        } else {
            return res.status(404).json({ error: "There are no products" });
        }
    } catch (err) {
        return res.status(500).json({ error: "An error occurred" });
    }
});


router.get("/getProductById/:id", async (req, res) => {
    try {

        if (!ObjectId.isValid(req.params.id)) {
            return res.status(404).json({ error: "Invalid product id" });
        }

        let product = await Product.findById(req.params.id);
        if (product) {
            return res.status(200).json({ product });
        } else {
            return res.status(404).json({ error: "No product have " + req.params.id + " id" });
        }

    } catch (err) {
        return res.status(500).json({ error: "An error occurred" });
    }
});


module.exports = router;
