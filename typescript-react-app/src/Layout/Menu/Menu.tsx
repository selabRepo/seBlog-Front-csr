import * as React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="App-Menu">
      <div className="menu-container">
        <ul className="menu-ul">
          <li className="menu-list">
            <NavLink
              exact
              to="/"
              className="menu-list-item"
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          <li className="menu-list">
            <NavLink
              to="/About"
              className="menu-list-item"
              activeClassName="active"
            >
              About
            </NavLink>
          </li>
          <li className="menu-list">
            <NavLink
              to="/Blog"
              className="menu-list-item"
              activeClassName="active"
            >
              Blog
            </NavLink>
          </li>
          <li className="menu-list">
            <NavLink
              to="/Setting"
              className="menu-list-item"
              activeClassName="active"
            >
              Setting
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
