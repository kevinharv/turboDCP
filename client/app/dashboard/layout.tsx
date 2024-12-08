import { Metadata } from "next";
import Link from "next/link";
import {
  ForwardIcon,
  HomeIcon,
  FilmIcon,
  ArchiveBoxIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "TurboDCP | Dashboard",
  description: "TurboDCP management dashboard.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  // To-Do - retrieve user info from session
  const name = "Test User";
  
  return (
    <section className="flex flex-col h-screen">
      <div className="bg-gray-700 w-full h-16 flex justify-between items-center">
        <div className="w-1/3 flex items-center">
          <Link href={"/"}>
            <span className="ml-4 text-xl flex items-center">
              <ForwardIcon className="size-6 mr-2" />
              <strong>TurboDCP</strong>
            </span>
          </Link>
        </div>

        <div className="w-1/3 flex justify-center items-center">
          {/* Additional content here? Status information? */}
        </div>

        <div className="w-1/3 flex justify-end items-center">
          <span className="mr-4">
            <strong>{name}</strong>
            
          </span>
          <button className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-900 mr-2">Logout</button>
        </div>
      </div>

      <section className="bg-gray-300 flex h-full">
        <nav className="bg-gray-800 h-full w-52 text-xl">
          <Link href={"/dashboard"}>
            <div className="p-3 hover:bg-gray-900 flex items-center">
              <HomeIcon className="size-6 mr-2" />
              Home
            </div>
          </Link>
          <Link href={"/dashboard/media"}>
            <div className="p-3 hover:bg-gray-900 flex items-center">
              <FilmIcon className="size-6 mr-2" />
              Media
            </div>
          </Link>
          <Link href={"/dashboard/packages"}>
            <div className="p-3 hover:bg-gray-900 flex items-center">
              <ArchiveBoxIcon className="size-6 mr-2" />
              Packages
            </div>
          </Link>
          <Link href={"/dashboard/keys"}>
            <div className="p-3 hover:bg-gray-900 flex items-center">
              <KeyIcon className="size-6 mr-2" />
              Keys
            </div>
          </Link>
        </nav>

        {children}
      </section>
    </section>
  );
}
