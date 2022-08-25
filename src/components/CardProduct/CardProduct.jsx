import React from "react";
import './CardProduct.css'

import ImageContent from "../ImageContent/ImageContent";
import DescriptionProductContent from "../DescriptionProductContent/DescriptionProductContent";

export default function CardProduct({backgroundImage, iconProduct, title}) {
  // console.log(backgroundImage);
  return (
    <section className="CardProduct">
      
      <ImageContent backgroundImage={backgroundImage}/>
      <DescriptionProductContent iconProduct={iconProduct} title={title}/>
    </section>
  );
}
