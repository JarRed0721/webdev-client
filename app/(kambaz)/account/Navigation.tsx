"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/app/labs/lab2/tailwind/utilities.css";
import "../kambaz.css";

export default function AccountNavigation() {
  const pathname = usePathname() ?? "";
  const links = [
    { href: "/account/signin", label: "Signin", id: "wd-account-signin-link" },
    { href: "/account/signup", label: "Signup", id: "wd-account-signup-link" },
    { href: "/account/profile", label: "Profile", id: "wd-account-profile-link" },
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
