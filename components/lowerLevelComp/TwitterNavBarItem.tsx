import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function TwitterNavBarItem({ ActiveIcon, InactiveIcon, title, url }) {
  const { route } = useRouter();
  return (
    <li className="mt-4">
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
      <span className="font-bold ml-4 text-blue-600">{title}</span>
    </div>
  );
}
function InactiveState({ Icon, title }) {
  return (
    <div className="flex flex-row items-center">
      <Icon />
      <span className="ml-4">{title}</span>
    </div>
  );
}
