import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Pencil, Trash2 } from "lucide-react";
import { toast } from "react-toastify";
import pencil from "../../../assets/pencil.png";
import dark from "../../../assets/dark.png";
import add_a_photo from "../../../assets/add_a_photo.png";
import DeleteConfirmationModal from "../../../commons/modal/deleteConfirmationModal";
import { IMAGE_BASE_URL } from "../../../constants/baseUrl";
import ImagePreviewModalContent from "../../../commons/modal/imagePreviewModalContent";

const CollegeImageSection = ({
  onUploadImage,
  handleDelete,
  onDeleteImage,
}) => {
  const collegeDetails = useSelector((state) => state.colleges.selectedCollege);
  const { isWriteAccess } = useSelector((state) => state.auth);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [fileImage, setFileImage] = useState(null);

  const [showLogoPreviewModal, setShowLogoPreviewModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
    setModalType(null);
    setImagePreview(null);
    setFileImage(null);
  };

  const collegeImages = collegeDetails?.images;

  const logoImage = collegeImages?.find((img) => img.type === "logo");
  const coverImage = collegeImages?.find((img) => img.type === "cover");

  // Validate and handle file selected from input
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const fileSizeInKB = file.size / 1024;

      if (modalType === "logo" && fileSizeInKB > 500) {
        toast.error("Logo size should not exceed 500KB");
        e.target.value = null;
        return;
      }

      if (modalType === "cover" && fileSizeInKB > 1024) {
        toast.error("Cover image size should not exceed 1MB");
        e.target.value = null;
        return;
      }

      setFileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      toast.error("Please select a valid image file");
      e.target.value = null;
    }
  };

  // Validate and handle file dropped
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const fileSizeInKB = file.size / 1024;

      if (modalType === "logo" && fileSizeInKB > 500) {
        toast.error("Logo size should not exceed 500KB");
        return;
      }

      if (modalType === "cover" && fileSizeInKB > 1024) {
        toast.error("Cover image size should not exceed 1MB");
        return;
      }

      setFileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      toast.error("Please select a valid image file");
    }
  };

  const handleSubmit = async () => {
    try {
      if (fileImage) {
        const fileSizeInKB = fileImage.size / 1024; // size in KB

        if (modalType === "logo" && fileSizeInKB > 500) {
          toast.error("Logo size should not exceed 500KB");
          return;
        }

        if (modalType === "cover" && fileSizeInKB > 1024) {
          toast.error("Cover image size should not exceed 1MB");
          return;
        }

        if (modalType === "logo" && logoImage?._id) {
          onDeleteImage(logoImage._id, fileImage, modalType);
        } else if (modalType === "cover" && coverImage?._id) {
          onDeleteImage(coverImage._id, fileImage, modalType);
        } else {
          onUploadImage(fileImage, modalType);
        }

        closeModal();
      } else {
        toast.error("Please select an image to upload");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!openModal) {
      setImagePreview(null);
      setFileImage(null);
    }
  }, [openModal]);

  useEffect(() => {
    if (openModal) {
      if (modalType === "logo" && logoImage?.ImageUrl) {
        setImagePreview(`${IMAGE_BASE_URL}/${logoImage.ImageUrl}`);
      } else if (modalType === "cover" && coverImage?.ImageUrl) {
        setImagePreview(`${IMAGE_BASE_URL}/${coverImage.ImageUrl}`);
      }
    }
  }, [openModal, modalType, logoImage, coverImage]);

  return (
    <div className="flex flex-col">
      {/* Cover Section */}
      <div className="w-full h-72 relative rounded-t-xl bg-gradient-to-r from-yellow-200 to-blue-500">
        {coverImage?.ImageUrl && (
          <img
            src={`${IMAGE_BASE_URL}/${coverImage.ImageUrl}`}
            alt="Cover"
            className="w-full h-full object-cover rounded-t-xl"
            onClick={() => setShowPreviewModal(true)}
          />
        )}

        {showPreviewModal && coverImage?.ImageUrl && (
          <ImagePreviewModalContent
            imagePreview={imagePreview}
            imageUrl={coverImage?.ImageUrl}
            onClose={() => setShowPreviewModal(false)}
          />
        )}

        {/* Logo Upload Button */}
        <div
          className="absolute w-24 h-24 p-4 left-20 cursor-pointer rounded-sm"
          style={{ bottom: "-1.7rem", backgroundColor: "rgb(227 231 237)" }}
        >
          <img
            onClick={() => setShowLogoPreviewModal(true)}
            src={
              logoImage
                ? `${IMAGE_BASE_URL}/${logoImage.ImageUrl}`
                : add_a_photo
            }
            alt="Logo"
            className="w-full h-full object-contain"
          />

          <div
            onClick={(e) => {
              e.stopPropagation();
              setModalType("logo");
              setOpenModal(true);
            }}
            className="absolute bottom-0 right-0 bg-black bg-opacity-60 rounded-md p-1"
            style={{ width: "24px", height: "24px" }}
          >
            <Pencil className="text-white w-4 h-4" />
          </div>
        </div>

        {showLogoPreviewModal && logoImage?.ImageUrl && (
          <ImagePreviewModalContent
            imagePreview={imagePreview}
            imageUrl={logoImage?.ImageUrl}
            onClose={() => setShowLogoPreviewModal(false)}
          />
        )}
      </div>

      {/* College Info Card */}
      <div className="rounded-b-xl py-8 px-10 flex justify-between border-l-2 p-4 border-r-2 border-b-2 border-gray-400 dark:border-gray-700 shadow-md bg-white dark:bg-gray-800">
        <div className="flex flex-col gap-1">
          <div className="flex gap-5">
            <p className="text-2xl font-semibold">{collegeDetails?.name}</p>
            <div className="rounded-2xl bg-yellow-100 text-center flex items-center justify-center h-8 px-2">
              {collegeDetails?.entityType}
            </div>
          </div>
          <p className="text-gray-500 text-sm">
            {collegeDetails?.city},{" "}
            {collegeDetails?.destinationId?.countryId?.name}
          </p>
          <div className="flex gap-5 mt-3">
            <a
              href={collegeDetails?.website}
              target="_blank"
              rel="noreferrer"
              type="button"
              className="flex items-center justify-center gap-2 text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-lg px-5 py-2.5 dark:focus:ring-yellow-900"
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"
                />
              </svg>
              Visit Website
            </a>
          </div>
        </div>

        {isWriteAccess && (
          <div className="flex items-center">
            <button
              type="button"
              className="text-green-600 text-lg border-green-500 hover:border-2 font-semibold rounded-lg  px-5 py-2.5 text-center inline-flex items-center me-2 bg-white border-2"
              onClick={() => {
                setModalType("cover");
                setOpenModal(true);
              }}
            >
              <img src={pencil} alt="pic" className="w-4 h-4 mr-2" />
              Cover Image
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              type="button"
              className="flex items-center text-white text-lg font-bold border-red-700 rounded-lg px-5 py-2.5 bg-red-600 border-2 hover:bg-red-700"
            >
              <Trash2 size={20} className="mr-2" />
              <span>Delete</span>
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-1/2 relative">
            <button
              className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>

            <h2 className="text-2xl font-semibold mb-4 capitalize">
              {modalType === "logo" ? "Upload Logo" : "Upload Cover Image"}
            </h2>

            <div className="w-full relative mb-4">
              {modalType === "logo" ? (
                <div className="w-1/2 h-40 relative">
                  <img
                    className="w-full h-full object-contain rounded-lg"
                    src={imagePreview || dark}
                    alt="Current"
                  />
                </div>
              ) : (
                <img
                  className="w-full h-60 object-cover rounded-lg"
                  src={imagePreview || dark}
                  alt="Preview"
                />
              )}
            </div>

            <p className="text-gray-600 text-sm mb-4">
              {modalType === "logo"
                ? "Max. File Size: 500KB"
                : "Max. File Size: 1MB"}
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
                    JPG, PNG or JPEG
                  </p>
                </div>
                <input
                  type="file"
                  className="hidden"
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={handleImageUpload}
                />
              </label>
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-600"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="bg-yellow-400 px-4 py-2 rounded hover:bg-yellow-600 text-black"
                onClick={handleSubmit}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isModalOpen && (
        <DeleteConfirmationModal
          onClose={() => setIsModalOpen(false)}
          onDelete={() => {
            handleDelete();
            setIsModalOpen(false);
          }}
          message="Are you sure you want to delete this college?"
        />
      )}
    </div>
  );
};

export default CollegeImageSection;
