import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>E</span>du
            <span>T</span>ech
          </h2>
        </div>
        <div className="menu-link">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/learn">LEARN</Link>
            </li>
            <li>
              <Link to="/chatroom">CHAT</Link>
            </li>
            
          </ul>
        </div>
        
      </nav>
    </>
  );
};

export default Navbar;