import React from 'react'
import icons from "../../assets/images/icons/icons";
import './BottomFooter.css'

export default function BottomFooter() {
  return (
    <div className='BottomFooter'>
<p>PUFI Copyright 2017 - Todos los derechos reservados</p>
<img src={icons.secure} alt="secure"></img>
    </div>
  )
}
