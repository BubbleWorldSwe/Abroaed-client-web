const DocumentPreviewModal = ({ isOpen, file, onClose }) => {
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
        {file?.toLowerCase().endsWith(".pdf") ? (
          <object
            data={file}
            type="application/pdf"
            className="w-full h-[80vh]"
          >
            <p>
              Your browser does not support PDFs.{" "}
              <a href={file}>Download the PDF</a>.
            </p>
          </object>
        ) : (
          <img src={file} alt="Document" className="w-full h-auto" />
        )}
      </div>
    </div>
  );
};

export default DocumentPreviewModal;
