const mongoose= require('mongoose');

let Schema = mongoose.Schema;

let warehouse = mongoose.model('Warehouse',new Schema({
   name: String,
   wh_code: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 16,
  },
   pincode: Number,
   max_capacity: Number,
   sku_code : String,
   item_count : Number,
   low_item_threshold: Number
}));

module.exports=warehouse;