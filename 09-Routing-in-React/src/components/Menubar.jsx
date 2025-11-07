import React from 'react'
import { Link } from 'react-router'

const Menubar = () => {
  return (
    <div className="menubar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/products">Products</Link>
    </div>
  )
}

export default Menubar
