import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { ToastContainer, toast } from 'react-toastify';
import "./style.css";
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [itemName, setItemName] = useState()
  const [itemData, setData] = useState()

  console.log(itemName, "Typing Input field")

  const handleOnChange = (event) => {
    setItemName(event.target.value)
    console.log('Item Name value');
  }

  function SubmitForm(e) {
    e.preventDefault();

    console.log("Form Submitted");

    toast.success("Form Submitted", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  }

  const getAllItemsData = async () => {
    try {
      const apiResponse = await fetch("http://localhost:9090/api/get-all-items")
      const responseData = await apiResponse.json()
      setData(responseData.data)

      console.log(responseData)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllItemsData();
  }, []);

  console.log(
    itemData, "itemData ===>"
  )

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

      <h1 className='text-danger text-center my-5'>CRUD - MERN Stack Project</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3 className='border text-center'>Create Item</h3>
            <Form className='form my-5'>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Item Name</Form.Label>

                  <Form.Control type="text" placeholder="Enter Item Name"
                    onChange={() => handleOnChange(event)} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Discription</Form.Label>
                  <Form.Control type='text' placeholder='Enter Discription' />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Purchase Price </Form.Label>
                  <Form.Control type="Number" placeholder="Enter Purchase Price" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridAddress1">
                  <Form.Label>Selling Price</Form.Label>
                  <Form.Control type="Number" placeholder="Enter Selling Price" />
                </Form.Group>
              </Row>


              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control type='Number' placeholder='Enter Quantity' />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Unit</Form.Label>
                  <Form.Select defaultValue="Choose Unit">
                    <option>Choose Unit</option>
                    <option>Pice</option>
                    <option>Box</option>
                    <option>Kg</option>
                    <option>Gram</option>
                    <option>Littar</option>
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
                <tr>
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
                      <tr>
                        <td>{index + 1}</td>
                        <td>{each.name}</td>
                        <td>{each.description}</td>
                        <td>{each.purchaseprice}</td>
                        <td>{each.quantity}</td>
                        <td>{each.sellingprice}</td>
                        <td>{each.unit}</td>
                        <td className='d-flex'>
                          <button className='btn btn-success'>Edit</button>
                          <button className='btn btn-danger mx-2'>Delete</button>
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

    </>
  )
}

export default App
