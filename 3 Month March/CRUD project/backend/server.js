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
const cors = require('cors')

app.use(express.json())
app.use(cors())

//DB connection
mongoose.connect("mongodb://127.0.0.1:27017/Item-database").then(() => console.log("mongo DB connected")).catch((error) => console.log("error"))

//schema-model-database table structure
const itemsSchema = new mongoose.Schema({
    name: String,
    description: String,
    sellingprice: Number,
    purchaseprice : Number,
    quantity : Number,
    unit : String
})

const Items = new mongoose.model("Items", itemsSchema) //table or collection name

//API -

// API-1. Create Items
app.post("/api/create-items", async (req, res) => {
    try {
        const { name, description, sellingprice, purchaseprice, quantity, unit  } = req.body

        const saveItem = new Items(
            {
                name,
                description,
                sellingprice, 
                purchaseprice, 
                quantity, 
                unit
            }
        )

        await saveItem.save()

        res.status(201).json({ message: "Items Created", data: saveItem })

    } catch (error) {
        console.log(error)
    }
})



// API-2. Update Items
app.put("/api/Update-items", async (req, res) => {
    try {

    } catch (error) {
        console.log(error)
    }
})


// API-3. delete Items
app.delete("/api/delete-items", async (req, res) => {
    try {

    } catch (error) {
        console.log(error)
    }
})

// API-4. get all Items
app.get("/api/get-all-items", async (req, res) => {
    try {
        const items = await Items.find()

        res.status(200).json({ message: " Get All Items List", data: items })

    } catch (error) {
        console.log(error)
    }
})



//helth API
app.get("/helth", (req, res) => {
    res.status(200).json({ message: "Server is Runing" })
})

//server start
const PORT = 9090

app.listen(PORT, () => {
    console.log("Server Started")
})