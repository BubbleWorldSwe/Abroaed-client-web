/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const SidebarItem = ({ path, isOpen, label, Icon, isActive }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(path)}
      className={`flex items-center px-4 py-3 rounded-md cursor-pointer font-semibold transition ${isActive(path) ? "text-black" : "text-[#A1A1AA]"
        } hover:text-black`}
    >
      <Icon className="w-5 h-5" />
      {isOpen && (
        <span className="ml-3 whitespace-nowrap">{label}</span>
      )}
    </button>
  );
};

export default SidebarItem;
