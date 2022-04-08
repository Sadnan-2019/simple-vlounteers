import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div className="navigation App">
      <nav className="">
        

        <Link to="/home">Home</Link>
        <Link to="/">Main Product</Link>
        <Link to="/volenteers">Volenteers</Link>
     
      </nav>
    </div>
  );
};

export default Header;
