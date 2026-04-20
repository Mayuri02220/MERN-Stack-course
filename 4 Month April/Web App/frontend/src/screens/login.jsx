import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Login = () => {
  return (
    <div>




      <Card className='text-center m-5'>
        <Card.Body>
          <Card.Title>Login</Card.Title>
          <form>
            <input type='text' placeholder='Enter Email'></input>
            <br /> <br />
            <input type='text' placeholder='Enter Password'></input>
            <br /> <br />
            
            <button  className="btn btn-success text=white"> 
              <a href='/Dashboard'>Login</a></button>
              <br />
              <p className='text-danger'>Don't have an account?<a href='/Register'>Register</a> </p>
          </form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Login
