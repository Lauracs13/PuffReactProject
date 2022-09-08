import React from "react";
import "./BottomCollage.css";


import images from "../../assets/images/images";
import ImageContent from "../ImageContent/ImageContent";

const imagesCollage = [
  {
    id: 1,
    backgroundImage: `${images.umbrellas}`,
    },
  {
        id: 2,
        backgroundImage: `${images.rest}`,
        
      },
      {
        id: 3,
        backgroundImage: `${images.bags}`,
        
      },
      {
        id: 4,
        backgroundImage: `${images.nap}`,
       
      },
      {
        id: 5,
        backgroundImage: `${images.fancy}`,
       
      },
      {
        id: 6,
        backgroundImage: `${images.pool}`,
       
      }
];
// console.log(productsData[0].backgroundImage);
export default function BottomCollage() {
  return (
    <div className="BottomCollage">

  {
  imagesCollage.map((image) => {
      
        return (<ImageContent key={image.id} backgroundImage={image.backgroundImage} />);
  })}
     
   
    </div>
  );
}