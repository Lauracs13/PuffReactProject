import React from 'react'
import './ImageContent.css'

// import umbrellas from "../../assets/images/umbrellas.jpg";

export default function ImageContent({backgroundImage}) {
  console.log(backgroundImage)
        return (
      <picture className='ImageContent'>
        <img src={backgroundImage} alt=''/>
      </picture>
    )
}
