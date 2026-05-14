import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const PUBLIC_ROUTES = ['/', '/register']

const AuthNavBar = () => {

  const navigate = useNavigate()
  const location = useLocation()

  if (PUBLIC_ROUTES.includes(location.pathname)) {
    return null
  }

  const handleLogout = () => {
    localStorage.removeItem("token") // Remove token from localStorage - this logs the user out
    navigate("/")
  }


  return (


    <div className='d-flex align-items-center  bg-light'>
      <div className='m-3'>
        <h3 className="text-white mb-0" >MyApp</h3>
      </div>

      <div className='m-3'>

        <a href="/dashboard" className="text-white">Dashboard</a>
      </div>

      <div className='m-3'>
        <h3><a href="/items" className="text-white text-decoration-none fs-5" >Items</a></h3>
      </div>

      <div className="ms-auto">
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout </button>
      </div>
    </div>

    
  )
};

export default AuthNavBar
