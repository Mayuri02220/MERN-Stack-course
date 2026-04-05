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


const express = require("express")

const app = express()

const cors = require('cors')

const { connectDB } = require("./config/db")

const {addItem, getAllItems, deleteItem, editItem} =require('./controllers/itemsControllers')

app.use(express.json())
app.use(cors())

//MongoDB connection
connectDB()



// API-1. Create Items
app.post("/api/create-items", addItem)

// API-2. Update Items
app.put("/api/Update-items", editItem)

// API-3. delete Items
app.delete("/api/delete-items/:id", deleteItem)

// API-4. get all Items
app.get("/api/get-all-items", getAllItems)


//helth API
app.get("/helth", (req, res) => {
    res.status(200).json({ message: "Server is Runing" })
})

//server start
const PORT = 9090  //node js server run 

app.listen(PORT, () => {
    console.log("Server Started")
})