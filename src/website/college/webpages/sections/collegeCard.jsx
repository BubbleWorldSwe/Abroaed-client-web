/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import locationIcon from "../../../../assets/locationIcon.png";
import { Bookmark } from "lucide-react";
import { IMAGES } from "../../../../constants/images";
import { IMAGE_BASE_URL } from "../../../../constants/baseUrl";

const CollegeCard = ({
  item,
  addToSavedPreferences,
  removeFromSavedPreferences,
}) => {
  const { savedPreferences } = useSelector((state) => state.savedPreferences);
  const savedItem = [...savedPreferences].find(
    (saved) => (saved?.typeId?._id || saved?.typeId) === item?._id
  );
  const isSaved = Boolean(savedItem);
  const { isLoggedInStudent } = useSelector((state) => state.auth);

  const collegeImages = item?.images;
  const logoImage = collegeImages?.find((img) => img.type === "logo");

  return (
    <a
      href={`/college/${item._id}`}
      className="w-full p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col md:flex-row overflow-hidden"
    >
      {/* Image Section */}
      <div className="w-20 h-16 flex-shrink-0">
        <img
          className="w-full h-full object-cover rounded-md"
          src={
            logoImage
              ? `${IMAGE_BASE_URL}/${logoImage?.ImageUrl}`
              : IMAGES.noCollege
          }
          alt={item.name}
        />
      </div>

      {/* Content Section */}
      <div className="ml-4 flex flex-col flex-grow">
        {/* Header */}
        <div className="flex justify-between items-start">
          <h5 className="text-[18px] line-clamp-1 mb-2 font-semibold tracking-tight text-gray-primary dark:text-white">
            {item.name}
          </h5>

          {isLoggedInStudent && (
            <button
              onClick={(e) => {
                e.preventDefault(); // Prevent link redirect when clicking bookmark
                isSaved
                  ? removeFromSavedPreferences(savedItem._id)
                  : addToSavedPreferences("colleges", item?._id);
              }}
            >
              <Bookmark
                className={`w-5 h-5 ml-2 ${
                  isSaved ? "fill-black text-black" : "text-gray-500"
                }`}
              />
            </button>
          )}
        </div>

        {/* Location */}
        <div className="mb-1 flex items-center">
          <img
            className="w-[14px] h-[14px] object-contain mr-1"
            src={locationIcon}
            alt="location"
          />
          <p className="font-semibold text-[13px] text-gray-500 dark:text-gray-400 line-clamp-1">
            {item?.stateId?.name}, {item?.destinationId?.countryId?.name}
          </p>
        </div>
      </div>
    </a>
  );
};

export default CollegeCard;
