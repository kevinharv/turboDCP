import { useState } from "react";
import MediaList from "./MediaList";

export default function PackageFormModal({ toggleOpen }: { toggleOpen: any }) {
  const [containerRatio, setContainerRatio] = useState(0);
  const [contentRatio, setContentRatio] = useState(0);
  const [contentType, setContentType] = useState("");
  const [selectedMedia, setSelectedMedia] = useState("");
  
  const containerRatios = [
    { value: 119, label: "119" },
    { value: 133, label: "133" },
    { value: 137, label: "137" },
    { value: 166, label: "166" },
    { value: 178, label: "178" },
    { value: 185, label: "185 (default)" },
    { value: 239, label: "239" },
  ];
  const contentRatios = [
    { value: 119, label: "119" },
    { value: 133, label: "133" },
    { value: 137, label: "137" },
    { value: 166, label: "166" },
    { value: 178, label: "178" },
    { value: 185, label: "185 (default)" },
    { value: 239, label: "239" },
  ];
  const contentTypes = [
    { value: "FTR", label: "Feature" },
    { value: "SHR", label: "Short" },
    { value: "TLR", label: "Trailer" },
    { value: "TST", label: "Test" },
    { value: "XSN", label: "Transitional" },
    { value: "RTG", label: "Rating" },
    { value: "TSR", label: "Teaser" },
    { value: "POL", label: "Policy" },
    { value: "PSA", label: "Public Service Announcement" },
    { value: "ADV", label: "Advertisement" },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-6xl rounded shadow-lg p-6">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-lg font-semibold">Create Package</h2>
        </div>

        {/* Modal Content */}
        <form className="mt-4 flex">
          <div className="w-1/2">
            <div className="mb-4">
              <label
                htmlFor="jobName"
                className="block text-sm font-medium text-gray-700"
              >
                Job Name
              </label>
              <input
                type="text"
                id="jobName"
                required
                className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm"
              />
            </div>

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
                required
                className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm"
              />
              <h2>Toggle Default - if true, disable content name input</h2>
            </div>

            <div className="mb-4">
              <label
                htmlFor="dropdown"
                className="block text-sm font-medium text-gray-700"
              >
                Container Ratio
              </label>
              <select
                id="dropdown"
                required
                value={containerRatio}
                onChange={(e) => setContainerRatio(parseInt(e.target.value))}
                className="w-full mt-1 px-3 py-2 bg-white border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" disabled>
                  -- Choose a ratio --
                </option>
                {containerRatios.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="dropdown"
                className="block text-sm font-medium text-gray-700"
              >
                Content Ratio
              </label>
              <select
                id="dropdown"
                required
                value={contentRatio}
                onChange={(e) => setContentRatio(parseInt(e.target.value))}
                className="w-full mt-1 px-3 py-2 bg-white border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" disabled>
                  -- Choose a ratio --
                </option>
                {contentRatios.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="dropdown"
                className="block text-sm font-medium text-gray-700"
              >
                Content Type
              </label>
              <select
                id="dropdown"
                required
                value={contentType}
                onChange={(e) => setContentType(e.target.value)}
                className="w-full mt-1 px-3 py-2 bg-white border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" disabled>
                  -- Choose a type --
                </option>
                {contentTypes.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="frameRate"
                className="block text-sm font-medium text-gray-700"
              >
                Frame Rate
              </label>
              <input
                type="number"
                id="frameRate"
                defaultValue={24}
                className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm"
              />
            </div>
          </div>

          <div className="w-1/2 ml-4 flex flex-col justify-between">
            <MediaList selectedMedia={selectedMedia} setSelectedMedia={setSelectedMedia} />

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
          </div>
        </form>
      </div>
    </div>
  );
}
