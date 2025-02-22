/* eslint-disable react/prop-types */
import { ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedDestination } from "../../../redux/actions/destinationActions";

const DestinationNavItemModal = ({
  menuItems = [],
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { allDestinations } = useSelector((state) => state.destinations);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleViewDetails = (destination) => {
    navigate(`/destinations/${encodeURIComponent(destination._id)}`, {
      state: destination,
    });
  };

  return (
    <div
      className="absolute left-0 top-full w-max bg-white shadow-lg rounded-b-lg p-4 z-50"
      onMouseEnter={() => handleMouseEnter("destinations")}
      onMouseLeave={() => setTimeout(handleMouseLeave, 200)}
    >
      <ul className="space-2 grid grid-cols-2">
        {allDestinations?.map((item, index) => (
          <li
            key={item._id}
            className="flex items-center justify-between gap-2 px-3 py-2 rounded-lg transition-all"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex items-center gap-2">
              <span>{item?.countryId?.emoji}</span>
              <a
                href={`/destinations/${item._id}`}
                // onClick={() => handleViewDetails(item)}
                className="hover:text-yellow-500 text-lg cursor-pointer"
                // target="_blank"
              >
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
