import Link from "next/link";
import React, { useState } from "react";
import { mockTwitterNavBarProps } from "./TwitterNavBar.mocks";
import TwitterIcon from "@mui/icons-material/Twitter";
import TwitterNavBarItem from "../../lowerLevelComp/TwitterNavBarItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { styled } from "@mui/material/styles";
import ProfileBar from "../../lowerLevelComp/profileBar/profileBar";
import HistoryEduRoundedIcon from "@mui/icons-material/HistoryEduRounded";
import TwitterAppBarItem from "../../lowerLevelComp/TwitterAppBarItem";
const MoreStyledIcon = styled(MoreHorizIcon)`
  border: 2px solid rgb(37 99 235);
  border-radius: 20px;
`;
function TwitterNavBar() {
  const [moreClicked, setMoreClicked] = useState(false);
  return (
    <div className="lg:w-52 sm:w-fit sm:relative px-2 fixed bottom-0 right-0 left-0">
      <aside className="hidden h-screen sm:block sticky top-0">
        <div className="p-2 hover:bg-slate-300 rounded-full w-fit">
          <TwitterIcon color="primary" />
        </div>
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
          <li className="p-2 hover:bg-slate-300 rounded-full flex">
            {moreClicked ? (
              <MoreStyledIcon color="primary" />
            ) : (
              <MoreHorizIcon />
            )}
            <span
              className={`hidden lg:block ml-4 ${
                moreClicked ? "font-bold text-blue-600x  " : ""
              }`}
              onClick={() => {
                setMoreClicked(!moreClicked);
              }}
            >
              More
            </span>
          </li>
          <li className="lg:mt-4 flex">
            <button className="hidden lg:block flex-1 py-2 rounded-3xl bg-blue-600 text-white font-bold text-sm">
              Tweet
            </button>
            <div className="lg:hidden p-2">
              <HistoryEduRoundedIcon />
            </div>
          </li>
        </ul>

        <ProfileBar />
      </aside>
      <div className="sm:hidden">
        <ul className="flex justify-around items-center">
          {mockTwitterNavBarProps.AppBar.map(
            ({ ActiveIcon, InactiveIcon, url }, id) => (
              <TwitterAppBarItem
                ActiveIcon={ActiveIcon}
                InactiveIcon={InactiveIcon}
                url={url}
                key={id}
              />
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default TwitterNavBar;
