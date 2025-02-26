/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const SidebarItem = ({ path, label, Icon, isActive }) => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(path)}
            className={`flex items-center px-4 py-3 rounded-md cursor-pointer ${isActive(path) ? "text-black font-bold" : "text-gray-400"} hover:text-black hover:font-bold transition`}
        >
            <Icon className="w-5 h-5" />
            <span className="ml-3 whitespace-nowrap">{label}</span>
        </button>
    );
};

export default SidebarItem;