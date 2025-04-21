/* eslint-disable react/prop-types */
import { ChevronLeft } from "lucide-react";

const PrevArrow = ({ onClick, left = 'left-4' }) => (
    <button
        onClick={onClick}
        className={`absolute z-10 top-1/2 transform -translate-y-1/2 ${left} bg-black bg-opacity-50 text-white py-2  hover:bg-opacity-80 transition`}
    >
        <ChevronLeft />
    </button>
);

export default PrevArrow