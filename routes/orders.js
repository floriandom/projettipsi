const express = require("express");
const router = express.Router();
const { ObjectId } = require('mongodb');


const Orders = require("../models/orders");
const Product = require("../models/products");

// @route GET api/orders/getAllOrders
router.get("/getAllOrders", async (req, res) => {
    try {
        const orders = await Orders.find();
        if (orders.length > 0) {
            return res.status(200).json(orders);
        } else {
            return res.status(404).json({ error: "There are no orders" });
        }
    } catch (err) {
        return res.status(500).json({ error: "An error occurred" });
    }
});


// @route POST api/orders/create
router.post("/create", async function (req, res) {
    try {
        //Check if ids are valid
        let invalidIds = []
        for (let currentProduct of req.body.productList) {
            if (!ObjectId.isValid(currentProduct)) {
                invalidIds.push(currentProduct)
            }
        }
        if (invalidIds.length > 0) {
            return res.status(400).json({ error: "There are " + invalidIds.length + " invalid ids", data: invalidIds });
        }

        //Check if all ids exist
        let products = await Product.find({
            _id: req.body.productList
        }, "_id")

        let idsNotExisting = []
        for (let givenId of req.body.productList) {
            let productExists = false;
            for (let existingProduct of products) {
                if (givenId === existingProduct._id.toString()) {

                    productExists = true
                }
            }
            if(productExists === false){
                idsNotExisting.push(givenId)
            }
        }

        if (idsNotExisting.length > 0) {
            return res.status(400).json({ error: "There are " + idsNotExisting.length + " non-existent products", data: idsNotExisting });
        }

        //everything is fine -> creating order
        let newOrder = new Orders({
            products: req.body.productList,
            status: req.body.status.toLowerCase() ?? "pending"
        });
        let savedResult = await newOrder.save();

        return res.status(200).json(savedResult);

    } catch (err) {
        console.log(err);
        return res.status(400).json("Could not create an order");
    }
});


module.exports = router;
