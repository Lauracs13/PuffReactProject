import React from "react";
import Logo from "../Logo/Logo";
import FooterList from "../FooterList/FooterList";
import "./TopFooter.css";
import icons from "../../assets/images/icons/icons";

export default function TopFooter() {
  return (
    <div className="TopFooter">
      <Logo />
      <FooterList arr={["PUFI RAIN", "PUFI PUFF", "PUFI CART", "PUFI NAP"]} />
      <FooterList
        arr={["CONTACTO", "AYUDA", "CÓMO COMPRAR", "TÉRMINOS & CONDICIONES"]}
      />
      <div className="cardFooter">
        <p>COMPRA 100% SEGURA</p>
        <div className="cardContent">
          <img src={icons.qrcode} alt="qrcode"></img>
          <img src={icons.warranty} alt="warranty"></img>
          <span>COMPRA CON LA GARANTÍA PUFI</span>
        </div>
      </div>
      <div className="secondCardFooter">
        <span>SEGUINOS EN</span>
        <img src={icons.facebook} alt="facebook"></img>
        <img src={icons.twitter} alt="twitter"></img>
        <img src={icons.instagram} alt="instagram"></img>
      </div>
    </div>
  );
}
