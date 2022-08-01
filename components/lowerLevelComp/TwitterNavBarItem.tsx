import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function TwitterNavBarItem({ ActiveIcon, InactiveIcon, title, url }) {
  const { route } = useRouter();
  return (
    <li className="p-2 hover:bg-slate-300 rounded-full">
      <Link href={url}>
        <div className="">
          {route === url ? (
            <ActiveState Icon={ActiveIcon} title={title} />
          ) : (
            <InactiveState Icon={InactiveIcon} title={title} />
          )}
        </div>
      </Link>
    </li>
  );
}

export default TwitterNavBarItem;

function ActiveState({ Icon, title }) {
  return (
    <div className="flex flex-row items-center">
      <Icon color="primary" />
      <span className="lg:block hidden font-bold ml-4 text-blue-600">
        {title}
      </span>
    </div>
  );
}
function InactiveState({ Icon, title }) {
  return (
    <div className="flex flex-row items-center">
      <Icon />
      <span className="lg:block hidden ml-4">{title}</span>
    </div>
  );
}
