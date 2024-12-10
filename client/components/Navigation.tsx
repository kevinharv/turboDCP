"use client";

import { HomeIcon, FilmIcon, ArchiveBoxIcon, KeyIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();

  return (
    <nav className="bg-gray-800 h-full w-52 text-xl">
      <Link href={"/dashboard"}>
        <div className={`p-3 hover:bg-gray-900 flex items-center ${path === "/dashboard" ? "bg-gray-900" : null}`}>
          <HomeIcon className="size-6 mr-2" />
          Home
        </div>
      </Link>
      <Link href={"/dashboard/media"}>
        <div className={`p-3 hover:bg-gray-900 flex items-center ${path === "/dashboard/media" ? "bg-gray-900" : null}`}>
          <FilmIcon className="size-6 mr-2" />
          Media
        </div>
      </Link>
      <Link href={"/dashboard/packages"}>
        <div className={`p-3 hover:bg-gray-900 flex items-center ${path === "/dashboard/packages" ? "bg-gray-900" : null}`}>
          <ArchiveBoxIcon className="size-6 mr-2" />
          Packages
        </div>
      </Link>
      <Link href={"/dashboard/keys"}>
        <div className={`p-3 hover:bg-gray-900 flex items-center ${path === "/dashboard/keys" ? "bg-gray-900" : null}`}>
          <KeyIcon className="size-6 mr-2" />
          Keys
        </div>
      </Link>
    </nav>
  );
}
