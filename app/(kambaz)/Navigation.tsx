"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegCircleUser, FaCircleQuestion } from "react-icons/fa6";
import { FaInbox } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import "@/app/labs/lab2/tailwind/utilities.css";

function NavTile({
  href,
  id,
  active,
  icon,
  children,
}: {
  href: string;
  id: string;
  active: boolean;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      id={id}
      className={`block py-3 text-center text-sm no-underline ${
        active ? "bg-white text-red-600" : "bg-black text-white"
      }`}
    >
      {icon}
      <br />
      {children}
    </Link>
  );
}

export default function KambazNavigation() {
  const pathname = usePathname();
  const is = (prefix: string) => pathname.startsWith(prefix);
  const idle = "inline-block text-3xl text-red-500";
  const active = "inline-block text-3xl text-red-600";
  return (
    <nav
      id="wd-kambaz-navigation"
      className="fixed bottom-0 top-0 z-20 hidden w-[120px] bg-black md:block"
    >
      <a
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        rel="noreferrer"
        className="block bg-black py-3 text-center no-underline"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/NEU.png"
          alt="Northeastern"
          width={64}
          height={64}
          className="mx-auto"
        />
      </a>
      <NavTile
        href="/account"
        id="wd-account-link"
        active={is("/account")}
        icon={
          <FaRegCircleUser
            className={`inline-block text-3xl ${is("/account") ? "text-red-600" : "text-white"}`}
          />
        }
      >
        Account
      </NavTile>
      <NavTile
        href="/dashboard"
        id="wd-dashboard-link"
        active={is("/dashboard")}
        icon={
          <AiOutlineDashboard
            className={is("/dashboard") ? active : idle}
          />
        }
      >
        Dashboard
      </NavTile>
      {/* On your own (2.4.1): remaining links */}
      <NavTile
        href="/dashboard"
        id="wd-course-link"
        active={is("/courses")}
        icon={<LiaBookSolid className={is("/courses") ? active : idle} />}
      >
        Courses
      </NavTile>
      <NavTile
        href="/calendar"
        id="wd-calendar-link"
        active={is("/calendar")}
        icon={<IoCalendarOutline className={is("/calendar") ? active : idle} />}
      >
        Calendar
      </NavTile>
      <NavTile
        href="/inbox"
        id="wd-inbox-link"
        active={is("/inbox")}
        icon={<FaInbox className={is("/inbox") ? active : idle} />}
      >
        Inbox
      </NavTile>
      <NavTile
        href="/labs"
        id="wd-labs-link"
        active={is("/labs")}
        icon={<LiaCogSolid className={is("/labs") ? active : idle} />}
      >
        Labs
      </NavTile>
      {/* With AI (2.4.1) */}
      <NavTile
        href="/labs"
        id="wd-ai-nav-help"
        active={false}
        icon={<FaCircleQuestion className={idle} />}
      >
        Help
      </NavTile>
    </nav>
  );
}
