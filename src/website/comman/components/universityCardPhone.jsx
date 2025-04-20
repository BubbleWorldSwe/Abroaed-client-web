/* eslint-disable react/prop-types */
import locationIcon from "../../../assets/locationIcon.png";
import { IMAGES } from "../../../constants/images";

const UniversityCardPhone = ({ item }) => {
  return (
    <a href={`/college/${item._id}`} className="max-w-[330px] bg-white   border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 flex flex-col justify-between">
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
    </a>
  );
};

export default UniversityCardPhone;
