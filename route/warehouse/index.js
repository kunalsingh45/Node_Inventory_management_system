const express = require('express');
const router = express.Router()
let warehouse = require("../../model/warehouse.js");
const getWarehouses = require("../../controllers/warehouses/getWarehouses");
const insertWarehouses = require("../../controllers/warehouses/insertWarehouse");
const updateWarehouses = require("../../controllers/warehouses/updateWarehouse");

router.get('/', async (request, response) => {
    try {
        const warehouses = await getWarehouses();
        return response.status(200).send(warehouses);
    } catch (error) {
      response.status(400).send(error);
    }
})   

 router.post('/add-warehouse',async(req,res)=>{
   try{
    await insertWarehouses(req);
    return res.status(200).send({"message":"New Warehouse inserted successfully"});
  }catch(err){
    console.log(err)
    return res.status(400).send(err);
   }
 
 });


 router.put('/update-product',async(req,res)=>{
  try{
    const result = await updateWarehouses(req);
      return res.status(200).send({message:"success",modifiedCount:result});
    }catch(err){
      return res.status(err).send(err);
    }
});

// router.delete("/delete-warehouse",async()=>{
//   let wh_code = req.query.wh_code
//   await warehouse.deleteMany({"wh_code":wh_code})
//   return res.status(200).send({"message":"Warehouse deleted successfully"});
// })

module.exports =router;