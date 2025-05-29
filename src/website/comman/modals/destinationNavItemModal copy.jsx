/* eslint-disable react/prop-types */
import { ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";

const DestinationNavItemModal = ({ handleMouseEnter, handleMouseLeave }) => {
  const { totalPages, allDestinations } = useSelector(
    (state) => state.destinations
  );

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className="absolute top-full border-t-2 border-gray-500  mt-4 left-0 min-w-max bg-white  shadow-lg rounded-b-lg p-4 z-50"
      onMouseEnter={() => handleMouseEnter("destinations")}
      onMouseLeave={handleMouseLeave}
    >
      <ul className="space-2 grid grid-cols-2">
        {allDestinations?.map((item, index) => (
          <li
            key={item._id}
            className="flex items-center justify-between gap-2 px-3 py-2 rounded-lg  transition-all"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex items-center gap-2">
              <span>{item?.countryId?.emoji}</span>
              <a href={`/destinations`} className="hover:text-blue-500 text-lg">
                {item?.countryId?.name}
              </a>
            </div>
            <ChevronRightIcon
              className={`w-5 h-5 text-gray-400 transition-transform ${
                hoveredIndex === index
                  ? "translate-x-1 opacity-100"
                  : "opacity-0"
              }`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DestinationNavItemModal;
