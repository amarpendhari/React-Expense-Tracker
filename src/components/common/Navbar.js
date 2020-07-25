import React from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="d-flex">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          <Link to="/">React Expense Tracker</Link>
        </h2>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/expensechart">Expense Chart</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
