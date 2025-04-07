/* eslint-disable react/prop-types */
import { ChevronRightIcon } from "lucide-react";
import { useState } from "react";

const CombinedTestPrepModal = ({ eltPreps = [], languagePreps = [], handleMouseEnter, handleMouseLeave }) => {
    const [activeSubMenu, setActiveSubMenu] = useState(null);

    return (
        <div
            className="absolute text-gray-primary left-0 top-full w-[15rem] py-[5px] z-50"
            onMouseEnter={() => handleMouseEnter("testPrep")}
            onMouseLeave={handleMouseLeave}
        >
            <div className="bg-white shadow-lg rounded-b-lg mt-2 relative">
                <ul className="mb-2">
                    {/* ELT Prep Main Item */}
                    <li
                        className="flex items-center justify-between px-3 py-2 hover:bg-gray-100 cursor-pointer"
                        onMouseEnter={() => setActiveSubMenu("elt")}
                        onMouseLeave={() => setActiveSubMenu(null)}
                    >
                        <span className="text-sm font-semibold text-gray-700">ELT Prep</span>
                        <ChevronRightIcon className="w-4 h-4" />
                        {/* Submenu for ELT */}
                        {activeSubMenu === "elt" && (
                            <ul className="absolute top-0 shadow-lg left-full w-[15rem] bg-white  z-50">
                                {eltPreps.map((data, index) => (
                                    <li key={index} className="px-4 py-2 text-sm hover:bg-gray-100">
                                        <a href={`/testprep/${data._id}`} className="block">
                                            {data.productName}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>

                    {/* Language Prep Main Item */}
                    <li
                        className="flex items-center justify-between px-3 py-2 hover:bg-gray-100 cursor-pointer"
                        onMouseEnter={() => setActiveSubMenu("lang")}
                        onMouseLeave={() => setActiveSubMenu(null)}
                    >
                        <span className="text-sm font-semibold text-gray-700">Language Prep</span>
                        <ChevronRightIcon className="w-4 h-4" />
                        {/* Submenu for Language */}
                        {activeSubMenu === "lang" && (
                            <ul className="absolute top-full  left-0 mt-[-2.5rem] ml-[15rem] w-[15rem] bg-white shadow-lg z-50">
                                {languagePreps.map((data, index) => (
                                    <li key={index} className="px-4 py-2 text-sm hover:bg-gray-100">
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
