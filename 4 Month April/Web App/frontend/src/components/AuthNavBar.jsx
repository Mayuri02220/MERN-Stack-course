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
        <h3 className="text-black mb-0" >MyApp</h3>
      </div>

      <div className="text-black m-2">
        <a href="/dashboard" className="text-black">Dashboard</a>
      </div>

      <div className="text-black m-2">
        <a href="/items" className="text-black">Items</a>
      </div>

      <div className="ms-auto">
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout </button>
      </div>
    </div>

    
  )
};

export default AuthNavBar
