//Main code------

import Items from "../models/itemsModel"


const addItem = async () => {
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
    }
}


const getAllItems = async () => {
    try {
        const items = await Items.find()

        res.status(200).json({ message: " Get All Items List", data: items })

    } catch (error) {
        console.log(error)
    }
}


const deleteItem = async () => {
    try {
        const { id } = req.params

        const deleteItem = await Items.findByIdAndDelete(id);
        res.status(200).json({ message: "Items Deleted", deleteItem: deleteItem });
        //res.status(500).json({ error: error.message });

    } catch (error) {
        console.log(error)
    }
}


const editItem = async () => {
    try {

    } catch (error) {
        console.log(error)
    }
}

module.exports = { addItem, getAllItems, deleteItem, editItem }