import { INavBar } from "./NavBar";

const base: INavBar = {
  brand: "IHSB",
  navItems: [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Services",
      url: "/services",
    },
    {
      title: "Pricing",
      url: "/pricing",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ],
};

export const mockNavBarProps = {
  base,
};
