import MediaList from "@/components/lists/MediaList";
import MediaActions from "@/components/toolbars/MediaActions";

export default async function MediaPage() {
  const res = await fetch("http://localhost:8080/media");
  const media = await res.json();

  return (
    <>
      <MediaActions />

      <div className="w-full mt-1 bg-gray-100 h-[calc(100vh-14rem)] rounded-sm p-4 flex-grow overflow-y-auto">
        <MediaList media={media} />
      </div>
    </>
  );
}
