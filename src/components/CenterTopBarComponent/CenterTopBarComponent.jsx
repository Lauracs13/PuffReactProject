import React from 'react'
import './CenterTopBarComponent.css'

export default function CenterTopBarComponent(props) {
  const text = props.text
  return (
    <div className='CenterTopBarComponent'>
      <img src={props.logo} alt='puff' style={{width:'50px'}}></img>
      {text}
    </div>
  )
}
