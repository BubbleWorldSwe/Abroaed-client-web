/* eslint-disable react/prop-types */

import { EnquireButton } from "../../../commons/components/buttons/enquireButton";
import { IMAGES } from "../../../constants/images";
import locationIcon from "../../../assets/locationIcon.png";
import wallet from "../../../assets/wallet.png";
import { useState } from "react";
import AccomodationEnquiryModal from "../modals/accomodationEnquiryModal";

const AccommodationCard = ({ item, source, onAddLead }) => {
  console.log(source);
  const [openModal, setOpenModal] = useState(false);

  const handleCloseAddModal = () => {
    setOpenModal(false);
  };

  const handleOpenAddModal = () => {
    setOpenModal(true);
  };

  return (
    <>
      <AccomodationEnquiryModal
        isOpen={openModal}
        onClose={handleCloseAddModal}
        source={source}
        onAddLead={onAddLead}
        entity={item.accomodationName}
        accommodationDetails={item}
      />
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
        <a href="#">
          <img
            className="rounded-t-lg w-full h-48 object-cover"
            src={IMAGES.accommodations}
            alt={item.name}
          />
        </a>
        <div className="p-5 flex flex-col flex-grow">
          {/* Header */}
          <div className="flex justify-between">
            <h5 className="text-xl font-600 tracking-tight dark:text-white">
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

          {/* Location */}
          <div className="mb-2 flex justify-between">
            <div className="flex gap-2">
              <img
                className="w-[18px] h-[18px] object-contain mx-1"
                src={locationIcon}
                alt={item.name}
              />
              <p className="font-semibold text-[16px] text-gray-500 dark:text-gray-400">
                {item?.stateId?.name}, {item?.destinationId?.countryId?.name}
              </p>
            </div>
          </div>

          {/* Price */}
          <div className="flex justify-between text-center mb-5">
            <div className="flex gap-2">
              <img
                className="w-[24px] h-[24px] object-contain"
                src={wallet}
                alt={item.name}
              />
              <p className="font-medium text-gray-500 dark:text-gray-400">
                {item.price} per month
              </p>
            </div>
          </div>

          <div className="flex-grow">
            <p className="mb-5 font-normal text-gray-700 dark:text-gray-400 line-clamp-4">
              {item.description}
            </p>
          </div>

          <div className="mt-auto">
            <EnquireButton onClick={handleOpenAddModal} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AccommodationCard;
