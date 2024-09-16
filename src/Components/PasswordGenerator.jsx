import React from "react";
import { useState,useCallback,useEffect } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharacterAllowed, setIsCharacterAllowed] = useState(false);
  const [notification,setNotification] = useState("")


useEffect(()=>{
    PasswordGenerator();
},[length,isNumberAllowed,isCharacterAllowed])

const PasswordGenerator = useCallback(()=>{

    let password = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(isNumberAllowed) str+="1234567890"
    if(isCharacterAllowed) str+="!@#$%^&*()"

    for(let i=1;i<=length;i++){
        let char = Math.floor(Math.random() * str.length + 1)
        password += str.charAt(char);
    }

    setPassword(password);



},[length,isNumberAllowed,isCharacterAllowed])


const CopyToClipboard = ()=>{
    window.navigator.clipboard.writeText(password)
    setNotification("Copied...")

    setTimeout(()=>{
        setNotification("")
    },2000)
}

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Password"
          style={{
            padding: "11px",
            backgroundColor: "white",
            borderRadius: "10px",
            color: "black",
            width: "300px",
          }}
          value={password}
          readOnly
        />
        <button style={{ borderRadius: "10px" }} onClick={CopyToClipboard}>{notification ? "Copied" : "Copy"}</button>

      </div>

      <div style={{ display: "flex" }}>
        <div>
          <input
           type="range"
           min={6}
           max={100}
           value={length}
           onChange={(e)=>setLength(e.target.value)}
           />
          <label style={{ marginRight: "10px" }}>Length:{length}</label>
        </div>

        <div>
          <label>Numbers</label>
          <input
            type="checkbox"
            style={{ marginRight: "10px" }}
            onChange={() => {
              setIsNumberAllowed((prev) => !prev);
            }}
          />
        </div>

        <div>
          <label>Characters</label>
          <input
            type="checkbox"
            onChange={() => {
              setIsCharacterAllowed((prev) => !prev);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
