"use client";

import ListEntry from "./ListEntry";

export default function MediaList({media}: {media:any}) {

  async function deleteMedia(id: number) {
    try {
      const response = await fetch(`http://localhost:8080/media/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const error = await response.json();
        alert(`Error: ${error.error}`);
      }
    } catch (error) {
      alert("An error occurred while deleting the media.");
    }
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="w-full flex justify-between items-center py-2 border-b-2 border-slate-300">
        <div className="w-1/6">
          <strong>Title</strong>
        </div>
        <div className="w-5/6"> 
          <strong>Description</strong>
        </div>
      </div>

      {/* Scrollable List */}
      <div className="flex-1 overflow-y-scroll">
        <ul className="mr-2">
          {media.map((media: any) => (
            <ListEntry
              key={media.id}
              name={media.name}
              description={media.description}
              onAction={() => alert(`Play ${media.id}`)}
              onDelete={() => deleteMedia(media.id)}
              isEmpty={media.filepath ? false : true}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
