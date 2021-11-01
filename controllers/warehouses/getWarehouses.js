let warehouse = require("../../model/warehouse");

const  getWarehouses = async() => {
    const warehouses = await warehouse.find({});
    return warehouses
}
module.exports = getWarehouses;


