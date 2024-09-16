import React from 'react'
import './Navbar.css'
import logoWhite from '../../assets/logo-white.png'
import logoDark from '../../assets/logo-black.png'
import dayIcon from '../../assets/day.png'
import nightIcon from '../../assets/night.png'
import searchLightIcon from '../../assets/search-w.png'
import searchNightIcon from '../../assets/search-b.png'

const Navbar = ({theme,setTheme}) => {

const toggleTheme  = ()=>{
    console.log("toggleTheme");
    
    theme == 'light' ? setTheme('dark') : setTheme('light');
}

  return (
    <>
        <div className='Navbar'>
            <img src={theme == 'light' ? logoDark : logoWhite} alt="logo"  className='Logo'/>

            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>

            <div className='Search-box'>
                <input type="text" placeholder='Search' />
                <img src={theme == 'light' ? searchLightIcon : searchNightIcon} alt="Search" />   
            </div>


            <img onClick={toggleTheme} src={theme == 'light' ? nightIcon : dayIcon} alt="Icon" className='ToggleIcon' />
        </div>
    </>
  )
}

export default Navbar