const express = require('express');
const router = express.Router()
let product = require("../../model/product");
const getProducts = require("../../controllers/products/getProducts");
const getAllProducts = require("../../controllers/products/getAllProducts")

router.get('/', async (request, response) => {
    try {
        const products = await getProducts();
        return response.status(200).send(products);
    } catch (error) {
      response.status(500).send(error);
    }
})  

router.get('/all-products', async (request, response) => {
    try {
        const allProducts = await getAllProducts();
        return response.status(200).send(allProducts);
    } catch (error) {
      response.status(500).send(error);
    }
})


module.exports =router;