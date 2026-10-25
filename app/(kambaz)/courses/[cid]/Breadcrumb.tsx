"use client";

import { usePathname } from "next/navigation";

export default function Breadcrumb({
  course,
}: {
  course: { name: string } | undefined;
}) {
  const pathname = usePathname() ?? "";
  const segment = pathname.split("/")[3] ?? "";
  const section = segment === "table" ? "people" : segment;
  const label = section.charAt(0).toUpperCase() + section.slice(1);
  return <span>{`${course?.name ?? "Unknown course"} > ${label}`}</span>;
}
