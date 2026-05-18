import 'bootstrap/dist/css/bootstrap.min.css'; // desing UI
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify'; //alert msg
import axios from 'axios'; //backend API  integration data 
import "./../style.css";
import "../screens/App.css"
import { useState } from 'react';
import { useEffect } from 'react';// hooks    they store data 


function Items() {

  const [itemName, setItemName] = useState("");
const [discription, setDiscription] = useState("");
const [purchasePrice, setPurchasePrice] = useState("");
const [sellingPrice, setSellingPrice] = useState("");
const [quantity, setQuantity] = useState("");
const [unit, setUnit] = useState("");
  const [itemData, setData] = useState();

  
  // const [show, setShow] = useState(false);
  // const [id, setId] = useState()

  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [deleteId, setDeleteId] = useState("")

  const [showEditModal, setShowEditModal] = useState(false)
  const [editItem, setEditItem] = useState(null)

  
 const getToken = () => localStorage.getItem("token");
  //async function SubmitForm(e) {cd  
  const SubmitForm = async (e) => {
    try {
      e.preventDefault(); //page refresh

      const data = {  //object create
        name: itemName,
        discription: discription,
        purchasePrice: purchasePrice,
        sellingPrice: sellingPrice,
        quantity: quantity,
        unit: unit
      };
      //console.log(data, "Form Submitted");

      await axios.post
        (`${import.meta.env.VITE_API_URL_BACKEND}/create-items`, data,
          {
            headers: { "x-auth-token": getToken() }
          }
        )

      setItemName("")
      setDiscription("")
      setPurchasePrice("")
      setSellingPrice("")
      setQuantity("")
      setUnit("")

      // Refresh item list
      getAllItemsData()

      
      toast.success("Form Submitted")

    } catch (error) {
      console.log(error);
      toast.error("Failed to add item!")
    }
  }

  const getAllItemsData = async () => {
    try {
      const apiResponse = await axios.get
        (`${import.meta.env.VITE_API_URL_BACKEND}/get-all-items`,
          {
            headers: { "x-auth-token": getToken() }
          }
        );           //backend api data fetch

      setData(apiResponse.data.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => { // hook
    getAllItemsData(); //automatically getall functioncall when page first load
  }, []);


  //const handleClose = () => setShow(false);


  const openDeleteModel = (_id) => {
    setShowDeleteModal(true)
    setDeleteId(_id)

  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL_BACKEND}/delete-items/${deleteId}`,
        {
          headers: { "x-auth-token": getToken() }
        }
      )

      setShowDeleteModal(false)
      getAllItemsData()
      toast.success("Item Deleted!")

    } catch (error) {
      console.log(error)
      toast.error("Failed to delete item!")
    }
  }


  const openEditModal = (items) => {  // Store the item we want to edit in state
    setEditItem(Items)
    setShowEditModal(true)
  }

  // EDIT - Submit updated item to API
  const handleEditSubmit = async () => {
    try {
      await axios.put
        (`${import.meta.env.VITE_API_URL_BACKEND}/Update-items`,
          {    // item to update
            id: editItem._id,
            name: editItem.name,
            decription: editItem.decription,
            sellingPrice: editItem.sellingPrice,
            purchasePrice: editItem.purchasePrice,
            quantity: editItem.quantity,
            unit: editItem.unit
          },

          {
            headers: { "x-auth-token": getToken() }
          }
        )

      setShowEditModal(false)
      getAllItemsData()
      toast.success("Item Updated!")

    } catch (error) {
      console.log(error)
      toast.error("Failed to update item!")
    }
  }


  return (
    <>


      <h1 className='text-danger text-center my-5'> <b>Manage Items</b></h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3 className='border text-center'>Create Item</h3>

            <Form className='form my-5'>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Item Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Item Name"
                    onChange={(event) => setItemName(event.target.value)}
                    value={itemName} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Discription</Form.Label>
                  <Form.Control type='text' placeholder='Enter Discription'
                    onChange={(event) => setDiscription(event.target.value)}
                    value={discription} />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Purchase Price </Form.Label>
                  <Form.Control type="Number" placeholder="Enter Purchase Price"
                    onChange={(event) => setPurchasePrice(event.target.value)}
                    value={purchasePrice} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridAddress1">
                  <Form.Label>Selling Price</Form.Label>
                  <Form.Control type="Number" placeholder="Enter Selling Price"
                    onChange={(event) => setSellingPrice(event.target.value)}
                    value={sellingPrice} />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control type='Number' placeholder='Enter Quantity'
                    onChange={(event) => setQuantity(event.target.value)}
                    value={quantity} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Unit</Form.Label>
                  <Form.Select defaultValue="Choose Unit"
                    onChange={(event) => setUnit(event.target.value)}
                    value={unit}>
                    <option>Choose Unit</option>
                    <option>Pice</option>
                    <option>Box</option>
                    <option>Kg</option>
                    <option>Gram</option>
                    <option>Litter</option>
                  </Form.Select>
                </Form.Group>
              </Row>

              <div className='text-center'>
                <Button variant="primary" type="submit" className='w-50' onClick={SubmitForm} >
                  Add Item
                </Button>
              </div>
            </Form>
          </div>

          <div className="col-md-6">
            <h3 className=' border text-center'>Get List</h3>
            <Table striped bordered hover>
              <thead>
                <tr >
                  <th>SrNo</th>
                  <th>Item Name</th>
                  <th>Discription</th>
                  <th>Purchase Price</th>
                  <th>Selling Price</th>
                  <th>Quantity</th>
                  <th>Unit</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {itemData && itemData.map((items, index) => (
                  <tr key={items._id}>
                    <td>{index + 1}</td>
                    <td>{items.name}</td>
                    <td>{items.discription}</td>
                    <td>{items.purchasePrice}</td>
                    <td>{items.sellingPrice}</td>
                    <td>{items.quantity}</td>
                    <td>{items.unit}</td>

                    <td className='d-flex'>
                      <button
                        className="btn btn-success btn-sm me-1"
                        onClick={() => openEditModal(items)}
                      >
                        Edit
                      </button>

                      <button
                        className='btn btn-danger mx-2'
                        onClick={() => openDeleteModel(items._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}

                {itemData && itemData.length === 0 && (
                  <tr>
                    <td colSpan="8" className="text-center text-muted">
                      No items found. Add your first item!
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        </div>
      </div>


     

      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleDelete}>Yes, Delete</Button>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>Cancel</Button>
        </Modal.Footer>
      </Modal>

      {/* ---- EDIT Modal ---- */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editItem && (
            <Form>
              <Form.Group className="mb-2">
                <Form.Label>Item Name</Form.Label>
                <Form.Control
                  type="text"
                  value={editItem.name}
                  // Update editItem state when user types
                  onChange={(e) => setEditItem({ ...editItem, name: e.target.value })}
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  value={editItem.decription}
                  onChange={(e) => setEditItem({ ...editItem, decription: e.target.value })}
                />
              </Form.Group>

              <Row>
                <Form.Group as={Col} className="mb-2">
                  <Form.Label>Purchase Price</Form.Label>
                  <Form.Control
                    type="number"
                    value={editItem.purchasePrice}
                    onChange={(e) => setEditItem({ ...editItem, purchasePrice: e.target.value })}
                  />
                </Form.Group>

                <Form.Group as={Col} className="mb-2">
                  <Form.Label>Selling Price</Form.Label>
                  <Form.Control
                    type="number"
                    value={editItem.sellingPrice}
                    onChange={(e) => setEditItem({ ...editItem, sellingPrice: e.target.value })}
                  />
                </Form.Group>
              </Row>

              <Row>
                <Form.Group as={Col} className="mb-2">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    value={editItem.quantity}
                    onChange={(e) => setEditItem({ ...editItem, quantity: e.target.value })}
                  />
                </Form.Group>

                <Form.Group as={Col} className="mb-2">
                  <Form.Label>Unit</Form.Label>
                  <Form.Select
                    value={editItem.unit}
                    onChange={(e) => setEditItem({ ...editItem, unit: e.target.value })}
                  >
                    <option>Piece</option>
                    <option>Box</option>
                    <option>Kg</option>
                    <option>Gram</option>
                    <option>Liter</option>
                  </Form.Select>
                </Form.Group>
              </Row>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleEditSubmit}>Save Changes</Button>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </>

  )

}
export default Items

