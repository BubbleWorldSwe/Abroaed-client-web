/* eslint-disable react/prop-types */

import { useState } from "react";
import { useSelector } from "react-redux";
import { EnquireButton } from "../../../commons/components/buttons/enquireButton";
import { IMAGES } from "../../../constants/images";
import locationIcon from "../../../assets/locationIcon.png";
import wallet from "../../../assets/wallet.png";
import { Bookmark } from "lucide-react";
import AccomodationEnquiryModal from "../modals/accomodationEnquiryModal";
import { IMAGE_BASE_URL } from "../../../constants/baseUrl";
import { entity } from "../../../constants/values";

const AccommodationCard = ({
  item,
  onAddLead,
  addToSavedPreferences,
  removeFromSavedPreferences,
  source,
  entity,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const { savedPreferences } = useSelector((state) => state.savedPreferences);

  // Find saved accommodation by typeId
  const savedItem = [...savedPreferences].find((saved) => {
    return (saved?.typeId?._id || saved?.typeId) === item?._id;
  });

  console.log(savedItem);

  const isSaved = Boolean(savedItem);

  const { isLoggedInStudent } = useSelector((state) => state.auth);

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
        entity={entity}
        source={"Website"}
        onAddLead={onAddLead}
        accommodationDetails={item}
      />
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
        <img
          className="rounded-t-lg w-full h-48 object-cover"
          src={
            item?.imageUrl
              ? `${IMAGE_BASE_URL}/${item?.imageUrl}`
              : IMAGES.noAccommodation
          }
          alt={item.name}
        />
        <div className="p-5 flex flex-col flex-grow">
          {/* Header */}
          <div className="flex justify-between">
            <h5 className="text-[22px] mb-1 font-semibold tracking-tight text-gray-primary dark:text-white">
              {item.accomodationName}
            </h5>

            {/* Bookmark Button */}
            {isLoggedInStudent && (
              <button
                onClick={() =>
                  isSaved
                    ? removeFromSavedPreferences(savedItem._id)
                    : addToSavedPreferences("accommodation", item?._id)
                }
              >
                <Bookmark
                  className={`w-6 h-6 text-black ${
                    isSaved ? "fill-black" : "text-gray-500"
                  }`}
                />
              </button>
            )}
          </div>

          {/* Location */}
          <div className="mb-1 flex justify-between">
            <div className="flex gap-2 items-center">
              <img
                className="w-[14px] h-[14px] object-contain mx-1"
                src={locationIcon}
                alt="location"
              />
              <p className="font-semibold text-[16px] text-gray-500 dark:text-gray-400 line-clamp-1">
                {item?.stateId?.name}, {item?.destinationId?.countryId?.name}
              </p>
            </div>
          </div>

          {/* Price */}
          <div className="flex justify-between text-center mb-2">
            <div className="flex gap-2 text-base text-[#52525B] items-center">
              <img
                className="w-[14px] h-[14px] object-contain mx-1"
                src={wallet}
                alt="wallet"
              />
              <p className="font-normal dark:text-gray-400">
                {item.price} per month
              </p>
            </div>
          </div>

          <div className="flex-grow">
            <p className="mb-5 font-normal text-gray-500 dark:text-gray-400 line-clamp-4">
              {item.description}
            </p>
          </div>

          {/* Button Always at Bottom */}
          <div className="mt-auto">
            <EnquireButton onClick={handleOpenAddModal} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AccommodationCard;
