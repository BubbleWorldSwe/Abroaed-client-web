import { useSelector } from "react-redux";

const AccommodationDescription = () => {
  const accommodationDetails = useSelector(
    (state) => state?.accommodations?.selectedAccommodation
  );
  return (
    <div>
      <p className="text-gray-500">{accommodationDetails?.description}</p>
    </div>
  );
};

export default AccommodationDescription;
