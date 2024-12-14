import { PlayIcon, TrashIcon } from "@heroicons/react/24/outline";
import { MouseEventHandler } from "react";

export default function ListEntry({
  name,
  description,
  onAction,
  onDelete,
}: {
  name: string;
  description: string;
  onAction: MouseEventHandler<HTMLButtonElement>;
  onDelete: MouseEventHandler<HTMLButtonElement>;
}) {
    return (
      <li>
        <div className="w-full flex justify-between align-center items-center py-2 border-b-2 border-slate-300">
            <div className="w-2/12 pr-2">{name}</div>
            <div className="w-9/12 pr-2">{description}</div>
            <div className="w-1/12 flex justify-end">
                <button className="hover:bg-gray-200 p-1 rounded-lg" onClick={onAction}><PlayIcon className="size-6" /></button>
                <button className="hover:bg-gray-200 p-1 rounded-lg" onClick={onDelete}><TrashIcon className="size-6" /></button>
            </div>
        </div>
      </li>
    );
}
