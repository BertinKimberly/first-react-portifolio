import React from 'react'
import  { icons } from 'react-icons'
import "../Styles/Footer.css";


function Footer() {
  return (
    <div className='footer'>
       <div className='icons'>
        <icons/>
       </div>
      <p>&copy; 2023 bertink.com</p>
    </div>
  )
}

export default Footer
