const mongoose= require('mongoose');

let Schema = mongoose.Schema;

let product = mongoose.model('Product',new Schema({
   name: String,
   sku_code: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 8,
  },
   price: Number
}));

module.exports =product;