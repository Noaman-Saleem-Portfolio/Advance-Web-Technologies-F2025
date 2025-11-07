import React from 'react'
import { Link, Outlet } from 'react-router'

const Produsts = () => {
  return (
    <div>
      <h1 style={{textAlign:"center",fontSize:"56px"}}>Products</h1>
      {/* <h1>Products</h1> */}
      <div className="products-menu">
        <Link to={"/products/men"}>Men</Link>
        <Link to={"/products/women"}>Women</Link>
        <Link to={"/products/kids"}>Kids</Link>
      </div>

      <Outlet />
    </div>
  )
}

export default Produsts
