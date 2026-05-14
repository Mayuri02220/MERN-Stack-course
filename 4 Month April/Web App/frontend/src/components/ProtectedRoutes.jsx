 import React from 'react'
 import { Children } from 'react'
 import { Navigate, useNavigate } from 'react-router-dom'


export const  ProtectedRoute = ({ children }) => {

  // Check if token exists in localStorage
  const token = localStorage.getItem("token")
  
  if (token) {
    return <Navigate to="/" />
  }

    return children
}


export const  PublicRoute = ({ children }) => {

  // Check if token exists in localStorage
  const token = localStorage.getItem("token")
  
  if (token) {
    return <Navigate to="/dashboard" />
  }

    return children
}
