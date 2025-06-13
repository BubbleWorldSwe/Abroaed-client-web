import accommodations from "../../../assets/accommodations.webp";
import locationIcon from "../../../assets/locationIcon.png";
import wallet from "../../../assets/wallet.png";
import { IMAGE_BASE_URL } from "../../../constants/baseUrl";
import { IMAGES } from "../../../constants/images";

const StudentPreferenceAccommodationCard = ({ accommodation }) => {
  return (
    <div className="bg-white w-[250px] min-w-[250px] max-w-[250px] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg w-full h-36 object-cover"
        //  src={accommodations}
        alt={accommodation.name}
        src={
          accommodation?.typeId?.imageUrl
            ? `${IMAGE_BASE_URL}/${accommodation?.typeId?.imageUrl}`
            : IMAGES.noAccommodation
        }
      />
      <div className="p-5 flex flex-col flex-grow">
        {/* Header */}
        <div className="flex justify-between">
          <h5
            className={`text-[18px] mb-1 font-semibold tracking-tight text-gray-primary dark:text-white`}
          >
            {accommodation?.typeId?.accomodationName}
          </h5>
          <div></div>
        </div>

        {/* Location */}
        <div className="mb-1 flex justify-between ">
          <div className="flex gap-2 items-center">
            <img
              className="w-[14px] h-[14px]  object-contain mx-1"
              src={locationIcon}
              alt={accommodation.name}
            />
            <p className="font-semibold text-[14px] text-gray-500 dark:text-gray-400">
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
            <p className="font-normal  text-[13px] dark:text-gray-400">
              ₹{accommodation?.typeId?.price} per month
            </p>
          </div>
        </div>
        <div className="flex-grow">
          <p className="font-normal text-[13px] text-gray-500 dark:text-gray-400 line-clamp-4">
            {accommodation?.typeId?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentPreferenceAccommodationCard;
