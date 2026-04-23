import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const SubmitRegisterform = async () => {

    const payload = {
      name: name,
      email: email,
      password: password
    };

    const apiResponse = await axios.post(`${import.meta.env.VITE_API_URL_BACKEND}/register`, payload);


    console.log("user Registered successfully", apiResponse.data.token);
    localStorage.setItem("token", apiResponse.data.token);

    navigate("/dashboard")
    console.log(apiResponse, "apiResponse==>");
  };

  return (
    <div>
      <Card className='text-center m-5'>
        <Card.Body>
          <Card.Title>Register</Card.Title>

          <input type='text' placeholder='Enter Name'
            name="name"
            onChange={(event) => setName(event.target.value)} value={name}
          ></input>
          <br /> <br />

          <input type='text' placeholder='Enter Email'
            name="email"
            onChange={(event) => setEmail(event.target.value)} value={email}
          ></input>
          <br /> <br />

          <input type='text' placeholder='Enter Password'
            name="password"
            onChange={(event) => setPassword(event.target.value)} value={password}
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
