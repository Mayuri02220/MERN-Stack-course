import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import "./style.css"

function App() {

  return (
    <>
      <h1 className='text-danger text-center my-5'>CRUD - MERN Stack Project</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3 className='border text-center'>Add Item</h3>
            <Form className='form my-5'>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>

              <div className='text-center'>
              <Button variant="primary" type="submit" className='w-50' >
                Submit
              </Button>
              </div>
            </Form>
          </div>

          <div className="col-md-6">
            <h3 className=' border text-center'>Item List</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Zip</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>mk@gmail.com</td>
                  <td>12345</td>
                  <td>Charegoan</td>
                  <td>Karad</td>
                  <td>Maharashtra</td>
                  <td>415109</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>mk@gmail.com</td>
                  <td>12345</td>
                  <td>Charegoan</td>
                  <td>Karad</td>
                  <td>Maharashtra</td>
                  <td>415109</td>
                </tr>
                 <tr>
                  <td>1</td>
                  <td>mk@gmail.com</td>
                  <td>12345</td>
                  <td>Charegoan</td>
                  <td>Karad</td>
                  <td>Maharashtra</td>
                  <td>415109</td>
                </tr>
                 <tr>
                  <td>1</td>
                  <td>mk@gmail.com</td>
                  <td>12345</td>
                  <td>Charegoan</td>
                  <td>Karad</td>
                  <td>Maharashtra</td>
                  <td>415109</td>
                </tr>
                 <tr>
                  <td>1</td>
                  <td>mk@gmail.com</td>
                  <td>12345</td>
                  <td>Charegoan</td>
                  <td>Karad</td>
                  <td>Maharashtra</td>
                  <td>415109</td>
                </tr>
                 <tr>
                  <td>1</td>
                  <td>mk@gmail.com</td>
                  <td>12345</td>
                  <td>Charegoan</td>
                  <td>Karad</td>
                  <td>Maharashtra</td>
                  <td>415109</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
