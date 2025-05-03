/* eslint-disable react/prop-types */
import { ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CombinedTestPrepModal = ({ eltPreps = [], languagePreps = [], handleMouseEnter, handleMouseLeave }) => {
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/testprep/${id}`)
  }
  return (
    <div
      className="absolute text-gray-primary left-0 top-full w-[15rem] py-[5px] z-50"
      onMouseEnter={() => handleMouseEnter("testPrep")}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-white shadow-lg rounded-b-lg mt-2 relative">
        <ul className="mb-2">
          {/* ELT Prep Main Item */}

          {eltPreps.map((data, index) => (
            <li key={index}
              className="flex  items-center justify-between  cursor-pointer text-sm text-gray-600 font-semibold hover:text-gray-900   border-b border-gray-200  px-3 py-1 hover:bg-gray-100 rounded-lg transition-all"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleNavigate(data?._id)}
            >
              <a className="block">
                <span className="text-sm font-semibold text-gray-700 py-1 px-4">
                  {data.exam}
                </span>
              </a>
              < ChevronRightIcon
                className={`w-5 h-5   ${hoveredIndex === index
                  ? " opacity-100"
                  : "opacity-0"
                  }`} />
            </li>
          ))}
          {/* <ChevronRightIcon className="w-4 h-4" /> */}
          {/* Submenu for ELT */}
          {/* {activeSubMenu === "elt" && (
                            <ul className="absolute top-0 shadow-lg left-full w-[15rem] bg-white  z-50">
                               
                            </ul>
                        )} */}


          {/* Language Prep Main Item */}
          <li
            className="flex  items-center justify-between  text-sm text-gray-600 font-semibold hover:text-gray-900   border-b border-gray-200  px-3 py-1 hover:bg-gray-100 rounded-lg transition-all"
            onMouseEnter={() => {
              setHoveredIndex("lang")
              setActiveSubMenu('lang')
            }}
            onMouseLeave={() => setHoveredIndex(null)}

          >
            <span className="text-sm font-semibold text-gray-700 py-1 px-4">Language Prep</span>
            <ChevronRightIcon
              className={`w-5 h-5   ${hoveredIndex === "lang"
                ? " opacity-100"
                : "opacity-0"
                }`} />
            {/* Submenu for Language */}
            {activeSubMenu === "lang" && (
              <ul className="absolute top-full rounded-b-lg shadow-lg  left-0 mt-[-2.5rem] ml-[15rem] w-[15rem] bg-white  z-50">
                {languagePreps.map((data, index) => (
                  <li key={index}
                    className="px-4 py-2 text-sm hover:rounded-b-lg hover:bg-gray-100"
                    onMouseEnter={() => {
                      setHoveredIndex("lang")
                      setActiveSubMenu("lang")
                    }}
                    onMouseLeave={() => setActiveSubMenu(null)}

                  >
                    <a href={`/languageprep/${data._id}`} className="block">
                      {data.productName}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CombinedTestPrepModal;
