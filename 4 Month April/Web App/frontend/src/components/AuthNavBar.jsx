import React from 'react'

const AuthNavBar = () => {
  return (
    <div>
      <div className='d-flex  bg-light'>
        <div className='m-3'>
          <h3>LOGO</h3>
        </div>
        <div className='m-3'>
          <h3><a href="/dashboard">Dashboard</a></h3>
        </div>
        <div className='m-3'>
          <h3><a href="/items">Items</a></h3>
        </div>

      </div>
    </div>
  )
}

export default AuthNavBar
