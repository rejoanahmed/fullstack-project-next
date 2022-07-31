import React from "react";
import TwitterNavBar from "../../higherLevelComp/navbar/TwitterNavBar";

function PrimaryLayout({ children }) {
  return (
    <>
      <TwitterNavBar />
      <main>{children}</main>
    </>
  );
}

export default PrimaryLayout;
