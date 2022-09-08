import React from "react";
import line from "../../assets/images/icons/line.png";
import { Link } from "react-router-dom";
import "./RightTopBar.css";

export default function RightTopBar() {
  return (
    <div className="RightTopBar">
      <select>
        <option>MI CUENTA</option>
      </select>
      <img src={line} alt="line" style={{ width: "15px" }}></img>
      <Link to={"#"} style={{ textDecoration: 'none' }}>MI COMPRA</Link>
    </div>
  );
}
