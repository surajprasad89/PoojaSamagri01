import React from 'react'
import './Header.css' 

const Header = () => {
  return (
    <div className='header'>
      <video autoPlay loop muted className="header-video">
        <source src="/path/to/your/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="header-contents">
      </div>
    </div>
  )
}

export default Header
