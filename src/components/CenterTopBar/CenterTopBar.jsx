import React from 'react';
import CenterTopBarComponent from '../CenterTopBarComponent/CenterTopBarComponent';
import icons from '../../assets/images/icons/icons'


const styleCenterBar = {
  width : '33%',
  display: 'flex',
  justifyContent: 'space-between',  
}

export default function CentertopBar() {
  return (
    <div style={styleCenterBar}>
      <CenterTopBarComponent text={'PUFI PUFF'} logo={icons.puffIcon}/>
      <img src= {icons.line} alt='line'style={{width:'20px'}}></img>
      <CenterTopBarComponent text={'PUFI RAIN'} logo={icons.umbrella}/>
      <img src= {icons.line} alt='line' style={{width:'20px'}}></img>
      <CenterTopBarComponent text={'PUFI CART'} logo={icons.cart}/>
      <img src= {icons.line} alt='line'style={{width:'20px'}}></img>
      <CenterTopBarComponent text={'PUFI NAP'} logo={icons.nap}/>
    </div>
  )
}
