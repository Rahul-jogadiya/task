import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h2>Gaint logo</h2>
      </div>
      <div className="menu">
        <GiHamburgerMenu />
      </div>
    </header>
  );
};

export default Header;
