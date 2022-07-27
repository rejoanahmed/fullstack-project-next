import { INavBar } from "./NavBar";

const base: INavBar = {
  brand: "CUHK",
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
      title: "Colleges",
      url: "/colleges",
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
