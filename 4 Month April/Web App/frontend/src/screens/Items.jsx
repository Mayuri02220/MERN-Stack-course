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
import { useState } from 'react';
import { useEffect } from 'react';// hooks    they store data 


function Items() {

  const [itemName, setItemName] = useState();  //store data in variable
  const [discription, setDiscription] = useState();
  const [purchasePrice, setPurchasePrice] = useState();
  const [sellingPrice, setSellingPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [unit, setUnit] = useState();
  const [itemData, setData] = useState();



  async function SubmitForm(e) {
    try {
      e.preventDefault(); //page refresh

      const data = {  //object create
        name: itemName,
        discription: discription,
        purchasePrice: purchasePrice,
        sellingPrice: sellingPrice,
        quantity: quantity,
        unit: unit,
      };

      console.log(data, "Form Submitted");


      const apiResponse = await axios.post(`${import.meta.env.VITE_API_URL_BACKEND}/create-items`,
      {
        name: itemName,
        discription: discription,
        purchasePrice: purchasePrice,
        sellingPrice: sellingPrice,
        quantity: quantity,
        unit: unit,
    }).then(console.log("Yes")).catch((error) => console.log(error));

      console.log(apiResponse);
      getAllItemsData();

      toast.success("Form Submitted", {  // tostify through alert msg
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    } catch (error) {
      console.log(error);
    }
  }

  const getAllItemsData = async () => {
    try {
      const apiResponse = await fetch(`${import.meta.env.VITE_API_URL_BACKEND}/get-all-items`); //backend api data fetch
      const responseData = await apiResponse.json();
      setData(responseData.data) //data strore

      console.log(responseData)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => { // hook
    getAllItemsData(); //automatically getall functioncall
  }, []);

  //console.log(itemData, "itemData ==>");

  const [show, setShow] = useState(false);
  const [id, setId] = useState()

  const handleClose = () => setShow(false);

  const openDeleteModel = (_id) => {
    try {
      setShow(true);
      setId(_id)

      console.log(_id, "id ==>");
      console.log("call delete function");
    } catch (error) {
      console.log(error)
    }
  };

  const handleDelete = async () => {
    try {
      console.log(id, "id ==>");
      const apiResponse = await axios.delete(`${import.meta.env.VITE_API_URL_BACKEND}/delete-items/${id}`);
      setShow(false);
      console.log(apiResponse)
      getAllItemsData(); //fun call for latest data in db 

    } catch (error) {
      console.log(error)
    }
  };


  return (
    <>

      

      <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />

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
                  Submit
                </Button>
              </div>
            </Form>
          </div>

          <div className="col-md-6">
            <h3 className=' border text-center'>Get List</h3>
            <Table striped bordered hover>
              <thead>
                <tr >
                  <th>ID</th>
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

                {itemData &&
                  itemData.map((each, index) => {
                    return (
                      <tr key={index + 1}>
                        <td>{index + 1}</td>
                        <td>{each.name}</td>
                        <td>{each.discription}</td>
                        <td>{each.purchasePrice}</td>
                        <td>{each.sellingPrice}</td>
                        <td>{each.quantity}</td>
                        <td>{each.unit}</td>
                        <td className='d-flex'>
                          <button className='btn btn-success'>Edit</button>
                          <button className='btn btn-danger mx-2'
                            onClick={ () => openDeleteModel(each._id)}>
                            Delete</button>
                        </td>
                      </tr>
                    );
                  })
                }

              </tbody>
            </Table>
          </div>
        </div>
      </div>




      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Delete Confirmation </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure want to delete this Item</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDelete}>
            Yes
          </Button>
          <Button variant="primary" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Items

