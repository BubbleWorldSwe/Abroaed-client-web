import {
  RPConfig,
  RPDefaultLayout,
  RPPages,
  RPProvider,
  RPTheme,
} from "@pdf-viewer/react";

const DocumentPreviewModal = ({ isOpen, file, onClose }) => {
  if (!isOpen) return null;

  console.log(file);

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
        {file?.toLowerCase().endsWith(".pdf") ? (
          <RPConfig>
            <RPProvider
              // src={file}
              src="https://cdn.codewithmosh.com/image/upload/v1721763853/guides/web-roadmap.pdf"
            >
              <RPTheme>
                <RPDefaultLayout style={{ height: "660px" }}>
                  <RPPages />
                </RPDefaultLayout>
              </RPTheme>
            </RPProvider>
          </RPConfig>
        ) : (
          <img src={file} alt="Document" className="w-full h-auto" />
        )}
      </div>
    </div>
  );
};

export default DocumentPreviewModal;
