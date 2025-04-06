/* eslint-disable react/prop-types */

import { ChevronRightIcon } from "lucide-react";
import { useState } from "react";

const CombinedTestPrepModal = ({ eltPreps = [], languagePreps = [], handleMouseEnter, handleMouseLeave }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    console.log(eltPreps);
    console.log(languagePreps);

    return (
        <div
            className="absolute text-gray-primary left-0 top-full w-[20rem] py-[5px]  z-50"
            onMouseEnter={() => handleMouseEnter("testPrep")}
            onMouseLeave={() => handleMouseLeave}
        >
            <div className="bg-white mt-2">
                <h4 className="font-bold text-[15px] py-2 hover:bg-gray-700 text-center bg-gray-primary text-white mb-1">ELT Prep</h4>
                <ul className="mb-2">
                    {eltPreps?.map((data, index) => (
                        <li
                            key={index}
                            className="flex  items-center justify-between  text-sm text-gray-600 font-semibold hover:text-gray-900   border-b border-gray-200  px-3 py-1 hover:bg-gray-100 rounded-lg transition-all"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="flex  w-full justify-between items-center ">
                                <a
                                    // href={`/testprep/${data._id}`}
                                    href={`/testprep/${data._id}`}
                                    className="block px-4 py-1 "
                                >
                                    {data?.productName}
                                </a>
                                <ChevronRightIcon
                                    className={`w-5 h-5   ${hoveredIndex === index
                                        ? " opacity-100"
                                        : "opacity-0"
                                        }`}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
                <h4 className="font-bold text-[15px] py-2 hover:bg-gray-700 text-center bg-gray-primary text-white mb-1">Language Prep</h4>
                <ul>
                    {languagePreps.map((data, index) => (
                        <li
                            key={index}
                            className="flex  items-center justify-between border-b border-gray-200  text-sm text-gray-600 font-semibold hover:text-gray-900   px-3 py-1 hover:bg-gray-100 rounded-lg transition-all"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="flex  w-full justify-between items-center ">
                                <a
                                    href={`/languageprep/${data._id}`}
                                    className="block px-4 py-1"
                                >
                                    {data?.productName
                                    }
                                </a>
                                <ChevronRightIcon
                                    className={`w-5 h-5   ${hoveredIndex === index ? " opacity-100" : "opacity-0"
                                        }`}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CombinedTestPrepModal