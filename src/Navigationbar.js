import React from "react";
import "./App.css";

function Navigationbar() {
  return (
    <div>
      <header className="block">
        <ul className="header-menu horizontal-list">
          <li>
            <a className="header-menu-tab" href="#1">
              <span className="icon entypo-cog scnd-font-color"></span>Settings
            </a>
          </li>
          <li>
            <a className="header-menu-tab" href="#2">
              <span className="icon fontawesome-user scnd-font-color"></span>
              Account
            </a>
          </li>
          <li>
            <a className="header-menu-tab" href="#3">
              <span className="icon fontawesome-envelope scnd-font-color"></span>
              Messages
            </a>
          </li>
          <li>
            <a className="header-menu-tab" href="#5">
              <span className="icon fontawesome-star-empty scnd-font-color"></span>
              Favorites
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Navigationbar;
