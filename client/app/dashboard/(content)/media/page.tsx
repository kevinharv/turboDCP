"use client";

import MediaFormModal from "@/components/modals/MediaFormModal";
import { ArrowPathIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function MediaPage() {

    const [isOpen, setIsOpen] = useState(false);

    // To-Do - retrieve paginated list from API
    const mediaList = [
        { name: "Movie 1", description: "Tom Holland eats spiders." },
        { name: "Movie 2", description: "RDJ bites his teeth on vibranium." },
        { name: "Movie 3", description: "Tom Cruise jumps out of a plane again." },
        { name: "Movie 4", description: "Mike Tyson boxes a pear." },
        { name: "Movie 5", description: "Cilian Murphey accidently blows up the planet." },
        { name: "Movie 6", description: "Jennifer Lawrence returns to the compound bow." },
    ]
    
    function toggleOpen() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            {isOpen && <MediaFormModal toggleOpen={toggleOpen} />}
            <div className="w-full h-16 mb-1 bg-gray-100 rounded-sm p-4 items-center flex justify-between">
                <button className="hover:bg-gray-200 p-1 rounded-lg flex" onClick={toggleOpen}><PlusCircleIcon className="size-6 mr-1" />New</button>
                <button className="hover:bg-gray-200 p-1 rounded-lg"><ArrowPathIcon className="size-6" /></button>
            </div>

            <div className="w-full h-full mt-1 bg-gray-100 rounded-sm p-4">
                <ul>
                    {mediaList.map(media => (
                        <li key={media.name}>{media.name} | {media.description}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}