import React from "react";
import Link from "next/link";
import { INavlink } from "./navitems";
export interface INavbar {
  brand: string;
  links: INavlink[];
}

const Navbar: React.FC<INavbar> = ({ brand, links }) => {
  return (
    <nav>
      <>
        <div>
          <Link href="./">{brand}</Link>
        </div>
        <div>
          {links.map((link, id) => {
            return (
              <Link key={id} href={`/${link.url}`}>
                {link.title}
              </Link>
            );
          })}
        </div>
      </>
    </nav>
  );
};

export default Navbar;
