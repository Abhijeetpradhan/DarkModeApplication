import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <>
    <div>Products</div>
    <input type="text" placeholder='searchbox' />
    <nav>
        <Link to="featured">Featured</Link>
        <Link to="new" style={{marginLeft:"20px"}}>New </Link>
    </nav>

    <Outlet/>
    
    </>
  )
}

export default Products