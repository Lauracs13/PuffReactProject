import React from 'react'
import line from '../../assets/images/icons/line.png';
import { Link } from "react-router-dom";


export default function RightTopBar() {
  return (
    <div>
      <select style={{border:'none', backgroundColor: 'transparent'}}>
        <option >MI CUENTA</option>
      </select>
      <img src={line} alt='line' style={{width:'15px'}}></img>
<Link to ={'#'}>MI COMPRA</Link>
    
    </div>
  )
}
