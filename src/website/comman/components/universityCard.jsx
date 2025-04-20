/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import locationIcon from "../../../assets/locationIcon.png";
import { EnquireButton } from "../../../commons/components/buttons/enquireButton";
import { IMAGES } from "../../../constants/images";

const UniversityCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="max-w-[330px] hidden bg-white   border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 md:flex flex-col justify-between">
        <div className="flex items-center">
          {/* Image */}
          <img
            className="w-24 h-20 object-cover rounded-lg"
            src={IMAGES.collegeImage}
            alt={item.name}
          />

          {/* Name & Location */}
          <div className="ml-4 flex flex-col">
            <h5 className="text-lg font-semibold text-gray-700 dark:text-white">
              {item?.name}
            </h5>
            <div className="flex items-center  gap-2 text-sm text-gray-600 dark:text-gray-400 mt-1">
              <img
                className="w-4 h-4 object-contain"
                src={locationIcon}
                alt="Location"
              />
              <p>
                {item?.stateId?.name}, {item?.destinationId?.countryId?.name}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <div className="flex flex-col  h-full">
            <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-4">
              {item.description}
            </p>

          </div>
        </div>
        <div className="mt-3">
          <EnquireButton href={`/college/${item._id}`} />
        </div>
      </div>

      {/* mobile view */}
      <button className="w-full md:hidden bg-white   border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 flex flex-col justify-between"
        onClick={() => navigate(`/college/${item._id}`)}
      >
        <div className="flex items-center">
          {/* Image */}
          <img
            className="w-24 h-20 object-cover rounded-lg"
            src={IMAGES.collegeImage}
            alt={item.name}
          />

          {/* Name & Location */}
          <div className="ml-4 flex flex-col">
            <h5 className="text-lg font-semibold text-gray-700 dark:text-white">
              {item?.name}
            </h5>
            <div className="flex items-center  gap-2 text-sm text-gray-600 dark:text-gray-400 mt-1">
              <img
                className="w-4 h-4 object-contain"
                src={locationIcon}
                alt="Location"
              />
              <p>
                {item?.stateId?.name}, {item?.destinationId?.countryId?.name}
              </p>
            </div>
          </div>
        </div>
      </button>

    </div>
  );
};

export default UniversityCard;
