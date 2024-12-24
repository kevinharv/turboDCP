"use client";

import { useState } from "react";
import MediaFormModal from "../modals/MediaFormModal";
import { ArrowPathIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

export default function MediaActions() {
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
        <button className="hover:bg-gray-200 p-1 rounded-lg" onClick={() => location.reload()}>
          <ArrowPathIcon className="size-6" />
        </button>
      </div>
    </>
  );
}
