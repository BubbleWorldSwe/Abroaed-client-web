/* eslint-disable react/prop-types */
import { ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const items =
    [
        { title: "About Us", href: "/aboutus" },
        { title: "Career", href: "/careers" },
    ]
const WhyAbroaedNavModal = ({ handleMouseEnter,
    handleMouseLeave, }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const navigate = useNavigate();
    const handleNavigate = (href) => {
        navigate(`${href}`)
    }
    return (
        <div
            className="absolute left-0 top-full w-max py-[5px]  z-50"
            onMouseEnter={() => handleMouseEnter("whyAbroad")}
            onMouseLeave={handleMouseLeave}
        >
            <ul className="space-1 grid grid-cols-1 shadow-lg w-[15vw]  rounded-b-lg mt-2 bg-white" >
                {items?.map((data, index) => (
                    <li
                        key={index}
                        className="flex  items-center justify-between  text-sm text-gray-600 font-semibold hover:text-gray-900   border-b border-gray-200  px-3 py-1 hover:bg-gray-100 rounded-lg transition-all"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => handleNavigate(data.href)}
                    >
                        <div className="flex  w-full justify-between items-center ">
                            <a
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

export default WhyAbroaedNavModal