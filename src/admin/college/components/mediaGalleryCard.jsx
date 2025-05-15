import { useSelector } from "react-redux";
import dark from "../../../assets/dark.png"; // fallback image
import { IMAGE_BASE_URL } from "../../../constants/baseUrl";
import DeleteConfirmationModal from "../../../commons/modal/deleteConfirmationModal";
import ImagePreviewModalContent from "../../../commons/modal/imagePreviewModalContent"; // import your preview modal
import { useState } from "react";

function MediaGalleryCard({ onDeleteImage }) {
  const collegeDetails = useSelector((state) => state.colleges.selectedCollege);
  const collegeImages = collegeDetails?.images || [];

  const galleryImages = collegeImages.filter((img) => img.type === "gallery");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null); // track which image to delete

  // New state for preview modal
  const [previewImage, setPreviewImage] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleDeleteConfirm = () => {
    if (deleteId) {
      onDeleteImage(deleteId); // call the passed delete function
      setDeleteId(null); // clear after delete
      setIsModalOpen(false); // close modal
    }
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex space-x-5" style={{ maxWidth: "60rem" }}>
        {galleryImages.length > 0 ? (
          galleryImages.map((img) => (
            <div
              key={img._id}
              className="w-96 relative flex-shrink-0"
              style={{ flex: "0 0 auto" }}
            >
              {/* Image */}
              <img
                className="w-full h-60 object-cover rounded-lg cursor-pointer"
                src={img.ImageUrl ? `${IMAGE_BASE_URL}/${img.ImageUrl}` : dark}
                alt="Gallery"
                onClick={() => {
                  setPreviewImage(
                    img.ImageUrl ? `${IMAGE_BASE_URL}/${img.ImageUrl}` : dark
                  );
                  setIsPreviewOpen(true);
                }}
              />
              {/* Delete Button */}
              <div className="absolute top-2 right-2">
                <button
                  type="button"
                  onClick={() => {
                    setDeleteId(img._id); // set which image to delete
                    setIsModalOpen(true); // open modal
                  }}
                  className="items-center justify-center w-10 h-10 font-medium hover:opacity-60 group focus:outline-none"
                >
                  <svg
                    className="text-white opacity-80 w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-gray-500">No images found</div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setDeleteId(null);
        }}
        heading="Delete!"
        onDelete={handleDeleteConfirm}
      />

      {/* Image Preview Modal */}
      {isPreviewOpen && (
        <ImagePreviewModalContent
          imagePreview={previewImage}
          onClose={() => setIsPreviewOpen(false)}
        />
      )}
    </div>
  );
}

export default MediaGalleryCard;
