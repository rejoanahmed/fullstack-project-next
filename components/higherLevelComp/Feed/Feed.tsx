import { useRouter } from "next/router";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
function Feed() {
  const { route } = useRouter();
  return (
    <div
      className={`w-80 flex-shrink-0 md:${
        route === "messages" ? "hidden" : "block"
      } hidden`}
    >
      <div className="flex px-2 py-1">
        <div>
          <SearchIcon />
        </div>
        <input type="text" />
      </div>
    </div>
  );
}

export default Feed;
