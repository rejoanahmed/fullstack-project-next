import React, { useState } from "react";
// import styles from "./NavBar.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import NavLink from "../../lowerLevelComp/navLink/NavLink";
import Image from "next/image";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";
export interface INavItems {
  title: string;
  url: string;
}
export interface INavBar {
  brand: string;
  navItems: INavItems[];
}

const NavBar: React.FC<INavBar> = ({ brand, navItems }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((pr) => !pr);
  };
  console.log(open);
  const { route } = useRouter();

  const aciveClassName =
    "text-white bg-blue-700 md:bg-transparent md:text-blue-700";
  const notActiveClassName = "hover:text-blue-200";

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            {brand}
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-200 focus:outline-none focus:ring-0"
          aria-controls="navbar"
          aria-expanded="false"
          onClick={toggleOpen}
        >
          <span className="sr-only">open main menu</span>
          {!open ? <MenuIcon /> : <CloseIcon />}
        </button>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            {navItems.map(({ title, url }, id) => {
              const isActive = route === url;

              const cName = isActive ? aciveClassName : notActiveClassName;
              return (
                <li key={id}>
                  <Link href={url}>
                    <span className={"block py-2 px-4 rounded ".concat(cName)}>
                      {title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
