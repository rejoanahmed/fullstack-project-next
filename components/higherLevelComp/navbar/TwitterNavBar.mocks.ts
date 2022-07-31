import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TagRoundedIcon from "@mui/icons-material/TagRounded";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FactCheckRoundedIcon from "@mui/icons-material/FactCheckRounded";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { ReactNode } from "react";
interface props {
  title: string;
  url: string;
  ActiveIcon: unknown;
  InactiveIcon: unknown;
}

const base: props[] = [
  {
    title: "Home",
    url: "/",
    ActiveIcon: HomeRoundedIcon,
    InactiveIcon: HomeOutlinedIcon,
  },
  {
    title: "Explore",
    url: "/explore",
    ActiveIcon: TagRoundedIcon,
    InactiveIcon: TagOutlinedIcon,
  },
  {
    title: "Notifications",
    url: "/notifications",
    ActiveIcon: NotificationsRoundedIcon,
    InactiveIcon: NotificationsNoneOutlinedIcon,
  },
  {
    title: "Messages",
    url: "/messages",
    ActiveIcon: EmailRoundedIcon,
    InactiveIcon: EmailOutlinedIcon,
  },
  {
    title: "Bookmarks",
    url: "/bookmarks",
    ActiveIcon: BookmarkRoundedIcon,
    InactiveIcon: BookmarkBorderOutlinedIcon,
  },
  {
    title: "Lists",
    url: "/lists",
    ActiveIcon: FactCheckRoundedIcon,
    InactiveIcon: FactCheckOutlinedIcon,
  },
  {
    title: "Profile",
    url: "/profile",
    ActiveIcon: PersonRoundedIcon,
    InactiveIcon: PersonOutlinedIcon,
  },
];

export const mockTwitterNavBarProps = {
  base,
};
