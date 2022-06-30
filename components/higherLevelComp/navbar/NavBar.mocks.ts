import { INavBar } from "./NavBar";

const base: INavBar = {
  brand: "IHSB",
  navItems: [
    {
      title: "Home",
      url: "./",
    },
    {
      title: "About",
      url: "./about",
    },
    {
      title: "Courses",
      url: "./courses",
    },
    {
      title: "Contact",
      url: "./contact",
    },
  ],
};

export const mockNavBarProps = {
  base,
};
