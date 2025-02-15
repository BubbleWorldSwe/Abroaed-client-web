import { useSelector } from "react-redux";

const AccommodationLocation = () => {
  const accommodationDetails = useSelector(
    (state) => state?.accommodations?.selectedAccommodation
  );
  return (
    <div>
      <div className="flex gap-10">
        {[
          { label: "Country", value: accommodationDetails?.countryId?.name },
          { label: "State", value: accommodationDetails?.stateId?.name },
          { label: "City", value: accommodationDetails?.city },
          {
            label: "Street",
            value: accommodationDetails?.streetName || "-----",
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

export default AccommodationLocation;
