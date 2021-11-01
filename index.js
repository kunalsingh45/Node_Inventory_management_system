const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
let productRoute = require('./route/product');
let warehouseRoute = require('./route/warehouse');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

mongoose.connect("mongodb+srv://mongo_test:test@123@cluster0.ce8ph.mongodb.net/inventory?retryWrites=true&w=majority", { useNewUrlParser: true,useUnifiedTopology:true },
    () => {
        console.log("db connected");
    });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/product',productRoute)
app.use('/warehouse',warehouseRoute)

let port = process.env.PORT || 8080
app.listen(port, () => {
    console.log("server started at port "+ port);
})