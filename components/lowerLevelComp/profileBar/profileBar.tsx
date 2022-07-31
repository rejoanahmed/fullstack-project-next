import { MoreHorizRounded } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";

function ProfileBar() {
  return (
    <div className="absolute bottom-4 flex justify-between items-center right-8 left-8 p-1 rounded-full hover:bg-slate-500">
      <div className="flex items-center">
        <Avatar className="w-8 h-8 mr-2">H</Avatar>
        <div>
          <h6>Rejoan ahmed</h6>
          <p className="text-slate-700 text-sm">@rex-code001</p>
        </div>{" "}
      </div>
      <div>
        <MoreHorizRounded />
      </div>
    </div>
  );
}

export default ProfileBar;
