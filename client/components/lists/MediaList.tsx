import ListEntry from "./ListEntry";

export default function MediaList() {
  // To-Do - retrieve paginated list from API
  const list = [
    { name: "Movie 1", description: "Tom Holland eats spiders." },
    { name: "Movie 2", description: "RDJ bites his teeth on vibranium." },
    { name: "Movie 3", description: "Tom Cruise jumps out of a plane again." },
    { name: "Movie 4", description: "Mike Tyson boxes a pear." },
    { name: "Movie 7", description: "Mike Tyson boxes a pear." },
    { name: "Movie 8", description: "Mike Tyson boxes a pear." },
    { name: "Movie 9", description: "Mike Tyson boxes a pear." },
    { name: "Movie 0", description: "Mike Tyson boxes a pear." },
    { name: "Movie 41", description: "Mike Tyson boxes a pear." },
    { name: "Movie 42", description: "Mike Tyson boxes a pear." },
    { name: "Movie 43", description: "Mike Tyson boxes a pear." },
    { name: "Movie 44", description: "Mike Tyson boxes a pear." },
    { name: "Movie 45", description: "Mike Tyson boxes a pear." },
    { name: "Movie 46", description: "Mike Tyson boxes a pear." },
    { name: "Movie 47", description: "Mike Tyson boxes a pear." },
    { name: "Movie 48", description: "Mike Tyson boxes a pear." },
    { name: "Movie 49", description: "Mike Tyson boxes a pear." },
    { name: "Movie 40", description: "Mike Tyson boxes a pear." },
    { name: "Movie 4-", description: "Mike Tyson boxes a pear." },
    {
      name: "Movie 5",
      description: "Cilian Murphey accidently blows up the planet.",
    },
    {
      name: "Movie 6",
      description: "Jennifer Lawrence returns to the compound bow.",
    },
  ];

  return (
    // <>
    //   <div className="w-full flex justify-between align-center items-center py-2 border-b-2 border-slate-300">
    //     <div className="w-1/6">
    //       <strong>Title</strong>
    //     </div>
    //     <div className="w-5/6">
    //       <strong>Description</strong>
    //     </div>
    //   </div>

    //   <div className="max-h-96 overflow-y-scroll">
    //     <ul>
    //       {list.map((media) => (
    //         <ListEntry
    //           key={media.name}
    //           name={media.name}
    //           description={media.description}
    //           onAction={() => alert(`Play ${media.name}`)}
    //           onDelete={() => alert(`Delete ${media.name}`)}
    //         />
    //       ))}
    //     </ul>
    //   </div>
    // </>

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
      {list.map((media) => (
        <ListEntry
          key={media.name}
          name={media.name}
          description={media.description}
          onAction={() => alert(`Play ${media.name}`)}
          onDelete={() => alert(`Delete ${media.name}`)}
        />
      ))}
    </ul>
  </div>
</div>

  );
}
