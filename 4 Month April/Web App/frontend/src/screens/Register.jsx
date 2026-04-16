import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Register = () => {
  return (
    <div>

      <Card className='text-center m-5'>
        <Card.Body>
          <Card.Title>Register</Card.Title>

          <input type='text' placeholder='Enter Name'></input>
          <br /> <br />
          <input type='text' placeholder='Enter Email'></input>
          <br /> <br />
          <input type='text' placeholder='Enter Password'></input>
          <br />  <br />

          <button variant="success">Register</button>
          <br />
          <p className='text-danger'>Already have an account?<a href='/'>Login</a> </p>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Register
