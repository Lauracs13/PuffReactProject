import React from 'react';
import "./FooterList.css";

export default function FooterList({arr}) {
  return (
    <ul className='FooterList'>
        {arr.map(item =>{
            return <li key={item}>{item}</li>;
        })}
    </ul>
  )
}
