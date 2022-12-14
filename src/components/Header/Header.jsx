import React from "react";
import logo from "../../assets/images/logo.jpeg";
import header from "../../assets/images/header.png";
import "./Header.scss";

const Header = () => {
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="logo" className="logo__image" />
      </div>
      <div className="header">
        <img src={header} alt="background of beer" className="header__image" />
      </div>
    </div>
  );
};

export default Header;
