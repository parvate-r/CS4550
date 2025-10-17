// src/app/Kambaz/NavigationSidebar.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function NavigationSidebar() {
  const pathname = usePathname() || "";
  const links = [
    { label: "Account", path: "/Kambaz/Account", icon: FaRegCircleUser },
    { label: "Dashboard", path: "/Kambaz/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/Kambaz/Dashboard", icon: LiaBookSolid }, // per book, Courses routes to Dashboard here
    { label: "Calendar", path: "/Kambaz/Calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/Kambaz/Inbox", icon: FaInbox },
    { label: "Labs", path: "/Labs", icon: LiaCogSolid },
  ];

  return (
    <ListGroup
      id="wd-kambaz-navigation"
      style={{ width: 120 }}
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <ListGroupItem
        className="bg-black border-0 text-center"
        as="a"
        target="_blank"
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
      >
        <img src="/images/NEU.png" width={75} alt="NEU" />
      </ListGroupItem>

      {links.map((l) => {
        const isActive = pathname?.startsWith(l.path) || false;
        const itemClass = `text-center border-0 ${
          isActive ? "bg-white text-danger" : "bg-black text-white"
        }`;
        const Icon = l.icon;
        // Account icon should be white except when active per spec
        const iconColor = isActive ? "text-danger" : l.label === "Account" ? "text-white" : "text-danger";
        return (
          <ListGroupItem as={Link} href={l.path} key={l.path} className={itemClass}>
            <Icon className={`fs-1 ${iconColor}`} />
            <br />
            <span style={{ fontSize: 12 }}>{l.label}</span>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
}
