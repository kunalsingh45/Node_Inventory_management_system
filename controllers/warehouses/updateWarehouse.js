let warehouse = require("../../model/warehouse");

const  updateWarehouses = async(req) => {
    let sku_code = req.body.sku_code;
    let item_count = +req.body.count
    let threshold = +req.body.threshold
    console.log(threshold,item_count)
    const result = await warehouse.updateMany({ "sku_code": sku_code },
    {
        "$set": {
          "item_count": item_count,
          "low_item_threshold": threshold
        }
    });
    return result.nModified
}
module.exports = updateWarehouses;


