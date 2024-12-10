export default function PackageFormModal({ toggleOpen }: { toggleOpen: any }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded shadow-lg p-6">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-lg font-semibold">Add Media</h2>
        </div>

        {/* Modal Content */}
        <form className="mt-4 flex flex-col" onSubmit={(e) => alert(e.target)}>
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
          </div>

          <div className="mb-4">
            <label
              htmlFor="fileUpload"
              className="block text-sm font-medium text-gray-700"
            >
              File Upload
            </label>
            <input
              type="file"
              id="fileUpload"
              accept="video/*"
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
