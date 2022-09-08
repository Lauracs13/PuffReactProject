import React from "react";
import "./BottomContent.css";
import BottomCollage from "../BottomCollage/BottomCollage";
import EmailValidation from "../EmailValidation/EmailValidation";

export default function BottomContent() {
  
  return (
    <div className="BottomContent">
      <h5 style={{ color: "gray" }}>INSTAGRAM</h5>
      <h1>#ESPUFI</h1>
      <BottomCollage/>
      <h5 style={{ color: "gray" }}>NEWSLETTER</h5>
      <h1>SUSCRIBITE</h1>
      <h5>Y enterate de todas las novedades</h5>
      <br/>
      <EmailValidation/>
    </div>
  );
}
