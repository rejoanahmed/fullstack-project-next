import { MoreHorizRounded } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";

function ProfileBar() {
  return (
    <div className="right-2 left-0 absolute bottom-4 flex justify-between items-center p-2 rounded-full hover:bg-slate-400">
      <div className="flex items-center">
        <Avatar className="w-8 h-8 mr-2">H</Avatar>
        <div className="hidden lg:block">
          <h6 className="text-sm font-bold">Rejoan ahmed</h6>
          <p className="text-slate-700 text-[12px]">@rex-code001</p>
        </div>{" "}
      </div>
      <div className="hidden lg:block">
        <MoreHorizRounded />
      </div>
    </div>
  );
}

export default ProfileBar;
