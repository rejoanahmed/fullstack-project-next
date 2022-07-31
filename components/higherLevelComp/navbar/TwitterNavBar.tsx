import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { mockTwitterNavBarProps } from "./TwitterNavBar.mocks";
import TwitterIcon from "@mui/icons-material/Twitter";
import TwitterNavBarItem from "../../lowerLevelComp/TwitterNavBarItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { styled } from "@mui/material/styles";
const MoreStyledIcon = styled(MoreHorizIcon)`
  border: 2px solid black;
  border-radius: 20px;
`;
function TwitterNavBar() {
  const [moreClicked, setMoreClicked] = useState(false);
  return (
    <div className="w-64 shadow-2xl h-screen realtive p-8">
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
          <li className="flex flex-row items-center mt-4">
            <MoreStyledIcon />
            <span
              className={`ml-4 ${moreClicked ? "font-bold" : ""}`}
              onClick={() => {
                setMoreClicked(!moreClicked);
              }}
            >
              More
            </span>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default TwitterNavBar;
