import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Register = () => {


  const SubmitRegisterform = async () => {
    
    const [Name, setName] = useState();
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();

    const payload = {
      name: "name",
      email: "email",
      password: "password"
    };

    const apiResponse = await axios.post(`${import.meta.env.VITE_API_URL_BACKEND}/register`,
      {
        name: "name",
        email: "email",
        password: "password"
      }
    ).then(console.log("Yes")).
      catch((error) => console.log(error));

    console.log(apiResponse, "apiResponse==>");
  };

  return (
    <div>
      <Card className='text-center m-5'>
        <Card.Body>
          <Card.Title>Register</Card.Title>

          <input type='text' placeholder='Enter Name'
            name="name" value={name}
            onChange={(e) => setName(e.target.value)}></input>
          <br /> <br />

          <input type='text' placeholder='Enter Email'
            name="email" value={email}
            onChange={(e) => setEmail(e.target.value)} ></input>
          <br /> <br />

          <input type='text' placeholder='Enter Password'
            name="password" value={password}
            onChange={(e) => setPassword(e.target.value)} ></input>
          <br />  <br />

          <button className="btn btn-success" onClick={SubmitRegisterform}>
            Register </button>
          <br /> <br />
          <p className='text-danger'>Already have an account?<a href='/'>Login</a> </p>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Register
