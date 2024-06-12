import Link from "next/link";
import { auth } from "@/app/_lib/auth";

export default async function Navigation() {
  const session = await auth();
  console.log(session);
  return (
    <nav className="z-10 text-xl md:text-xl">
      <ul className="flex gap-8 text-sm  md:text-xl md:gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="flex items-center gap-4 hover:text-accent-400 transition-colors"
            >
              <img
                className="h-8 rounded-full"
                alt={session.user.name}
                src={session.user.image}
                referrerPolicy="no-referrer"
              />
              <span className="hidden sm:block">Guest area</span>
            </Link>
          ) : (
            <Link href="/account" className=" transition-colors">
              <div className=" bg-accent-500 md:hidden  px-3 py-2 text-primary-800 text-[16px]  font-semibold hover:bg-accent-600 transition-all   rounded-[10px]">
                Sign In
              </div>
              <div className=" bg-accent-500 hidden md:block px-4 py-4 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all  rounded-[10px]">
                Sign In / Sign Up
              </div>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
