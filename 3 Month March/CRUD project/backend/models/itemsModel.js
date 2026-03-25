
const mongoose = require("mongoose")

//schema-model-database table structure

//define structure of item documents in mongodb
const itemsSchema = new mongoose.Schema({

    //variable : datatype 
    name: String,
    discription: String,
    sellingPrice: Number,
    purchasePrice: Number,
    quantity: Number,
    unit: String
})


module.exports = mongoose.model("Items", itemsSchema)
