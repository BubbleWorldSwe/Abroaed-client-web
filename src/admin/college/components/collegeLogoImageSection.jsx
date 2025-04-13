import pencil from "../../../assets/pencil.png";
import { useState } from "react";
import dark from "../../../assets/dark.png";
import { useSelector } from "react-redux";
import { Trash2 } from "lucide-react";
import { toast } from "react-toastify";

export const CollegeLogoImageSection = ({ onUploadImage }) => {
  const collegeDetails = useSelector((state) => state.colleges.selectedCollege);

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
    if (fileImage) {
      onUploadImage(fileImage); // send file to parent
      //toast.success("Image uploaded successfully");
      closeModal();
    } else {
      toast.error("Please select an image to upload");
    }
  };

  return (
    <div className="flex flex-col">
      <div
        className="w-full h-72 relative rounded-t-xl bg-gradient-to-r from-yellow-200 to-blue-500"
        onClick={(e) => {
          e.preventDefault();
          setOpenModal(true);
        }}
      >
        <div
          className="absolute w-24 h-24  p-4 left-20"
          style={{
            bottom: "-1.7rem",
            backgroundColor: "rgb(227 231 237)",
          }}
        >
          <img src={add_a_photo} alt="add_img_pic" />
        </div>
      </div>
      <div className="rounded-b-xl py-8 px-10 flex justify-between border-l-2 p-4 border-r-2 border-b-2 border-gray-400 dark:border-gray-700 shadow-md bg-white  dark:bg-gray-800">
        <div className="flex flex-col gap-1">
          <div className="flex gap-5">
            <p className="text-2xl font-semibold">{collegeDetails?.name}</p>
            <div className="rounded-2xl bg-yellow-100 text-center flex items-center justify-center h-8 px-2">
              {collegeDetails?.entityType}
            </div>
          </div>
          <div>
            <p className="text-gray-500 text-sm">
              {collegeDetails?.city},{" "}
              {collegeDetails?.destinationId?.countryId?.name}
            </p>
          </div>
          <div className="flex gap-5 mt-3">
            <div>
              <button
                type="button"
                className="flex items-center justify-center gap-2 text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-lg font-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
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
              </button>
            </div>
          </div>
        </div>
        {isWriteAccess && (
          <div className="flex align-center">
            <div>
              <button
                type="button"
                className="text-white text-lg font-bold border-red-700 rounded-lg px-5 py-2.5 text-center inline-flex items-center me-2 bg-red-600 border-2 hover:bg-red-700"
              >
                <Trash2 size={20} style={{ marginRight: 10 }} />
                <span>Delete</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="rounded-b-xl px-10 flex justify-between border-l-2 p-4 border-r-2 border-b-2 border-gray-400 dark:border-gray-700 shadow-md bg-white dark:bg-gray-800">
        <p className="text-2xl font-semibold">{details?.countryId?.name}</p>
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
              Edit Image
            </button>
            <button
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
                  src={imagePreview || dark}
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
                    JPG, PNG or GIF (max 800x400px)
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
    </div>
  );
};
