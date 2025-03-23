/* eslint-disable react/prop-types */
import { EnquireButton } from "../../../commons/components/buttons/enquireButton"
import { IMAGES } from "../../../constants/images"
import locationIcon from "../../../assets/locationIcon.png";
import bookmark from "../../../assets/bookmark.png"
import EnquiryLOEModal from "../modals/enquiryLOEModal";
import { useState } from "react";
import { COLORS } from "../../../constants/colors";
const UniversityCardDetails = ({ item }) => {
    const [openModal, setOpenModal] = useState(false);

    const handleCloseAddModal = () => {
        setOpenModal(false);
    };

    const handleOpenAddModal = () => {
        setOpenModal(true);
    };

    return (
        <>
            <EnquiryLOEModal
                isOpen={openModal}
                onClose={handleCloseAddModal}

            />
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
                        <h5 className={`mb-2 text-[22px] font-semibold  text-[${COLORS.GRAY_PRIMARY}] dark:text-white`}>
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
                    <div className="mb-3 flex justify-between text-center">
                        <div className="flex gap-2 justify-between items-center">
                            <img
                                className="rounded-t-lg w-[14px] h-[14px] object-contain"
                                src={locationIcon}
                                alt={item.name}
                            />
                            <p className="text-[16px] text-gray-500 font-bold dark:text-gray-400">
                                {item.location}
                            </p>
                        </div>
                        <div className="font-bold text-gray-500">Private</div>
                    </div>
                    <p className="mb-5 text-gray-500 dark:text-gray-400 line-clamp-4">
                        {item.description}
                    </p>
                    <EnquireButton
                        onClick={handleOpenAddModal}
                    />
                </div>
            </div>
        </>

    )
}

export default UniversityCardDetails