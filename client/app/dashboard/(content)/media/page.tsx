"use client";

import PackageFormModal from "@/components/PackageFormModal";
import { ArrowPathIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Media() {

    const [isOpen, setIsOpen] = useState(false);
    
    function toggleOpen() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            {isOpen && <PackageFormModal toggleOpen={toggleOpen} />}
            <div className="w-full h-16 mb-1 bg-gray-100 rounded-md p-4 items-center flex justify-between">
                <button className="hover:bg-gray-200 p-1 rounded-lg flex" onClick={toggleOpen}><PlusCircleIcon className="size-6 mr-1" />New</button>
                <button className="hover:bg-gray-200 p-1 rounded-lg"><ArrowPathIcon className="size-6" /></button>
            </div>

            <div className="w-full h-full mt-1 bg-gray-100 rounded-md p-4">
                <h1>List Space</h1>
            </div>
        </>
    );
}