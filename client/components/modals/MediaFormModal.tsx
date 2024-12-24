import React, { useState } from "react";

export default function PackageFormModal({ toggleOpen }: { toggleOpen: any }) {
  const [contentName, setContentName] = useState("");
  const [contentDescription, setContentDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const formSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!file) {
      alert("Please upload a file.");
      return;
    }

    let createdMedia = null;

    try {
      const response = await fetch("http://localhost:8080/media", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: contentName,
          description: contentDescription
        })
      });

      if (!response.ok) {
        const error = await response.json();
        alert(`Error: ${error.error}`);
      } else {
        createdMedia = await response.json()
      }
    } catch (error) {
      alert("An error occurred while uploading the media.");
    }

    const fileForm = new FormData();
    fileForm.append("file", file);

    try {
      const response = await fetch(`http://localhost:8080/media/${createdMedia.id}/upload`, {
        method: "POST",
        body: fileForm,
      });

      if (response.ok) {
        alert("Media successfully uploaded!");
        toggleOpen();
      } else {
        const error = await response.json();
        alert(`Error: ${error.error}`);
      }
    } catch (error) {
      alert("An error occurred while uploading the media.");
    }

  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded shadow-lg p-6">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-lg font-semibold">Add Media</h2>
        </div>

        {/* Modal Content */}
        <form className="mt-4 flex flex-col" onSubmit={formSubmit}>
          <div className="mb-4">
            <label
              htmlFor="contentName"
              className="block text-sm font-medium text-gray-700"
            >
              Content Name
            </label>
            <input
              type="text"
              id="contentName"
              value={contentName}
              onChange={(e) => setContentName(e.target.value)}
              required
              className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="contentDescription"
              className="block text-sm font-medium text-gray-700"
            >
              Content Description
            </label>
            <input
              type="text"
              id="contentDescription"
              value={contentDescription}
              onChange={(e) => setContentDescription(e.target.value)}
              required
              className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="file"
              className="block text-sm font-medium text-gray-700"
            >
              File Upload
            </label>
            <input
              type="file"
              id="file"
              accept="video/*"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              required
              className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm"
            />
          </div>

          {/* Modal Actions */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={toggleOpen}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
