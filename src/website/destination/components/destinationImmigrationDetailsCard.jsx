import PrimaryBodyText from "../../styleComponents/primaryBodyText";

/* eslint-disable react/prop-types */
const DestinationImmigrationDetailsCard = ({ data }) => {
  return (
    <div className="w-96 h-96  bg-white flex-shrink-0 border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <div className="p-5">
        <div className="flex justify-between">
          <h5 className={`mb-2 text-[22px] font-semibold  text-gray-primary dark:text-white`}>
            {data?.visaName}
          </h5>
        </div>
        <p className="mb-3 font-semibold text-[18px] md:text-sm text-[#52525B] dark:text-gray-400">
          {data?.visaType?.name}
        </p>
        <PrimaryBodyText>
          {data?.description}
        </PrimaryBodyText>
      </div>
    </div>
  );
};

export default DestinationImmigrationDetailsCard;
