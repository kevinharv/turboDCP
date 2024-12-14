"use client";

import ListEntry from "@/components/lists/ListEntry";
import MediaFormModal from "@/components/modals/MediaFormModal";
import MediaList from "@/components/lists/MediaList";
import { ArrowPathIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function MediaPage() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {isOpen && <MediaFormModal toggleOpen={toggleOpen} />}
      <div className="w-full h-16 mb-1 bg-gray-100 rounded-sm p-4 items-center flex justify-between">
        <button
          className="hover:bg-gray-200 p-1 rounded-lg flex"
          onClick={toggleOpen}
        >
          <PlusCircleIcon className="size-6 mr-1" />
          New
        </button>
        <button className="hover:bg-gray-200 p-1 rounded-lg">
          <ArrowPathIcon className="size-6" />
        </button>
      </div>

      <div className="w-full mt-1 bg-gray-100 h-[calc(100vh-14rem)] rounded-sm p-4 flex-grow overflow-y-auto">
        <MediaList />
      </div>
    </>
  );
}
