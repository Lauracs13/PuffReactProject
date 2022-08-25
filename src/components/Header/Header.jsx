import React from 'react';
import './Header.css'

import TopBar from '../TopBar/TopBar';
import Carousel from '../Carousel/Carousel';

export default function Header() {
  return (
    <div className='Header'>
        <TopBar/>
        <Carousel/>
    </div>
  )
}
