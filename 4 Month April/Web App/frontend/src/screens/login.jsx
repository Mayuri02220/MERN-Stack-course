import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Login = () => {

const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();

 const handleLoginSubmit = async () => {
    
    const payload = {
           email: "email",
      password: "password"
    };

    const apiResponse = await axios.post(`${import.meta.env.VITE_API_URL_BACKEND}/login`, payload
      
    ).then(console.log("Yes")). 
      catch((error) => console.log(error));

    console.log(apiResponse, "payload");
  };



  return (
    <div>
      <Card className='text-center m-5'>
        <Card.Body>
          <Card.Title>Login</Card.Title>
          <form>
            <input type='text' placeholder='Enter Email'
            name="email" 
            onChange={(event) => setEmail(event.target.value)} value={Email} ></input>
            <br /> <br />

            <input type='text' placeholder='Enter Password'
            name="password" 
            onChange={(event) => setPassword(event.target.value)} value={Password} ></input>
            <br /> <br />
            
            <Button  className="btn btn-success text=white"> 
              <a href='/Dashboard'>Login</a></Button>
              <br />
              <p className='text-danger'>Don't have an account?<a href='/Register'>Register</a> </p>
          </form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Login
