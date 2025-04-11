import accommodations from "../../assets/accommodations.webp";
import locationIcon from "../../assets/locationIcon.png";
import wallet from "../../assets/wallet.png";

const StudentPreferenceAccommodationCard = ({ accommodation }) => {
  return (
    <div className="max-w-sm flex-shrink-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
      <a href="#">
        <img
          className="rounded-t-lg w-full h-48 object-cover"
          src={accommodations}
          alt={accommodation.name}
        />
      </a>
      <div className="p-5 flex flex-col flex-grow">
        {/* Header */}
        <div className="flex justify-between">
          <h5
            className={`text-[22px] mb-1 font-semibold tracking-tight text-gray-primary dark:text-white`}
          >
            {accommodation?.typeId?.accomodationName}
          </h5>
          <div>
            {/* <button>
                            <img
                                src={bookmark}
                                alt="bookmarkIcon"
                            />
                        </button> */}
          </div>
        </div>

        {/* Location */}
        <div className="mb-1 flex justify-between ">
          <div className="flex gap-2 items-center">
            <img
              className="w-[14px] h-[14px]  object-contain mx-1"
              src={locationIcon}
              alt={accommodation.name}
            />
            <p className="font-semibold text-[16px] text-gray-500 dark:text-gray-400">
              {accommodation?.typeId?.stateId?.name},{" "}
              {accommodation?.typeId?.destinationId?.countryId?.name}
            </p>
          </div>
        </div>

        {/* Price */}
        <div className="flex justify-between text-center mb-2">
          <div className="flex gap-2 text-base text-[#52525B]  items-center">
            <img
              className="w-[14px] h-[14px]  object-contain mx-1"
              src={wallet}
              alt={accommodation.name}
            />
            <p className="font-normal  dark:text-gray-400">
              ₹{accommodation?.typeId?.price} per month
            </p>
          </div>
        </div>
        <div className="flex-grow">
          <p className="mb-5 font-norma text-gray-500 dark:text-gray-400 line-clamp-4">
            {accommodation?.typeId?.description}
          </p>
        </div>
        {/* <div className="mt-auto">
                    <EnquireButton onClick={handleOpenAddModal} />
                </div> */}
      </div>
    </div>
  );
};

export default StudentPreferenceAccommodationCard;
