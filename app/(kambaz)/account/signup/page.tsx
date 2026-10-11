import Link from "next/link";
import "@/app/labs/lab2/tailwind/utilities.css";

const input = "mb-2 w-full rounded border border-neutral-300 px-3 py-2";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Sign up</h1>
      <input
        placeholder="username"
        className={`wd-username ${input}`}
        defaultValue="ada"
      />
      <input
        placeholder="password"
        type="password"
        className={`wd-password ${input}`}
        defaultValue="123"
      />
      <input
        placeholder="verify password"
        type="password"
        className={`wd-password-verify ${input}`}
      />
      <Link
        href="/account/profile"
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white no-underline"
      >
        Sign up
      </Link>
      <Link href="/account/signin" className="text-blue-600">
        Sign in
      </Link>
    </div>
  );
}
