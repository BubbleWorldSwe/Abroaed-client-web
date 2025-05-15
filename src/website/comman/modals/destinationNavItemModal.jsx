/* eslint-disable react/prop-types */
import { ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Flag from "react-world-flags";

const DestinationNavItemModal = ({ handleMouseEnter }) => {
  const { allDestinations } = useSelector((state) => state.destinations);

  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const handleNavigate = (id) => {
    navigate(`/destinations/${id}`);
  };
  return (
    <>
      <div
        className="absolute left-0 top-full w-max py-[5px]  z-50"
        onMouseEnter={() => handleMouseEnter("destinations")}
      >
        <ul className="hidden  space-1 md:grid grid-cols-2 shadow-lg max-h-[80vh] w-[35vw] gap-1 py-2  rounded-b-lg mt-2 bg-white overflow-y-auto">
          {allDestinations?.map((item, index) => (
            <li
              key={item._id}
              className="flex  items-center cursor-pointer justify-between  text-sm text-gray-600 font-semibold hover:text-gray-900   px-5 py-3 hover:bg-gray-100 rounded-lg transition-all"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleNavigate(item._id)}
            >
              <div className="flex items-center gap-2 ">
                <span className="">
                  <Flag width={30} code={item?.countryId?.code} style={{}} />
                </span>
                <a>{item?.countryId?.name}</a>
              </div>
              <ChevronRightIcon
                className={`w-5 h-5   ${
                  hoveredIndex === index ? " opacity-100" : "opacity-0"
                }`}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* mobile view */}
      <ul className="flex px-2  items-center gap-3 py-1 bg overflow-x-auto sm:hidden">
        {allDestinations?.map((item, index) => (
          <li key={index} className="">
            <div className="flex flex-col  justify-center items-center gap-1">
              <span className="">
                <Flag width={50} code={item?.countryId?.code} style={{}} />
              </span>
              <a
                href={`/destinations/${item._id}`}
                className="cursor-pointer whitespace-nowrap"
              >
                {item?.countryId?.name}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DestinationNavItemModal;
