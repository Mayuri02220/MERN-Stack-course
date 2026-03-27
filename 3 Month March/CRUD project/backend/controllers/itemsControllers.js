//Main code------

import Items from "../models/itemsModel"


const addItem = async (req,res) => {
    try {
        const { name, discription, purchasePrice, sellingPrice, quantity, unit } = req.body

        const saveItem = new Items(
            {
                name,
                discription,
                purchasePrice,
                sellingPrice,
                quantity,
                unit
            }
        )

        await saveItem.save()

        res.status(201).json({ message: "Items Created", data: saveItem }) 

    } catch (error) {
        console.log(error)
        res.status(201).json({message:"server Error"})
    }
}


const getAllItems = async (req, res) => {
    try {
        const items = await Items.find()

        res.status(200).json({ message: " Get All Items List", data: items })

    } catch (error) {
        console.log(error)
    }
}


const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;

        const deleteItem = await Items.findByIdAndDelete(id);
        res.status(200).json({ message: "Items Deleted", deleteItem: deleteItem });
    
    } catch (error) {
        console.log(error)
    }
}


const editItem = async (req, res) => {
    try {

    } catch (error) {
        console.log(error)
    }
}

module.exports = { addItem, getAllItems, deleteItem, editItem }