export default function MediaList({ selectedMedia, setSelectedMedia }: { selectedMedia: string, setSelectedMedia: any }) {
  // To-Do - retrieve info from API
  let media = [];
  for (let i = 0; i < 50; i++) {
    media.push(`Movie ${i + 1}`);
  }

  return (
    <div className="overflow-y-scroll" style={{ maxHeight: "27rem" }}>
      <ul>
        {media.map((item) => (
            <li 
                key={item} 
                onClick={() => setSelectedMedia(item)}
                className={`flex items-center p-3 border rounded-lg cursor-pointer m-1
              ${
                selectedMedia === item
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300 hover:border-blue-400 hover:bg-gray-100"
              }`}
            >
                {item}
            </li>
        ))}
      </ul>
    </div>
  );
}
