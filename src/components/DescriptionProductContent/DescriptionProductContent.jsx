import React from "react";
import "./DescriptionProductContent.css";

import hline from "../../assets/images/icons/hline.png";
import orangeUmbrella from "../../assets/images/orangeUmbrella.jpg";

export default function DescriptionProductContent({iconProduct, title}) {
  return (
    <div className="DescriptionProductContent">
      <picture className="iconProductDescription">
        <img src={iconProduct} alt="component" />
      </picture>
      <h3>{title}</h3>
      <span className="line"></span>
      <p>Descripción del producto. Este es un texto simulado.</p>
      <h5>{">"} VER MÁS</h5>
    </div>
  );
}
