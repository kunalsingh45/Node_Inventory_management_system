let product = require("../../model/product");
let warehouse = require("../../model/warehouse");


const  getAllProducts = async () => {
    let results = await warehouse.aggregate([
        {
            $lookup:
              {
                from: "products",
                localField: "sku_code",
                foreignField: "sku_code",
                as: "product"
              }
         },
         {$unwind:"$product"}
    ]).exec() 

    console.log(results)
    return results
}
module.exports = getAllProducts;


