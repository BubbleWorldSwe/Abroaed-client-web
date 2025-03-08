/* eslint-disable react/prop-types */
import locationIcon from "../../../assets/locationIcon.png";
import { EnquireButton } from "../../../commons/components/buttons/enquireButton";
import { IMAGES } from "../../../constants/images";

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
          <h5 className="mb-2 text-[22px] font-semibold  text-[#27272A] dark:text-white">
            {item?.name}
          </h5>
          <div>
            <svg
              className="w-8 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z"
              />
            </svg>
          </div>
        </div>
        <div className="mb-3 flex justify-between text-center ">
          <div className="flex items-center gap-2 justify-center text-center">
            <img
              className="rounded-t-lg w-[14px] h-[14px] object-contain"
              src={locationIcon}
              alt={item.name}
            />
            <p className="text-base text-[#52525B] font-semibold dark:text-gray-400">
              {item?.stateId?.name}, {item?.destinationId?.countryId?.name}
            </p>
          </div>

          <div className="font-semibold text-[#52525B] text-base ">{item.entityType}</div>
        </div>
        <p className="mb-5 text-[#71717A] font-normal text-base dark:text-gray-400 ">
          {item.description}
        </p>
        <EnquireButton href={`/college/${item._id}`} />
      </div>
    </div>
  );
};

export default UniversityDetailsCard;
