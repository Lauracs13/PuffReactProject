import React from 'react';
import './TopBar.css'

import Logo from '../Logo/Logo';
import CenterTopBar from '../CenterTopBar/CenterTopBar';
import RightTopBar from '../RightTopBar/RightTopBar';

export default function TopBar() {
  return (
    <div className='TopBar'>
        <Logo/>
        <CenterTopBar/>
        <RightTopBar/>
        
    </div>
  )
}
