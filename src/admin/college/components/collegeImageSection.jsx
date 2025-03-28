import deleteIcon from "../../../assets/deleteIcon.png";
import { useState } from "react";
import add_a_photo from "../../../assets/add_a_photo.png";
import dark from "../../../assets/dark.png";
import { useSelector } from "react-redux";
import { Trash2 } from "lucide-react";

const CollegeImageSection = () => {
  const [openMadal, setOpenModal] = useState(false);
  const closeModal = () => {
    setOpenModal(false);
  };
  const collegeDetails = useSelector((state) => state.colleges.selectedCollege);
  const { isWriteAccess } = useSelector((state) => state.auth);
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
            {/*  <div className=" ">
              <button
                type="button"
                className="flex items-center justify-center gap-2 text-gray-700 bg-white border-2 border-green-700 hover:bg-yellow-50 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-sm rounded-full text-lg px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
              >
                Contact
              </button>
            </div> */}
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

      {openMadal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-1/2 min-w-max relative">
            <button
              className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="mb-4">
              <h2 className="text-2xl font-semibold mb-4">
                Update Media Gallery
              </h2>
              <h3 className="text-lg font-semibold text-gray-700">
                Update Banner
              </h3>
              <h5 className="text-gray-500">
                Max size should be 2000 x 1800 px. Supported files JPG, PNG.
              </h5>
              <div
                className="bg-black w-48 relative flex-shrink-0"
                style={{ flex: "0 0 auto" }}
              >
                {/* Image */}
                <img
                  className="w-xl h-28 object-cover rounded-lg"
                  src={dark}
                  alt={`Profile cover `}
                />
                {/* Button */}
                <div className="absolute top-2 right-2">
                  <button
                    type="button"
                    className=" items-center justify-center w-10 h-10 font-medium   hover:opacity-60 group focus:outline-none dark:focus:ring-blue-800"
                  >
                    <svg
                      className="text-white opacity-80 dark:text-gray-500 w-8 h-8 mb-3.5 mx-auto"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-700">
              Update Banner
            </h3>
            <h5 className="text-gray-500">
              Max size should be 2000 x 1800 px. Supported files JPG, PNG.
            </h5>
            <div
              className="w-full relative flex-shrink-0"
              style={{ flex: "0 0 auto" }}
            >
              {/* Image */}
              <img
                className="w-full h-32 object-cover rounded-lg"
                src={dark}
                alt={`Profile cover `}
              />
              {/* Button */}
              <div className="absolute top-2 right-2">
                <button
                  type="button"
                  className=" items-center justify-center w-10 h-10 font-medium   hover:opacity-60 group focus:outline-none dark:focus:ring-blue-800"
                >
                  <svg
                    className="text-white opacity-80 dark:text-gray-500 w-8 h-8 mb-3.5 mx-auto"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-600">
                {" "}
                Upload a new image here.
              </h3>
              <p className="text-gray-600 text-sm">
                Size should be 1000 x 1500 px. Supported files JPG, PNG.
              </p>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 ">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6 ">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
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
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <div></div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
              <div className="col-span-full text-end">
                <button
                  type="button"
                  className="mt-4 border-2 border-gray-500 text-white bg-red-500 hover:bg-red-600 px-4 py-2 mr-2 rounded transition"
                  onClick={closeModal}
                >
                  Delete
                </button>
                <button
                  type="submit"
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollegeImageSection;
