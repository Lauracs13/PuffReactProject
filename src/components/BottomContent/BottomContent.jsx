import React, { useState } from "react";
import validator from 'validator'
import './BottomContent.css'

const styleBottom = {
    width: "50%",
    height: "50vh",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  };
export default function BottomContent() {
  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('Email válido :)')
    } else {
      setEmailError('Email inválido')
    }
  }
  return (
    <div className='BottomContent'>
        <h6 style={{color:'gray'}}>INSTAGRAM</h6>
        <h2>#ESPUFI</h2>
        <h5 style={{color:'gray'}}>NEWSLETTER</h5>
        <h2>SUSCRIBITE</h2>
        <h6>Y enterate de todas las novedades</h6>
        <span>Enter Email: </span><input placeholder= "Ingresa tu email" type="text" id="userEmail" 
        onChange={(e) => validateEmail(e)}></input> 

    </div>
  )
}
