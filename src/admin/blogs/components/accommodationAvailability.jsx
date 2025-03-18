import { useSelector } from "react-redux";

const AccommodationAvailability = () => {
  const accommodationDetails = useSelector(
    (state) => state?.accommodations?.selectedAccommodation
  );
  return (
    <div>
      <div className="">
        <p className="text-gray-500 mb-1">{accommodationDetails.availablity}</p>
      </div>
    </div>
  );
};

export default AccommodationAvailability;
