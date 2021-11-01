let warehouse = require("../../model/warehouse");
let product = require("../../model/product");
const getProducts = require("../../controllers/products/getProducts");

const  insertWarehouses = async(req) => {
    let max_capacity = req.body.max_capacity;
    let name = req.body.name;
    let wh_code = req.body.wh_code;
    let pincode = req.body.pincode;
    console.log(req.body)
    const products = await getProducts();
    products.forEach(async(product)=>{
      let data = new warehouse({
        name: name,
        wh_code: wh_code,
        pincode: pincode,
        max_capacity: max_capacity,
        sku_code : product.sku_code,
        item_count : 0,
        low_item_threshold: 10 
       })
        await data.save();
    })
}
module.exports = insertWarehouses;


