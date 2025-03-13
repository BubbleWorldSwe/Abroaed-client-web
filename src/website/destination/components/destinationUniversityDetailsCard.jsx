/* eslint-disable react/prop-types */
import locationIcon from "../../../assets/locationIcon.png";
import { EnquireButton } from "../../../commons/components/buttons/enquireButton";
import { IMAGES } from "../../../constants/images";
import bookmark from "../../../assets/bookmark.png"

const UniversityDetailsCard = ({ item }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg w-full h-48 object-cover"
          src={IMAGES.collegeImage}
          alt={item.name}
        />
      </a>
      <div className="p-5">
        <div className="flex justify-between">
          <h5 className="mb-2  font-bold tracking-tight text-[#27272A] text-[22px] dark:text-white">
            {item?.name}
          </h5>
          <div>
            <button>
              <img
                src={bookmark}
                alt="bookmarkIcon"
              />
            </button>
          </div>
        </div>
        <div className="mb-3 flex justify-between  text-center ">
          <div className="flex gap-2 justify-between items-center">
            <img
              className="rounded-t-lg w-[16px] h-[16px] object-contain"
              src={locationIcon}
              alt={item.name}
            />

            <p className="text-base text-[#52525B] font-semibold dark:text-gray-400">
              {item?.stateId?.name}, {item?.destinationId?.countryId?.name}
            </p>
          </div>

          <div className="font-semibold text-[#52525B] text-base ">
            {item.entityType}
          </div>
        </div>
        <p className="mb-5 text-[#71717A] font-normal dark:text-gray-400 line-clamp-4">
          {item.description}
        </p>

        <EnquireButton href={`/college/${item._id}`} />
      </div>
    </div>
  );
};

export default UniversityDetailsCard;
