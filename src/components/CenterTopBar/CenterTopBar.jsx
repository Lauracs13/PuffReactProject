import React from 'react';
import CenterTopBarComponent from '../CenterTopBarComponent/CenterTopBarComponent';
import puffIcon from '../../assets/images/icons/bean-bag.png'
import umbrella from '../../assets/images/icons/umbrella.png'
import cart from '../../assets/images/icons/shopping-bag.png'
import nap from '../../assets/images/icons/school-bag.png'
import line from '../../assets/images/icons/line.png';

const styleCenterBar = {
  width : '33%',
  display: 'flex',
  justifyContent: 'space-between',  
}

export default function CentertopBar() {
  return (
    <div style={styleCenterBar}>
      <CenterTopBarComponent text={'PUFI PUFF'} logo={puffIcon}/>
      <img src= {line} alt='line'style={{width:'20px'}}></img>
      <CenterTopBarComponent text={'PUFI RAIN'} logo={umbrella}/>
      <img src= {line} alt='line' style={{width:'20px'}}></img>
      <CenterTopBarComponent text={'PUFI CART'} logo={cart}/>
      <img src= {line} alt='line'style={{width:'20px'}}></img>
      <CenterTopBarComponent text={'PUFI NAP'} logo={nap}/>
    </div>
  )
}
