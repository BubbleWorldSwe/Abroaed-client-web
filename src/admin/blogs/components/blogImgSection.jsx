import pencil from "../../../assets/pencil.png";
import { useState } from "react";
import dark from "../../../assets/dark.png";
import { useSelector } from "react-redux";
import { Trash2 } from "lucide-react";
import { toast } from "react-toastify";
import DeleteConfirmationModal from "../../../commons/modal/deleteConfirmationModal";
import { IMAGE_BASE_URL } from "../../../constants/baseUrl";

const BlogImageSection = ({ onUploadImage }) => {
  const blogDetails = useSelector((state) => state?.blogs?.selectedBlog);

  const { isWriteAccess } = useSelector((state) => state.auth);

  const [openMadal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState(null);

  const [imagePreview, setImagePreview] = useState(null);
  const [fileImage, setFileImage] = useState(null);

  const closeModal = () => {
    setOpenModal(false);
    setModalType(null);
    setImagePreview(null);
    setFileImage(null);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setFileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setFileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    try {
      console.log("handleSubmit");
      if (!fileImage) {
        toast.error("Please select an image to upload");
        return;
      }

      const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
      const maxSize = 1000 * 1024; // 500 KB

      if (!allowedTypes.includes(fileImage.type)) {
        toast.error("Only JPG and PNG images are allowed");
        return;
      }

      if (fileImage.size > maxSize) {
        toast.error("Image size must be less than 1MB");
        return;
      }

      onUploadImage(fileImage); // send file to parent
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col overflow-hidden">
      <div className="relative w-full h-48 bg-gradient-to-r from-yellow-200 to-blue-500 cursor-pointer overflow-hidden">
        {blogDetails?.image && (
          <img
            src={`${IMAGE_BASE_URL}/${blogDetails?.image}`}
            alt="Blog"
            className="w-full h-full object-cover"
          />
        )}

        {isWriteAccess && (
          <button
            type="button"
            className="absolute bottom-5 right-5 text-green-600 text-lg border-green-500 hover:border-2 font-semibold rounded-lg px-4 py-2 text-center inline-flex items-center bg-white border-2"
            onClick={(e) => {
              e.preventDefault();
              setModalType("edit");
              setOpenModal(true);
            }}
          >
            <img src={pencil} alt="Edit" className="w-4 h-4 mr-2" />
            {blogDetails.image ? "Edit Image" : "Add Image"}
          </button>
        )}
      </div>

      {openMadal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-1/2 relative">
            <button
              className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4">
              {modalType === "add" ? "Upload Image" : "Update Image"}
            </h2>

            <div className="w-full relative mb-4">
              <img
                className="w-full h-60 object-cover"
                //src={imagePreview || dark}
                src={
                  imagePreview
                    ? imagePreview
                    : blogDetails?.image
                    ? `${IMAGE_BASE_URL}/${blogDetails.image}`
                    : dark
                }
                alt="Current"
              />
            </div>

            <div
              className="flex items-center justify-center w-full"
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
            >
              <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    fill="none"
                    viewBox="0 0 20 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    JPG, PNG or JPEG (Max. File Size: 1MB)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
            </div>

            <div className="text-end mt-4">
              <button
                type="button"
                className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded mr-5"
                onClick={closeModal}
              >
                Close
              </button>
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogImageSection;
