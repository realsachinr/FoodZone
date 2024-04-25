import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="nav-container">
      <div>
        <img src="./logo.svg" alt="" />
      </div>
      <div className="btn-container">
        <button className="btn">All</button>
        <button className="btn">Breakfast</button>
        <button className="btn">Lunch</button>
        <button className="btn">Dinner</button>
      </div>

      <div>
        <input className="input-box" type="text"  placeholder="Search Food"/>
      </div>
    </div>
  );
};

export default Navbar;
