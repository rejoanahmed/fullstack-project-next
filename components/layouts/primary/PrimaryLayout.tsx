import React from "react";
import Footer from "../../higherLevelComp/footer/Footer";
import NavBar from "../../higherLevelComp/navbar/NavBar";
import { mockNavBarProps } from "../../higherLevelComp/navbar/NavBar.mocks";

function PrimaryLayout({ children }) {
  return (
    <>
      <NavBar {...mockNavBarProps.base} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default PrimaryLayout;
