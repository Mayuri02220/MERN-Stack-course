import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleLoginSubmit = async () => {
    try {

      const apiResponse = await axios.post
        (`${import.meta.env.VITE_API_URL_BACKEND}/login`,
          {
            email: email,
            password: password
          }
        )
      console.log(apiResponse.data, "login response");
      localStorage.setItem("token", apiResponse.data.token)
      toast.success("Login Successful!")
     
      navigate("/")

    } catch (error) {
      console.log(error)
      toast.error("Login Failed! Check your email or password.")
    }
  };


  return (
    <div>
      <Card className='text-center m-3'>
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

            <Button className="btn btn-success text=white "  
             onClick={handleLoginSubmit} >
             Login </Button>
            <br/> <br/>
            
            <p className='text-danger'>Don't have an account?<a href='/Register'>Register</a> </p>
          </form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Login
