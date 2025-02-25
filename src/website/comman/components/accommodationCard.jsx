/* eslint-disable react/prop-types */

import { EnquireButton } from "../../../commons/components/buttons/enquireButton";
import { IMAGES } from "../../../constants/images";
import locationIcon from "../../../assets/locationIcon.png";
import wallet from "../../../assets/wallet.png";

const AccommodationCard = ({ item }) => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg w-full h-48 object-cover"
          src={IMAGES.accommodations}
          alt={item.name}
        />
      </a>
      <div className="p-5">
        <div className="flex justify-between">
          <h5 className="mb-5 text-xl font-600 tracking-tight dark:text-white">
            {item.accomodationName}
          </h5>
          <div>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
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
        <div className="mb-2 flex justify-between">
          <div className="flex gap-2 justify-between">
            <img
              className="rounded-t-lg w-[18px] h-[18px] object-contain mx-1"
              src={locationIcon}
              alt={item.name}
            />

            <p className="font-semibold text-[16px] text-gray-500 dark:text-gray-400">
              {item?.stateId?.name}, {item?.destinationId?.countryId?.name}
            </p>
          </div>
        </div>
        <div className="mb-2 flex justify-between text-center mb-5">
          <div className="flex gap-2 justify-between">
            <img
              className="rounded-t-lg w-[24px] h-[24px] object-contain"
              src={wallet}
              alt={item.name}
            />

            <p className="font-medium text-gray-500 dark:text-gray-400">
              {item.price} per month
            </p>
          </div>
        </div>

        <p className="mb-5 font-normal text-gray-700 dark:text-gray-400 line-clamp-4">
          {item.description}
        </p>
        <EnquireButton />
      </div>
    </div>
  );
};

export default AccommodationCard;
