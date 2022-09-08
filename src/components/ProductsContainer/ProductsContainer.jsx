import React from "react";
import "./ProductsContainer.css";


import images from "../../assets/images/images";
import CardProduct from "../CardProduct/CardProduct";

const productsData = [
  {
    id: 1,
    backgroundImage: `${images.umbrellas}`,
    iconProduct: `${images.orangeUmbrella}`,
    title: "Pufi RAIN",
    description: "Descripción del producto. Este es un texto simulado.",
  },
  {
        id: 2,
        backgroundImage: `${images.rest}`,
        iconProduct: `${images.puffi}`,
        title: "Pufi PUFF",
        description: "Descripción del producto. Este es un texto simulado.",
      },
      {
        id: 3,
        backgroundImage: `${images.bags}`,
        iconProduct: `${images.bag}`,
        title: "Pufi CART",
        description: "Descripción del producto. Este es un texto simulado.",
      },
      {
        id: 4,
        backgroundImage: `${images.nap}`,
        iconProduct: `${images.pillow}`,
        title: "Pufi NAP",
        description: "Descripción del producto. Este es un texto simulado.",
      }
 
];
// console.log(productsData[0].backgroundImage);
export default function ProductsContainer() {
  return (
    <div className="ProductsContainer">

  {
  productsData.map((product) => {
      
        return (<CardProduct key={product.id} title={product.title} iconProduct={product.iconProduct} backgroundImage={product.backgroundImage} />);
  })}
     
   
    </div>
  );
}
