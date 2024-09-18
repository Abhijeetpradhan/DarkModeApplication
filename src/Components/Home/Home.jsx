import React from 'react'
import puma from "../../assets/puma1.jpeg"
import "./Home.css"
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();

  return (
    <>
    <div>Home page</div>

    <div className='Puma'>
      <img src={puma} alt="puma" />
    </div>

    <button onClick={()=>navigate("order-summary")}>Place Order</button>
    
    </>
  )
}

export default Home