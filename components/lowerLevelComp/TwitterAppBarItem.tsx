import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function TwitterAppBarItem({ ActiveIcon, InactiveIcon, url }) {
  const { route } = useRouter();
  return (
    <li>
      <Link href={url}>
        {route === url ? <ActiveIcon /> : <InactiveIcon />}
      </Link>
    </li>
  );
}

export default TwitterAppBarItem;
