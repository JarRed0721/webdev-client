"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/app/labs/lab2/tailwind/utilities.css";
import "../kambaz.css";
import { useAccountContext } from "./AccountContext";

export default function AccountNavigation() {
  const { currentUser } = useAccountContext();
  const pathname = usePathname() ?? "";
  const links = currentUser
    ? [{ href: "/account/profile", label: "Profile", id: "wd-account-profile-link" }]
    : [
        { href: "/account/signin", label: "Sign in", id: "wd-account-signin-link" },
        { href: "/account/signup", label: "Sign up", id: "wd-account-signup-link" },
      ];
  return (
    <div id="wd-account-navigation" className="wd list-group rounded-none">
      {links.map((l) => (
        <Link
          key={l.id}
          href={l.href}
          id={l.id}
          className={
            pathname === l.href
              ? "list-group-item active border-0"
              : "list-group-item border-0 text-red-600"
          }
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
}
