// Backend Project
// Node js
// Express js
// DB- MongoDB


//API
// 1. API Create Item - get data values from front end (Item details) and store into Database
// 2. API Update Item - get Item Details from Front end which item we need to update
// 3. API Delete Item -  get Item Details from Front end an delete this record from database
// 4. API get all records - get all records from DB and show to UI frontend

//Arrow funtion
//const getdata = () => {}


console.log("Hello Node js project started")

const express = require("express")
const app = express()

const mongoose = require("mongoose")

app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017///Item-database").then( () => console.log("mongo DB connected") ).catch( (error) => console.log("error") )

//schema-model-database table structure
const itemsSchema = new mongoose.Schema({
    name: String,
    description : String,
    sellingprice : Number
})

const Items = new mongoose.model("Items", itemsSchema) //table or collection name

//API