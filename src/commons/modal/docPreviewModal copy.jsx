import { useState, useEffect } from "react";

const DocumentPreviewModal = ({ isOpen, file, onClose }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (file) {
      setLoading(true);
    }
  }, [file]);

  const handleLoad = () => {
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black bg-opacity-70 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg max-w-3xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 bg-white text-black rounded-full p-1 hover:bg-gray-200 z-10"
          aria-label="Close image preview"
        >
          ❌
        </button>

        {loading && (
          <div className="flex justify-center items-center h-[80vh]">
            <div className="loader border-t-4 border-blue-500 border-solid rounded-full w-12 h-12 animate-spin"></div>
          </div>
        )}

        {file?.toLowerCase().endsWith(".pdf") ? (
          <object
            data={file}
            type="application/pdf"
            className={`w-full h-[80vh] ${loading ? "hidden" : ""}`}
            onLoad={handleLoad}
          >
            <p>
              Your browser does not support PDFs.{" "}
              <a href={file}>Download the PDF</a>.
            </p>
          </object>
        ) : (
          <img
            src={file}
            alt="Document"
            className={`w-full h-auto ${loading ? "hidden" : ""}`}
            onLoad={handleLoad}
            onError={() => setLoading(false)} // optional, to handle broken links
          />
        )}
      </div>
    </div>
  );
};

export default DocumentPreviewModal;
