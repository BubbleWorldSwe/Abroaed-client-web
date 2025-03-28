/* eslint-disable react/prop-types */
import { EnquireButton } from "../../../commons/components/buttons/enquireButton";
import locationIcon from "../../../assets/locationIcon.png";
import EnquiryLOEModal from "../modals/enquiryLOEModal";
import { useState } from "react";
const UniversityCardDetails = ({ item, onAddLead }) => {
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
        item={item}
        onAddLead={onAddLead}
      />
      <div className="w-[18rem] md:w-[25rem] bg-white border overflow-y-auto h-[30rem] border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg w-full h-48 object-cover"
            src={item.imgUrl}
            alt={item.name}
          />
        </a>
        <div className="p-5">
          <div className="flex justify-between">
            <h5
              className={`mb-2 text-[22px] font-semibold  text-gray-primary dark:text-white`}
            >
              {item?.name}
            </h5>
            {/* <div>
              <button>
                <img src={bookmark} alt="bookmarkIcon" />
              </button>
            </div> */}
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
            <div className="font-bold text-gray-500">{item.entityType}</div>
          </div>
          <div className="flex flex-col justify-between h-[10rem]">
            <p className="mb-5 text-gray-500 dark:text-gray-400 line-clamp-4">
              {item.description}
            </p>
            <EnquireButton onClick={handleOpenAddModal} />
          </div>
        </div>
      </div>
    </>
  );
};

export default UniversityCardDetails;
