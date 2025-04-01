/* eslint-disable react/prop-types */
import { ChevronRightIcon } from "lucide-react";
import { useState } from "react";

const TestPrepNavModal = ({
    menuItems = [],
    handleMouseEnter,
    handleMouseLeave,
}) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);


    return (
        <div
            className="absolute left-0 top-full w-max py-[5px]  z-50"
            onMouseEnter={() => handleMouseEnter("testPrep")}
            onMouseLeave={() => setTimeout(handleMouseLeave, 200)}
        >
            <ul className="space-1 grid grid-cols-1 w-[30vw]  shadow-lg  rounded-b-lg mt-2 bg-white" >
                {menuItems?.map((data, index) => (
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
                                {data?.title}
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
        </div>
    )
}

export default TestPrepNavModal