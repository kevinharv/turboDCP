

export default function Media() {
    return (
        <>
            <div className="w-full h-1/2 mb-1 bg-gray-100 rounded-md p-4">
                <h1>Form Space</h1>
                <h2>Job Name</h2>
                <h2>Content Name</h2>
                <h2>Bool: auto-generate DCP name (specify otherwise)</h2>
                <h2>Container Ratio (default 185)</h2>
                <h2>Content Ratio (default 185)</h2>
                <h2>Type (FTR (feature) by default)</h2>
                <h2>Frame Rate</h2>
                <h2>Source (searchable list of uploaded content)</h2>
                <h2>Bool: auto-start? Schedule transcode?</h2>
            </div>

            <div className="w-full h-1/2 mt-1 bg-gray-100 rounded-md p-4">
                <h1>List Space</h1>
            </div>
        </>
    );
}