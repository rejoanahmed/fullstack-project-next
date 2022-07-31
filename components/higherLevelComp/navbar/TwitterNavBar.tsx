import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { mockTwitterNavBarProps } from "./TwitterNavBar.mocks";
import TwitterIcon from "@mui/icons-material/Twitter";
import TwitterNavBarItem from "../../lowerLevelComp/TwitterNavBarItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { styled } from "@mui/material/styles";
import ProfileBar from "../../lowerLevelComp/profileBar/profileBar";
import Avatar from "@mui/material/Avatar";
const MoreStyledIcon = styled(MoreHorizIcon)`
  border: 2px solid rgb(37 99 235);
  border-radius: 20px;
`;
function TwitterNavBar() {
  const [moreClicked, setMoreClicked] = useState(false);
  return (
    <div className="w-72 shadow-2xl h-screen relative p-8">
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
            {moreClicked ? (
              <MoreStyledIcon color="primary" />
            ) : (
              <MoreHorizIcon />
            )}
            <span
              className={`ml-4 ${
                moreClicked ? "font-bold text-blue-600x  " : ""
              }`}
              onClick={() => {
                setMoreClicked(!moreClicked);
              }}
            >
              More
            </span>
          </li>
          <li className="mt-4 flex">
            <button className="flex-1 py-2 rounded-3xl bg-blue-600 text-white font-bold text-sm">
              Tweet
            </button>
          </li>
        </ul>

        <ProfileBar />
      </aside>
    </div>
  );
}

export default TwitterNavBar;
