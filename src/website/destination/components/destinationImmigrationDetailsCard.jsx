const DestinationImmigrationDetailsCard = ({ data }) => {
  return (
    <div className="max-w-sm  bg-white flex-shrink-0 border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <div className="p-5">
        <div className="flex justify-between">
          <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {data?.visaName}
          </h5>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {data?.visaType?.name}
        </p>
        <p>{data?.description}</p>
      </div>
    </div>
  );
};

export default DestinationImmigrationDetailsCard;
