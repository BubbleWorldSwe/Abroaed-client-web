import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const DocumentPreviewModal = ({ isOpen, file, onClose }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  if (!isOpen) return null;

  const fileUrl = typeof file === "string" ? file : URL.createObjectURL(file);

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
        {file?.name?.toLowerCase()?.endsWith(".pdf") ||
        file?.toLowerCase?.()?.endsWith(".pdf") ? (
          <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js">
            <div
              style={{
                height: "80vh",
                maxWidth: "900px",
                margin: "0 auto",
              }}
            >
              <Viewer
                fileUrl={fileUrl}
                plugins={[defaultLayoutPluginInstance]}
                renderError={(error) => (
                  <div className="text-red-500 p-4">
                    Failed to load PDF: {error.message}
                  </div>
                )}
              />
            </div>
          </Worker>
        ) : (
          <img
            src={fileUrl}
            alt="Document"
            className="w-full h-auto min-h-36"
          />
        )}
      </div>
    </div>
  );
};

export default DocumentPreviewModal;
