import React from 'react'

const Register = () => {
  return (
    <div>
      <h2>Register</h2>
       <input type='text'placeholder='Enter Name'></input>   
       <input type='text'placeholder='Enter Email'></input>
       <input type='text'placeholder='Enter Password'></input>

       <button>Register</button>
       <p className='text-danger'>Already have an account?<a href='/'>Login</a> </p>
    </div>
  )
}

export default Register
