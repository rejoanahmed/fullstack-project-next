import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { mockTwitterNavBarProps } from "./TwitterNavBar.mocks";
import TwitterIcon from "@mui/icons-material/Twitter";
import TwitterNavBarItem from "../../lowerLevelComp/TwitterNavBarItem";
function TwitterNavBar() {
  return (
    <div className="fixed shadow-2xl h-screen realtive p-8">
      <aside>
        <TwitterIcon color="primary" fontSize="large" />
        <ul className="flex flex-col">
          {mockTwitterNavBarProps.base.map(
            ({ ActiveIcon, InactiveIcon, title, url }, id) => (
              <TwitterNavBarItem
                key={id}
                ActiveIcon={ActiveIcon}
                InactiveIcon={InactiveIcon}
                title={title}
                url={url}
              />
            )
          )}
        </ul>
      </aside>
    </div>
  );
}

export default TwitterNavBar;
