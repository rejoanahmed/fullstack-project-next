import React from "react";
import Feed from "../../higherLevelComp/Feed/Feed";
import TwitterNavBar from "../../higherLevelComp/navbar/TwitterNavBar";

function PrimaryLayout({ children }) {
  return (
    <div className="relative flex">
      <TwitterNavBar />
      <main className="flex-1">{children}</main>
      <Feed />
    </div>
  );
}

export default PrimaryLayout;
