import React, { useState } from "react";
// import styles from "./NavBar.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import NavLink from "../../lowerLevelComp/navLink/NavLink";
export interface INavItems {
  title: string;
  url: string;
}
export interface INavBar {
  brand: string;
  navItems: INavItems[];
}

const NavBar: React.FC<INavBar> = ({ brand, navItems }) => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu((pr) => !pr);
  };

  return (
    <header>
      <div>
        <NavLink href={"/"}>{brand}</NavLink>
      </div>
      <nav>
        {navItems.map((item, id) => {
          return (
            <div key={id}>
              <NavLink href={item.url}>{item.title}</NavLink>
            </div>
          );
        })}
      </nav>
      <div>
        <button onClick={toggleMenu}>
          <MenuIcon />
        </button>
        <button onClick={toggleMenu}>
          <MenuOpenIcon />
        </button>
      </div>
    </header>
  );
};

export default NavBar;
