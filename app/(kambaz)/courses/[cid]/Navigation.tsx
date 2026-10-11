"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/app/labs/lab2/tailwind/utilities.css";
import "../../kambaz.css";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";
  const home = `/courses/${cid}/home`;
  const assignments = `/courses/${cid}/assignments`;
  const links = [
    { label: "Modules", path: "modules", id: "wd-course-modules-link" },
    { label: "Piazza", path: "piazza", id: "wd-course-piazza-link" },
    { label: "Zoom", path: "zoom", id: "wd-course-zoom-link" },
  ];
  const trailing = [
    { label: "Quizzes", path: "quizzes", id: "wd-course-quizzes-link" },
    { label: "Grades", path: "grades", id: "wd-course-grades-link" },
    { label: "People", path: "people/table", id: "wd-course-people-link" },
  ];
  const isActive = (base: string) =>
    pathname === base || pathname.startsWith(base + "/");
  const cls = (active: boolean) =>
    active
      ? "list-group-item active border-0"
      : "list-group-item border-0 text-red-600";
  return (
    <div id="wd-courses-navigation" className="wd list-group rounded-none">
      <Link href={home} id="wd-course-home-link" className={cls(pathname === home)}>
        Home
      </Link>
      {/* On your own (2.4.3): the remaining links as list-group items */}
      {links.map((l) => {
        const href = `/courses/${cid}/${l.path}`;
        return (
          <Link key={l.id} href={href} id={l.id} className={cls(isActive(href))}>
            {l.label}
          </Link>
        );
      })}
      <Link
        href={assignments}
        id="wd-course-assignments-link"
        className={cls(isActive(assignments))}
      >
        Assignments
      </Link>
      {trailing.map((l) => {
        const href = `/courses/${cid}/${l.path}`;
        // People lives at people/table; any path under people/ is active
        const base = `/courses/${cid}/${l.path.split("/")[0]}`;
        return (
          <Link key={l.id} href={href} id={l.id} className={cls(isActive(base))}>
            {l.label}
          </Link>
        );
      })}
      {/* With AI (2.4.3) */}
      <Link
        href={home}
        id="wd-course-ai-link"
        className="list-group-item border-0 text-red-600"
      >
        Sample
      </Link>
    </div>
  );
}
