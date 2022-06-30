import Link from "next/link";
import React from "react";
import styles from "./NavBar.module.scss";
export interface INavItems {
  title: string;
  url: string;
}
export interface INavBar {
  brand: string;
  navItems: INavItems[];
}

const NavBar: React.FC<INavBar> = ({ brand, navItems }) => {
  return (
    <nav className={styles.nav}>
      <div>
        <Link href={"/"}>{brand}</Link>
      </div>
      <div className={styles.navitems}>
        {navItems.map((item, id) => {
          return (
            <Link key={id} href={item.url}>
              {item.title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;
