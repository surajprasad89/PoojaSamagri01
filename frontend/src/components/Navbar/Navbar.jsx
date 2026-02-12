import React, { useContext, useState, useEffect } from 'react'
import './navbar.css'
import { assets } from '../../assets/assets' 
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {
  const [tab, setTab] = useState("home");
  const [darkMode, setDarkMode] = useState(false);
  const {getTotalCartAmount} = useContext(StoreContext)

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
     <Link to='/'> <img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=> setTab("home")} className={tab==="home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=> setTab("menu")}  className={tab==="menu"?"active":""}>Menu</a>
        <a href='#app-download' onClick={()=> setTab("mobile-app")}  className={tab==="mobile-app"?"active":""}>Mobile-app </a>
        <a href='#footer' onClick={()=> setTab("contact-us")}  className={tab==="contact-us"?"active":""}>Contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" style={{margin: '0 10px', outline: 'none'}} />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
          {darkMode ? '☀️' : '🌙'}
        </button>
        <button onClick={()=>setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
