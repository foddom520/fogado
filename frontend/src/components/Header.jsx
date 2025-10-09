import React from "react";
import Top from "../assets/top.jpg";
import "../Styles/Header.css";

function Header() {
  return (
    <div className="header">
        <img src={Top} alt="top" className="top"/>
    </div>
    );
}
export default Header;