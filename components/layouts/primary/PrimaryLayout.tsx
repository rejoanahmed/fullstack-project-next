import React from "react";
import Feed from "../../higherLevelComp/Feed/Feed";
import TwitterNavBar from "../../higherLevelComp/navbar/TwitterNavBar";

function PrimaryLayout({ children }) {
  return (
    <div className="relative flex justify-center">
      <TwitterNavBar />
      <main className="max-w-xl">{children}</main>
      <Feed />
    </div>
  );
}

export default PrimaryLayout;
