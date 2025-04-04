import { useSelector } from "react-redux";

const CollegeLocation = () => {
  const collegeDetails = useSelector((state) => state.colleges.selectedCollege);

  return (
    <div>
      <div className="flex gap-10">
        {[
          {
            label: "Country",
            value: collegeDetails?.destinationId?.countryId?.name,
          },
          { label: "State", value: collegeDetails?.stateId?.name },
          { label: "City", value: collegeDetails?.city },
          {
            label: "Address",
            value: collegeDetails?.address,
          },
        ].map((item, index) => (
          <div className="mr-10" key={index}>
            <p className="font-semibold text-gray-600 mb-1">{item.label}</p>
            <p className="text-gray-500 mb-1">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollegeLocation;
