let product = require("../../model/product");

const  getProducts = async() => {
    const products = await product.find({});
    return products
}
module.exports = getProducts;


