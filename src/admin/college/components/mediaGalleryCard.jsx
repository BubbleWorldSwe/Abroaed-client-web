import { useSelector } from "react-redux";
import dark from "../../../assets/dark.png";

function MediaGalleryCard() {
  const collegeDetails = useSelector((state) => state.colleges.selectedCollege);
  return (
    <div className="overflow-x-auto ">
      <div className="flex space-x-5" style={{ maxWidth: "60rem" }}>
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="w-96 relative flex-shrink-0"
              style={{ flex: "0 0 auto" }} // Prevent images from shrinking
            >
              {/* Image */}
              <img
                className="w-full h-60 object-cover rounded-lg"
                src={dark}
                alt={`Profile cover ${index + 1}`}
              />
              {/* Overlay */}
              <div className="absolute top-2 r-10"></div>
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
          ))}
      </div>
    </div>
  );
}

export default MediaGalleryCard;
