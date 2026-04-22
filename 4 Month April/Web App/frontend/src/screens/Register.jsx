import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Register = () => {

const navigate = useNavigate();

    const [Name, setName] = useState();
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();

  const SubmitRegisterform = async () => {
    
    const payload = {
      name: "name",
      email: "email",
      password: "password"
    };

    const apiResponse = await axios.post(`${import.meta.env.VITE_API_URL_BACKEND}/register`, payload)
      
    .then((req) => ("/dashboard"))
    .catch((error) => console.log(error));

    console.log(apiResponse) ;
  };

  return (
    <div>
      <Card className='text-center m-5'>
        <Card.Body>
          <Card.Title>Register</Card.Title>

          <input type='text' placeholder='Enter Name'
            name="name"
            onChange={(event) => setName(event.target.value)}  value={Name}
            ></input>
          <br /> <br />

          <input type='text' placeholder='Enter Email'
            name="email" 
            onChange={(event) => setEmail(event.target.value)} value={Email}
            ></input>
          <br /> <br />

          <input type='text' placeholder='Enter Password'
            name="password" 
            onChange={(event) => setPassword(event.target.value)} value={Password}
            ></input>
          <br /> <br />

          <Button className="btn btn-success" onClick={SubmitRegisterform}>
            Register </Button>
          <br /> <br />
          <p className='text-danger'>Already have an account?<a href='/'>Login</a> </p>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Register
