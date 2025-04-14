/* eslint-disable react/prop-types */
import locationIcon from "../../../assets/locationIcon.png";
import { EnquireButton } from "../../../commons/components/buttons/enquireButton";
import { IMAGES } from "../../../constants/images";
import { Bookmark } from "lucide-react";
import { useSelector } from "react-redux";

const UniversityDetailsCard = ({
  item,
  addToSavedPreferences,
  removeFromSavedPreferences,
}) => {
  const { savedPreferences } = useSelector((state) => state.savedPreferences);
  const { isLoggedInStudent } = useSelector((state) => state.auth);

  // Find saved item by typeId
  const savedItem = [...savedPreferences].find(
    (saved) => (saved.typeId?._id || saved.typeId) === item?._id
  );

  const isSaved = Boolean(savedItem);

  return (
    <div className="w-full md:max-w-sm h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg w-full h-48 object-cover"
          src={IMAGES.collegeImage}
          alt={item.name}
        />
      </a>
      <div className="p-5 flex flex-col flex-grow">
        {/* Header Section */}
        <div className="flex justify-between">
          <h5 className="mb-2 font-bold tracking-tight text-gray-primary text-[22px] dark:text-white">
            {item?.name}
          </h5>

          {/* Bookmark Button */}
          {isLoggedInStudent && (
            <button
              onClick={
                () =>
                  isSaved
                    ? removeFromSavedPreferences(savedItem._id) // Remove using saved _id
                    : addToSavedPreferences("colleges", item?._id) // Add using item._id
              }
            >
              <Bookmark
                className={`w-6 h-6 text-black ${isSaved ? "fill-black" : "text-gray-500"
                  }`}
              />
            </button>
          )}
        </div>

        {/* Location & Type */}
        <div className="mb-3 flex justify-between">
          <div className="flex gap-2">
            <img
              className="w-[16px] h-[16px] object-contain mt-0.5"
              src={locationIcon}
              alt="location"
            />
            <p className="text-base line-clamp-1 text-[#52525B] font-semibold dark:text-gray-400">
              {item?.stateId?.name}, {item?.destinationId?.countryId?.name}
            </p>
          </div>
          <div className="font-semibold text-[#52525B] text-base">
            {item.entityType}
          </div>
        </div>

        {/* Description */}
        <p className="mb-5 text-[#71717A] font-normal dark:text-gray-400 line-clamp-4 flex-grow">
          {item.description}
        </p>

        {/* Button Always at Bottom */}
        <div className="mt-auto">
          <EnquireButton href={`/college/${item._id}`} />
        </div>
      </div>
    </div>
  );
};

export default UniversityDetailsCard;
