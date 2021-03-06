import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="main-nav bg-primary">
        <div className="logo">
          <h2>
            <span>E</span>du
            <span>T</span>ech
          </h2>
        </div>
        <div className="menu-link">
          <ul>
            <li className="text-xl">
              <Link to="/">HOME</Link>
            </li>
            <li className="text-xl">
              <Link to="/learn">LEARN</Link>
            </li>
            <li className="text-xl">
              <Link to="/chatroom">CHAT</Link>
            </li>

            <li className="text-xl bg-secondary px-3 py-2 rounded-lg ">
              <Link to="/chatroom">Logout</Link>
            </li>
            
          </ul>
        </div>
        
      </nav>
    </>
  );
};

export default Navbar;