import { useSelector } from "react-redux";

function AdmissionReqDest({}) {
  // console.log("details.admissionRequirements");
  const details = useSelector(
    (state) => state.destinations.selectedDestination
  );

  return (
    <div className="   bg-white  py-0  dark:border-gray-700 dark:bg-gray-800">
      {/* About Section */}
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Comprehensive list of documents that you need to have while applying to
        universities in {details?.countryId?.name}.{" "}
      </p>
      {/* Grid Section */}
      <div className="justify-start w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
        {details?.admissionRequirements?.map((item, index) => (
          <li key={index}>{item?.name}</li>
        ))}
      </div>
    </div>
  );
}

export default AdmissionReqDest;
