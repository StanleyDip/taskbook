import React from "react";

import "./Menu.css";
import MenuCreate from "./MenuCreate";
import MenuItems from "./MenuItems";
const Menu = () => {
  const { searchbar } = <i class="fa fa-search"></i>;
  return (
    <div className="menu-container">
      <h2 className="menu-h2">Menu</h2>
      <MenuCreate/>
      <MenuItems/>
    </div>
  );
};

export default Menu;
