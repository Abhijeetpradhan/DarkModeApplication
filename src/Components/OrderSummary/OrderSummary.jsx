import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderSummary = () => {
    const navigate = useNavigate();
  return (
    <>
<h2>Order summary page</h2>
   <h1>Order Placed successfully !!!!</h1>

   <button onClick={()=>navigate("/")}>Go to Home Page</button>
    </>
  )
}

export default OrderSummary