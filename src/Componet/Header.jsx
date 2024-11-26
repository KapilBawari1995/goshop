import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart, FaSearch, FaHome, FaBox } from "react-icons/fa";
import logo from '../assets/image/logo.png';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const menuItems = [
    { id: 1, label: "Home", icon: <FaHome />, link: "/" },
    { id: 2, label: "Products", icon: <FaBox />, link: "/products" },
    { id: 3, label: "Cart", icon: <FaShoppingCart />, link: "/cart" },
    {
      id: 4,
      label: isLoggedIn ? "Logout" : "Login",
      icon: <FaUser />,
      action: () => toggleLogin(), 
    },
  ];

  
  const toggleLogin = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  return (
    <header className="header">
     
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

    
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for Products, Brands and More"
        />
        <button className="search-btn">
          <FaSearch />
        </button>
      </div>

    
      <div className="menu">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="menu-item"
            onClick={item.action || null} 
            style={{ cursor: item.action ? "pointer" : "default" }}
          >
            <Link to={item.link || "#"} className="menu-link">
              <div className="icon">{item.icon}</div>
              <span>{item.label}</span>
            </Link>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
