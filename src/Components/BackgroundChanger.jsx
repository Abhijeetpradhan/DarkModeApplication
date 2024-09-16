import React from "react";
import { useState } from "react";

const BackgroundChanger = () => {

let changeBackgroundColor = (color)=>{
  console.log("color:",color);
  document.body.style.backgroundColor = color
}

  return (
    <>
      <div className="container" >
        <div className="navBar">
          <div className="buttons">
            <button style={{backgroundColor:"red"}} onClick={() => changeBackgroundColor("red")}>Red</button>
            <button style={{backgroundColor:"blue"}} onClick={() => changeBackgroundColor("blue")}>Blue</button>
            <button style={{backgroundColor:"green"}} onClick={() => changeBackgroundColor("green")}>Green</button>
            <button style={{backgroundColor:"yellow",color:"black"}} onClick={() => changeBackgroundColor("yellow")}>Yellow</button>
            <button style={{backgroundColor:"orange"}} onClick={() => changeBackgroundColor("orange")}>Orange</button>
            <button style={{backgroundColor:"white",color:"black"}} onClick={() => changeBackgroundColor("white")}>White</button>
            <button style={{backgroundColor:"black"}} onClick={() => changeBackgroundColor("black")}>Black</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BackgroundChanger;
