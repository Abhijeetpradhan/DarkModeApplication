import { useEffect, useState } from 'react'
import './App.css'
import BackgroundChanger from './Components/BackgroundChanger';
import PasswordGenerator from './Components/PasswordGenerator';
import Navbar from './Components/NavbarWithDarkLightMode/Navbar';

function App() {

  const currentTheme = localStorage.getItem('currentTheme') 
  const [theme,setTheme] = useState(currentTheme ? currentTheme : 'light');


  useEffect(()=>{
    localStorage.setItem('currentTheme',theme);
  },[theme])

  return (
    <>
    <div className={`Container ${theme}`}>
      {/* <BackgroundChanger/> */}
      {/* <PasswordGenerator/> */}
      <Navbar  theme={theme} setTheme={setTheme} />
    </div>

    </>
  )
}

export default App
