import { useSelector } from "react-redux";

const AccommodationPrice = () => {
  const accommodationDetails = useSelector(
    (state) => state?.accommodations?.selectedAccommodation
  );
  return (
    <div>
      <div className="flex gap-10">
        {[
          {
            label: "Currency",
            value: accommodationDetails?.destinationId?.countryId?.currency,
          },
          { label: "Amount", value: accommodationDetails?.price },
        ].map((item, index) => (
          <div className="" key={index}>
            <p className="font-semibold text-gray-600 mb-1">{item.label}</p>
            <p className="text-gray-500 mb-1">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccommodationPrice;
