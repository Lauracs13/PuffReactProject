import React from 'react'
import './Logo.css'

import logo from '../../assets/images/icons/logo.png'

export default function Logo() {
  return (
    <picture className='Logo'>
     <img src= {logo} alt='logo'/>
    </picture>
  )
}
