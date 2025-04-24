import pencil from "../../../assets/pencil.png";
import { useState } from "react";
import dark from "../../../assets/dark.png";
import { useSelector } from "react-redux";
import { Trash2 } from "lucide-react";
import { toast } from "react-toastify";
import { deleteTestPrepRequest } from "../../../redux/actions/testPrepsActions";
import { useNavigate } from "react-router-dom";
import DeleteConfirmationModal from "../../../commons/modal/deleteConfirmationModal";
import { IMAGE_BASE_URL } from "../../../constants/baseUrl";
import add_a_photo from "../../../assets/add_a_photo.png";

const TestPrepImageUpdate = ({ onUploadImage, handleDelete }) => {
  const testPrepDetails = useSelector(
    (state) => state.testPreps.selectedTestPrep
  );
  const { isWriteAccess } = useSelector((state) => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    if (!fileImage) {
      toast.error("Please select an image to upload");
      return;
    }

    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    const maxSize = 500 * 1024; // 500 KB

    if (!allowedTypes.includes(fileImage.type)) {
      toast.error("Only JPG and PNG images are allowed");
      return;
    }

    if (fileImage.size > maxSize) {
      toast.error("Image size must be less than 500KB");
      return;
    }

    onUploadImage(fileImage); // send file to parent
    closeModal();
  };

  return (
    <div className="flex flex-col">
      <div className="w-full h-48 rounded-t-xl bg-gradient-to-r from-yellow-200 to-blue-500 cursor-pointer flex items-end">
        {testPrepDetails?.imageUrl && (
          <div className="w-50 h-32 p-4 cursor-pointer rounded-sm">
            <img
              src={`${IMAGE_BASE_URL}/${testPrepDetails?.imageUrl}`}
              alt="Logo Upload"
              className="w-full h-full object-contain rounded-md"
            />
          </div>
        )}
      </div>

      <div className="rounded-b-xl px-10 flex justify-between border-l-2 p-4 border-r-2 border-b-2 border-gray-400 dark:border-gray-700 shadow-md bg-white dark:bg-gray-800">
        <p className="text-2xl font-semibold">{testPrepDetails?.productName}</p>
        {isWriteAccess && (
          <div className="flex align-center">
            <button
              type="button"
              className="text-green-600 text-lg border-green-500 hover:border-2 font-semibold rounded-lg  px-5 py-2.5 text-center inline-flex items-center me-2 bg-white border-2"
              onClick={(e) => {
                e.preventDefault();
                setModalType("edit");
                setOpenModal(true);
              }}
            >
              <img src={pencil} alt="pic" className="w-4 h-4 mr-2" />
              {testPrepDetails.imageUrl ? `Edit Image` : "Add Image"}
            </button>
            <button
              onClick={() => {
                setIsModalOpen(!isModalOpen);
              }}
              type="button"
              className="text-white text-lg font-bold border-red-700 rounded-lg px-5 py-2.5 text-center inline-flex items-center me-2 bg-red-600 border-2 hover:bg-red-700"
            >
              <Trash2 size={20} style={{ marginRight: 10 }} />
              <span>Delete</span>
            </button>
          </div>
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

            {modalType === "edit" && (
              <div className="w-full relative mb-4">
                <img
                  className="w-full h-60 object-cover rounded-lg"
                  // src={imagePreview || dark}

                  src={
                    imagePreview
                      ? imagePreview
                      : testPrepDetails?.imageUrl
                      ? `${IMAGE_BASE_URL}/${testPrepDetails.imageUrl}`
                      : dark
                  }
                  alt="Current"
                />
              </div>
            )}

            <p className="text-gray-600 text-sm mb-4">
              Size should be 1000 x 1500 px. Supported files: JPG, PNG
            </p>

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
                    JPG, PNG or JPEG (Max. File Size: 500KB)
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
              {modalType === "edit" && (
                <button
                  type="button"
                  className="border-2 border-gray-500 text-white bg-red-500 hover:bg-red-600 px-4 py-2 mr-2 rounded transition"
                  onClick={closeModal}
                >
                  Close
                </button>
              )}
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        heading="Delete!"
        onDelete={() => {
          handleDelete();
          setIsModalOpen(false);
        }}
      />
    </div>
  );
};

export default TestPrepImageUpdate;
