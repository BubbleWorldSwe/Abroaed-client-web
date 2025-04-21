/* eslint-disable react/prop-types */
import { ChevronRight } from "lucide-react";

const NextArrow = ({ onClick, right = 'right-4' }) => {

    return (
        <button
            onClick={onClick}
            className={`absolute z-10 top-1/2 transform -translate-y-1/2 ${right} bg-black bg-opacity-50 text-white py-2   hover:bg-opacity-80 transition`}
        >
            <ChevronRight />
        </button>
    )
};

export default NextArrow