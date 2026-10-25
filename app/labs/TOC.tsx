"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/labs", id: "wd-home-link", label: "Home", match: (p: string) => p === "/labs" },
  { href: "/labs/lab1", id: "wd-lab1-link", label: "Lab 1", match: (p: string) => p.startsWith("/labs/lab1") },
  { href: "/labs/lab2", id: "wd-lab2-link", label: "Lab 2", match: (p: string) => p.startsWith("/labs/lab2") },
  { href: "/labs/lab3", id: "wd-lab3-link", label: "Lab 3", match: (p: string) => p.startsWith("/labs/lab3") },
  { href: "/dashboard", id: "wd-kambaz-link", label: "Kambaz", match: () => false },
] as const;

const activeStyle = {
  backgroundColor: "#2563eb",
  color: "white",
  borderRadius: "4px",
  padding: "2px 8px",
  textDecoration: "none",
};

export default function TOC() {
  const pathname = usePathname() ?? "";
  return (
    <div id="wd-toc">
      <p id="wd-student-name">Zhuoxuan Li</p>
      <p>
        <a id="wd-github" href="https://github.com/JarRed0721/webdev-client">
          GitHub Repository
        </a>
      </p>
      <p>&quot;Neither knowledge nor people are inherently noble — but knowledge is what makes people noble.&quot;</p>
      <ul>
        {LINKS.map((link) => {
          const active = link.match(pathname);
          return (
            <li key={link.id}>
              <Link
                href={link.href}
                id={link.id}
                style={active ? activeStyle : undefined}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
