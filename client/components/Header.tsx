import { ForwardIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Header() {
  // To-Do - retrieve user info from API
  const name = "User";

  return (
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
        <button className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-900 mr-2">
          Logout
        </button>
      </div>
    </div>
  );
}
