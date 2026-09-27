import Link from "next/link";

export default function TOC() {
  return (
    <div>
      <p>Zhuoxuan Li</p>
      <p>&quot;Neither knowledge nor people are inherently noble — but knowledge is what makes people noble.&quot;</p>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/labs/lab1">Lab 1</Link>
        </li>
        <li>
          <Link href="/labs/lab2">Lab 2</Link>
        </li>
        <li>
          <Link href="/labs/lab3">Lab 3</Link>
        </li>
        <li>
          <Link href="/dashboard">Kambaz</Link>
        </li>
        <li>
          <Link href="/book/ch1" id="wd-toc-book-link">
            Chapter 1
          </Link>
        </li>
      </ul>
    </div>
  );
}