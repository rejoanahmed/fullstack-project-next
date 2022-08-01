import Link from "next/link";
import React, { useState } from "react";
import { mockTwitterNavBarProps } from "./TwitterNavBar.mocks";
import TwitterIcon from "@mui/icons-material/Twitter";
import TwitterNavBarItem from "../../lowerLevelComp/TwitterNavBarItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { styled } from "@mui/material/styles";
import ProfileBar from "../../lowerLevelComp/profileBar/profileBar";
import HistoryEduRoundedIcon from "@mui/icons-material/HistoryEduRounded";
const MoreStyledIcon = styled(MoreHorizIcon)`
  border: 2px solid rgb(37 99 235);
  border-radius: 20px;
`;
function TwitterNavBar() {
  const [moreClicked, setMoreClicked] = useState(false);
  return (
    <div className="lg:w-56 sm:w-fit sm:h-screen sm:relative fixed bottom-0 left-0 right-0 p-2">
      <aside className="hidden sm:block">
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
          {["home", "explore", "notif", "messages"].map((tab) => (
            <li key={tab}>{tab}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TwitterNavBar;
