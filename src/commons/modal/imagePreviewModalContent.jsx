import dark from "../../assets/dark.png";
import { IMAGE_BASE_URL } from "../../constants/baseUrl";

const ImagePreviewModalContent = ({ imagePreview, imageUrl, onClose }) => {
  const previewSrc = imagePreview
    ? imagePreview
    : imageUrl
    ? `${IMAGE_BASE_URL}/${imageUrl}`
    : dark;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-[70%] max-h-[90%] bg-transparent rounded-lg overflow-hidden shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-white text-black rounded-full p-1 hover:bg-gray-200 z-10"
          aria-label="Close image preview"
        >
          ❌
        </button>
        <img
          src={previewSrc}
          alt="Preview"
          className="w-full h-auto max-h-[90vh] object-contain bg-black"
        />
      </div>
    </div>
  );
};

export default ImagePreviewModalContent;
