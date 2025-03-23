/* eslint-disable react/prop-types */
import { useState } from "react";
import { EnquireButton } from "../../../../commons/components/buttons/enquireButton";
import AccomodationEnquiryModal from "../../../comman/modals/accomodationEnquiryModal";
import { IMAGES } from "../../../../constants/images";
import wallet from "../../../../assets/wallet.png";
import locationIcon from "../../../../assets/locationIcon.png";
import bookmark from "../../../../assets/bookmark.png";
import { COLORS } from "../../../../constants/colors";

const PathwaysAccommodationCard = ({ item, source, onAddLead }) => {
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
                        <h5 className={`text-[22px] mb-1 font-semibold tracking-tight text-[${COLORS.GRAY_PRIMARY}] dark:text-white`}>
                            {item.accomodationName}
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

                    {/* Location */}
                    <div className="mb-1 flex justify-between ">
                        <div className="flex gap-2 items-center">
                            <img
                                className="w-[14px] h-[14px]  object-contain mx-1"
                                src={locationIcon}
                                alt={item.name}
                            />
                            <p className="font-semibold text-[16px] text-gray-500 dark:text-gray-400">
                                {item?.stateId?.name}, {item?.destinationId?.countryId?.name}
                            </p>
                        </div>
                    </div>

                    {/* Price */}
                    <div className="flex justify-between text-center mb-2">
                        <div className="flex gap-2 text-base text-[#52525B]  items-center">
                            <img
                                className="w-[14px] h-[14px]  object-contain mx-1"
                                src={wallet}
                                alt={item.name}
                            />
                            <p className="font-normal  dark:text-gray-400">
                                {item.price} per month
                            </p>
                        </div>
                    </div>
                    <div className="flex-grow">
                        <p className="mb-5 font-normal  text-gray-500 dark:text-gray-400 line-clamp-4">
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

export default PathwaysAccommodationCard