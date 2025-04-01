/* eslint-disable react/prop-types */
import { ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Flag from "react-world-flags";

const DestinationNavItemModal = ({ handleMouseEnter }) => {
  const { allDestinations } = useSelector((state) => state.destinations);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className="absolute left-0 top-full w-max py-[5px]  z-50"
      onMouseEnter={() => handleMouseEnter("destinations")}
    >
      <ul className="space-2 grid grid-cols-2 shadow-lg w-[30vw] gap-3  rounded-b-lg mt-2 bg-white">
        {allDestinations?.map((item, index) => (
          <li
            key={item._id}
            className="flex  items-center justify-between  text-sm text-gray-600 font-semibold hover:text-gray-900   px-3 py-5 hover:bg-gray-100 rounded-lg transition-all"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex items-center gap-4">
              <span className="">
                <Flag width={50} code={item?.countryId?.code} style={{}} />
              </span>
              <a
                href={`/destinations/${item._id}`}
                className="  cursor-pointer"
              >
                {item?.countryId?.name}
              </a>
            </div>
            <ChevronRightIcon
              className={`w-5 h-5   ${hoveredIndex === index ? " opacity-100" : "opacity-0"
                }`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DestinationNavItemModal;
